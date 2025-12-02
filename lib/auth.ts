import jwt from 'jsonwebtoken';
import { cookies } from 'next/headers';

const JWT_SECRET = process.env.JWT_SECRET || 'dev_secret_change_me';
const TOKEN_NAME = 'medevice_token';

export async function getCurrentUser() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(TOKEN_NAME)?.value;
    if (!token) return null;
    const payload: any = jwt.verify(token, JWT_SECRET);
    return { id: payload.sub, email: payload.email, role: payload.role };
  } catch (err) {
    return null;
  }
}

export function getTokenName() {
  return TOKEN_NAME;
}
