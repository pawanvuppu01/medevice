import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from '@prisma/client';
import { throttle } from '../../../../lib/rateLimiter';
import { cookies } from 'next/headers';

const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const TOKEN_NAME = 'medevice_token';

export async function POST(req: Request) {
  try {
    const ip = req.headers.get('x-forwarded-for') || req.headers.get('x-real-ip') || 'local';
    const t = throttle(`login:${ip}`, 8, 60_000);
    if (!t.ok) return NextResponse.json({ error: 'Too many requests' }, { status: 429 });

    const body = await req.json();
    const { email, password } = body;
    if (!email || !password) return NextResponse.json({ error: 'Missing credentials' }, { status: 400 });

    const user = await prisma.profiles.findUnique({ where: { email } });
    if (!user || !user.hashedPassword) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const ok = await bcrypt.compare(password, user.hashedPassword);
    if (!ok) return NextResponse.json({ error: 'Invalid credentials' }, { status: 401 });

    const token = jwt.sign({ sub: user.id, email: user.email, role: user.role }, JWT_SECRET, { expiresIn: '7d' });

    const res = NextResponse.json({ ok: true, user: { id: user.id, fullName: user.fullName, email: user.email, role: user.role } });
    const cookieStore = await cookies();
    cookieStore.set({ name: TOKEN_NAME, value: token, httpOnly: true, path: '/', secure: process.env.NODE_ENV === 'production', maxAge: 60 * 60 * 24 * 7 });
    return res;
  } catch (err) {
    console.error(err);
    return NextResponse.json({ error: 'Server error' }, { status: 500 });
  }
}
