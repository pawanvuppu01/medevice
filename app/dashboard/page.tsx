"use client";

import { useEffect, useState } from "react";
import { supabaseAuth } from "@/lib/authClient";
import { useRouter } from "next/navigation";

interface ContactForm {
  id: number;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

interface ConsultingProject {
  id: number;
  project_name: string;
  project_stage: string;
  progress: number;
  created_at: string;
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null);
  const [contactForms, setContactForms] = useState<ContactForm[]>([]);
  const [projects, setProjects] = useState<ConsultingProject[]>([]);
  const router = useRouter();

  // Get the current logged in user
  useEffect(() => {
    const getUser = async () => {
      const { data } = await supabaseAuth.auth.getUser();
      if (!data.user) {
        router.push("/");
      } else {
        setUser(data.user);
      }
    };
    getUser();
  }, [router]);

  // Load user-related data
  useEffect(() => {
    const loadData = async () => {
      if (!user) return;

      // 1️⃣ Fetch contact form messages tied to this email
      const { data: contactData } = await supabaseAuth
        .from("contact_form")
        .select("*")
        .eq("email", user.email);

      // 2️⃣ Fetch consulting projects (if any)
      const { data: projectData } = await supabaseAuth
        .from("consulting_projects")
        .select("*")
        .limit(5);

      setContactForms(contactData || []);
      setProjects(projectData || []);
    };
    loadData();
  }, [user]);

  const handleLogout = async () => {
    await supabaseAuth.auth.signOut();
    router.push("/");
  };

  if (!user)
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading your dashboard...
      </div>
    );

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-200 px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-center mb-12">
          <h1 className="text-4xl font-extrabold text-red-500">Dashboard</h1>
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 px-6 py-2 rounded-md text-white font-semibold"
          >
            Logout
          </button>
        </div>

        {/* 👤 User Info */}
        <div className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl mb-12 border border-gray-700 shadow-lg">
          <h2 className="text-2xl font-bold text-red-400 mb-3">Welcome, {user.email}</h2>
          <p>User ID: <span className="text-gray-400">{user.id}</span></p>
        </div>

        {/* 📬 Contact Form Submissions */}
        <section className="mb-16">
          <h3 className="text-2xl font-bold text-red-400 mb-6">Your Contact Messages</h3>
          {contactForms.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {contactForms.map((msg) => (
                <div
                  key={msg.id}
                  className="bg-white/5 border border-gray-700 rounded-lg p-6 shadow-md"
                >
                  <p className="text-lg font-semibold text-white mb-1">{msg.name}</p>
                  <p className="text-gray-400 text-sm mb-2">{msg.email}</p>
                  <p className="text-gray-300 mb-2">{msg.message}</p>
                  <p className="text-xs text-gray-500">
                    Sent: {new Date(msg.created_at).toLocaleString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No contact form submissions yet.</p>
          )}
        </section>

        {/* 📊 Projects Section */}
        <section>
          <h3 className="text-2xl font-bold text-red-400 mb-6">Consulting Projects</h3>
          {projects.length > 0 ? (
            <div className="grid md:grid-cols-2 gap-6">
              {projects.map((proj) => (
                <div
                  key={proj.id}
                  className="bg-white/5 border border-gray-700 rounded-lg p-6 shadow-md"
                >
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {proj.project_name}
                  </h4>
                  <p className="text-gray-400 mb-1">
                    Stage: <span className="text-white">{proj.project_stage}</span>
                  </p>
                  <p className="text-gray-400 mb-1">
                    Progress:{" "}
                    <span className="text-white">{proj.progress}%</span>
                  </p>
                  <p className="text-xs text-gray-500">
                    Created: {new Date(proj.created_at).toLocaleDateString()}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-400">No consulting projects found.</p>
          )}
        </section>
      </div>
    </main>
  );
}