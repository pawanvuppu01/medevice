"use client";
import { useRouter } from 'next/navigation';

export default function LogoutPage() {
  const router = useRouter();

  async function handleLogout() {
    await fetch('/api/auth/logout', { method: 'POST' });
    router.push('/');
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <div className="p-6 bg-white rounded shadow">
        <h1 className="text-xl mb-4">Logout</h1>
        <button onClick={handleLogout} className="px-4 py-2 bg-red-600 text-white rounded">Sign out</button>
      </div>
    </main>
  );
}
