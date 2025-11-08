"use client";
import { useEffect, useState } from "react";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
);

export default function MessagesAdmin() {
  const [inquiries, setInquiries] = useState([]);

  useEffect(() => {
    async function load() {
      const { data } = await supabase
        .from("inquiries")
        .select("*")
        .order("created_at", { ascending: false });
      setInquiries(data || []);
    }
    load();
  }, []);

  const grouped = inquiries.reduce((acc: any, curr: any) => {
    (acc[curr.inquiry_type] = acc[curr.inquiry_type] || []).push(curr);
    return acc;
  }, {});

  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold text-brandBlue mb-6">Inquiries Dashboard</h1>
      {Object.entries(grouped).map(([type, items]: any) => (
        <div key={type} className="mb-8">
          <h2 className="text-2xl font-semibold text-accentBlue mb-4">{type}</h2>
          <div className="space-y-4">
            {items.map((inq: any) => (
              <div
                key={inq.id}
                className="p-4 bg-white/70 rounded-lg border border-borderGray"
              >
                <p>
                  <strong>{inq.full_name}</strong> — {inq.email}
                </p>
                {inq.company && <p>Company: {inq.company}</p>}
                {inq.phone && <p>Phone: {inq.phone}</p>}
                {inq.subject && <p>Subject: {inq.subject}</p>}
                <p className="mt-2">{inq.message}</p>
                <p className="text-sm text-gray-500 mt-1">
                  Submitted: {new Date(inq.created_at).toLocaleString()}
                </p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
