"use client";

import Sidebar from "@/components/dashboard/Sidebar";

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-gradient-to-br from-gray-900 via-red-900 to-black text-white">
      <Sidebar />
      <main className="flex-1 ml-20 md:ml-64 p-8 transition-all duration-300">
        {children}
      </main>
    </div>
  );
}
