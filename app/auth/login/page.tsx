"use client";
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  async function submit(e: any) {
    e.preventDefault();
    setError('');
    const res = await fetch('/api/auth/login', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password }) });
    const data = await res.json();
    if (!res.ok) {
      setError(data.error || 'Login failed');
      return;
    }
    // redirect to admin if admin
    if (data.user?.role === 'admin') router.push('/admin');
    else router.push('/');
  }

  return (
    <main className="min-h-screen flex items-center justify-center">
      <form onSubmit={submit} className="w-full max-w-md p-6 bg-white rounded shadow">
        <h1 className="text-2xl mb-4">Sign in</h1>
        <label className="block mb-2">Email</label>
        <input className="w-full mb-4 p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label className="block mb-2">Password</label>
        <input type="password" className="w-full mb-4 p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <button className="px-4 py-2 bg-blue-600 text-white rounded">Sign in</button>
      </form>
    </main>
  );
}
