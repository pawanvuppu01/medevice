"use client";

import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from "recharts";

const data = [
  { name: "Jan", Projects: 4 },
  { name: "Feb", Projects: 8 },
  { name: "Mar", Projects: 12 },
  { name: "Apr", Projects: 16 },
  { name: "May", Projects: 22 },
  { name: "Jun", Projects: 28 },
];

export default function AnalyticsPage() {
  return (
    <div className="min-h-screen">
      <h1 className="text-3xl font-bold text-red-800 mb-6">Analytics Overview</h1>
      <div className="bg-white p-6 rounded-2xl shadow-lg">
        <ResponsiveContainer width="100%" height={350}>
          <BarChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 10 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#eee" />
            <XAxis dataKey="name" stroke="#b91c1c" />
            <YAxis stroke="#b91c1c" />
            <Tooltip cursor={{ fill: "#fef2f2" }} />
            <Bar dataKey="Projects" fill="#b91c1c" radius={[6, 6, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
