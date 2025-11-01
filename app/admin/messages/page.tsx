"use client";
import { useEffect, useState } from "react";
import { apiSafeFetch } from "@/lib/apiSafeFetch";
export default function AdminMessagesPage() {
  const [messages, setMessages] = useState([]);
  async function loadMessages() {
    const res = await apiSafeFetch("/api/contact");
    setMessages(res.data || []);
  }
  useEffect(() => { loadMessages(); }, []);
  return (
    <main className="p-10 text-white">
      <h1 className="text-3xl font-bold mb-6 text-red-500">Contact Messages</h1>
      <ul className="space-y-4">
        {messages.map((m: any) => (
          <li key={m.id} className="border border-gray-700 p-4 rounded">
            <p><span className="font-semibold text-red-400">{m.name}</span> &lt;{m.email}&gt;</p>
            <p className="mt-2 text-gray-300">{m.message}</p>
          </li>
        ))}
      </ul>
    </main>
  );
}
