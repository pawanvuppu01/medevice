type Key = string;

const windows = new Map<Key, { count: number; expiresAt: number }>();

export function throttle(key: Key, limit = 10, windowMs = 60_000) {
  const now = Date.now();
  const existing = windows.get(key);
  if (!existing || existing.expiresAt < now) {
    windows.set(key, { count: 1, expiresAt: now + windowMs });
    return { ok: true, remaining: limit - 1 };
  }
  if (existing.count >= limit) {
    return { ok: false, retryAfter: Math.ceil((existing.expiresAt - now) / 1000) };
  }
  existing.count += 1;
  windows.set(key, existing);
  return { ok: true, remaining: limit - existing.count };
}
