"use client";
import { ReactNode } from "react";
import { useAuth } from "@/lib/hooks/useAuth";
import { useRouter } from "next/navigation";

export default function AdminGuard({ children }: { children: ReactNode }) {
  const { user, loading } = useAuth("/login");
  const router = useRouter();

  if (loading) {
    return <p className="text-center text-gray-400 mt-10">Checking authentication...</p>;
  }

  if (!user) {
    router.push("/login");
    return null;
  }

  return <>{children}</>;
}
