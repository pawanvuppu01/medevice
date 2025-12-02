"use client";
import { useEffect, useState } from 'react';

type EventItem = { type: string; payload: any; publishedBy?: string; ts?: number };

export default function AdminInsights() {
  const [events, setEvents] = useState<EventItem[]>([]);
  const [connected, setConnected] = useState(false);

  useEffect(() => {
    const es = new EventSource('/api/realtime/stream');
    es.onopen = () => setConnected(true);
    es.onmessage = (e) => {
      try {
        const data = JSON.parse(e.data);
        setEvents((s) => [data, ...s].slice(0, 50));
      } catch (err) {
        // ignore
      }
    };
    es.onerror = () => setConnected(false);
    return () => es.close();
  }, []);

  return (
    <main className="p-6">
      <h1 className="text-2xl mb-4">Realtime Insights</h1>
      <div className="mb-4">Status: {connected ? 'Connected' : 'Disconnected'}</div>
      <div className="grid grid-cols-1 gap-4">
        <div className="bg-white p-4 rounded shadow">
          <h2 className="text-lg mb-2">Recent events</h2>
          <ul>
            {events.map((ev, i) => (
              <li key={i} className="border-b py-2">
                <div className="text-sm text-gray-600">{new Date(ev.ts || Date.now()).toLocaleString()}</div>
                <div className="font-medium">{ev.type}</div>
                <pre className="text-sm mt-1">{JSON.stringify(ev.payload, null, 2)}</pre>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
