"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function StaffingPage() {
  return (
    <main className="overflow-hidden bg-white text-slate-800 selection:bg-blue-200 selection:text-blue-900">
      {/* ===== HERO SECTION ===== */}
      <section className="relative flex flex-col items-center justify-center text-center py-40 px-6">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="relative z-10 max-w-5xl"
        >
          <h1 className="text-6xl md:text-7xl font-extrabold text-blue-900 leading-tight">
            Precision <span className="italic text-blue-600">Staffing & Recruitment</span>
          </h1>
          <p className="mt-8 text-xl text-slate-700 font-light max-w-3xl mx-auto">
            Connecting MedTech innovators with world-class professionals in
            engineering, regulatory, and digital transformation.
          </p>
        </motion.div>

        <div className="absolute inset-0 -z-10">
          <Image
            src="/images/staffing/staffing-banner.jpg"
            alt="Staffing Banner"
            fill
            priority
            className="object-cover brightness-[0.55]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/20 to-slate-100/80" />
        </div>
      </section>

      {/* ===== INTRODUCTION ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          Building the Future Workforce of MedTech
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          At MeDevice, we understand that the success of any medical technology
          initiative lies in its people. Our staffing division provides end-to-end
          workforce solutions for startups, enterprises, and clinical organizations.
          <br /><br />
          We specialize in connecting top-tier talent with critical roles across
          regulatory compliance, R&D, manufacturing, data science, and cloud-based
          medical systems. Every candidate is vetted for technical skill, domain
          experience, and culture fit.
        </motion.p>
      </section>

      {/* ===== SERVICE SEGMENTS ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Specialized Recruitment Divisions
        </motion.h2>
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 text-left">
          {[
            {
              title: "Regulatory & Quality Systems Talent",
              desc: "We identify specialists in FDA submissions, ISO 13485, EU MDR compliance, and post-market surveillance — ensuring every hire strengthens your audit readiness.",
            },
            {
              title: "Engineering & Product Development",
              desc: "From embedded systems to AI-enabled devices, we supply engineers who accelerate development lifecycles without compromising on quality or safety.",
            },
            {
              title: "Data Science & Digital Health",
              desc: "MeDevice connects data scientists, analysts, and software experts who understand healthcare interoperability, cybersecurity, and predictive analytics.",
            },
            {
              title: "Clinical & Manufacturing Professionals",
              desc: "Whether scaling a pilot line or managing global distribution, our talent network includes experienced technicians, project leads, and validation engineers.",
            },
          ].map((sector, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className="bg-white border border-slate-200 rounded-3xl p-8 shadow-lg hover:shadow-xl transition-all"
            >
              <h3 className="text-2xl font-semibold text-blue-700 mb-4">
                {sector.title}
              </h3>
              <p className="text-slate-700 font-light leading-relaxed">
                {sector.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ===== OUR APPROACH ===== */}
      <section className="py-24 px-6 bg-gradient-to-b from-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-bold text-blue-800 mb-10"
        >
          The MeDevice Hiring Philosophy
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light"
        >
          Our recruitment model blends human expertise with technology.  
          Using proprietary matching algorithms and domain-specific filters, 
          we ensure every shortlisted candidate aligns with your mission and technical needs.
          <br /><br />
          We believe in partnerships, not placements. Our consultants engage deeply
          with your team to understand your workflows, regulatory obligations,
          and innovation goals — ensuring each hire becomes a long-term contributor.
        </motion.p>
      </section>

      {/* ===== VALUE PROPOSITION ===== */}
      <section className="py-24 px-6 bg-gradient-to-r from-white via-slate-50 to-white text-center">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold text-blue-800 mb-10"
        >
          Why Partner with MeDevice?
        </motion.h2>
        <div className="max-w-5xl mx-auto text-lg text-slate-700 leading-relaxed font-light space-y-6">
          <p>
            With a presence across the U.S., Europe, and Asia, MeDevice provides 
            global reach with local understanding. Our recruiters come from 
            healthcare and engineering backgrounds — they speak your language.
          </p>
          <p>
            Every engagement begins with a role analysis workshop, identifying 
            technical skills, compliance demands, and growth objectives. 
            We then curate a shortlist within 7–10 business days, supported 
            by complete documentation and candidate validation reports.
          </p>
          <p>
            Our clients report faster onboarding, reduced compliance gaps, and 
            higher employee retention through our integrated staffing model.  
            From contract placements to permanent executive searches, 
            MeDevice ensures talent precision.
          </p>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-28 text-center bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <h2 className="text-4xl font-bold mb-4">Let’s Build Your Dream Team</h2>
        <p className="max-w-3xl mx-auto text-blue-100 text-lg mb-10 font-light">
          Partner with MeDevice to access a curated network of engineers, scientists, 
          and compliance professionals shaping the next generation of medical technology.
        </p>
        <Link
          href="/contact"
          className="bg-white text-blue-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:bg-blue-100 hover:scale-105 transition-all"
        >
          Start Hiring
        </Link>
      </section>

      <footer className="py-10 text-center text-slate-500 text-sm bg-white border-t border-slate-200">
        © {new Date().getFullYear()} MeDevice Inc. | Empowering MedTech Through AI
      </footer>
    </main>
  );
}
