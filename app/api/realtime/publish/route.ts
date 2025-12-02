import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import { publishEvent } from '../../../../lib/realtime';
import { PrismaClient } from '@prisma/client';
import { throttle } from '../../../../lib/rateLimiter';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();
const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const TOKEN_NAME = 'medevice_token';

export async function POST(req: Request) {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    if (!token) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'local';
    const t = throttle(`publish:${ip}`, 30, 60_000);
    if (!t.ok) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

    const payload: any = jwt.verify(token, JWT_SECRET);
    if (!payload) return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });

    const body = await req.json();
    const event = body.event || 'message';
    const payloadData = body.payload || {};

    // Optionally persist certain events
    if (event === 'message') {
      await prisma.messages.create({ data: { fullName: payloadData.fullName || 'system', email: payloadData.email || '', service: payloadData.service || 'chat', message: payloadData.message || '' } });
    }

    publishEvent({ type: event, payload: payloadData, publishedBy: payload.email, ts: Date.now() });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
