import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const TOKEN_NAME = 'medevice_token';

export async function POST() {
  const cookieStore = await cookies();
  cookieStore.set({ name: TOKEN_NAME, value: '', path: '/', httpOnly: true, maxAge: 0 });
  return NextResponse.json({ ok: true });
}
