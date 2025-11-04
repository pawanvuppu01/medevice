"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Slider from "react-slick";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function HomePage() {
  // --- Custom Slider Arrows ---
  const CustomPrevArrow = (props: any) => (
    <button
      onClick={props.onClick}
      className="absolute left-0 top-1/2 -translate-y-1/2 bg-white/90 text-red-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-20"
    >
      <FaArrowLeft />
    </button>
  );

  const CustomNextArrow = (props: any) => (
    <button
      onClick={props.onClick}
      className="absolute right-0 top-1/2 -translate-y-1/2 bg-white/90 text-red-700 p-3 rounded-full shadow-lg hover:scale-110 transition z-20"
    >
      <FaArrowRight />
    </button>
  );

  // --- Services ---
  const services = [
    {
      title: "Consulting",
      desc: "Strategic guidance to achieve regulatory excellence, design control optimization, and seamless market readiness.",
      img: "/images/consulting.jpg",
      link: "/consulting",
    },
    {
      title: "Staffing & Recruiting",
      desc: "We connect MedTech leaders with top-tier engineering, validation, and quality assurance professionals worldwide.",
      img: "/images/staffing.jpg",
      link: "/staffing",
    },
    {
      title: "Training Programs",
      desc: "Upskill your teams with practical, AI-driven workshops in quality, regulatory, and design control disciplines.",
      img: "/images/training.jpg",
      link: "/training",
    },
  ];

  // --- Testimonials ---
  const testimonials = [
    {
      name: "Dr. Sarah Nguyen",
      company: "MedTech Corp",
      message:
        "MeDevice streamlined our FDA submission process — their regulatory expertise is unmatched.",
      image: "anna",
    },
    {
      name: "James Patel",
      company: "BioSolutions Inc.",
      message:
        "Their consulting team was proactive, responsive, and guided us through every stage flawlessly.",
      image: "brian",
    },
    {
      name: "Laura Chen",
      company: "DeviceLabs",
      message:
        "The MeDevice training workshops gave our QA team the edge we needed for ISO compliance.",
      image: "claire",
    },
    {
      name: "Alex Johnson",
      company: "HealthLink Devices",
      message:
        "Professional, organized, and results-driven — a true partner for innovation.",
      image: "david",
    },
  ];

  // --- Collaborator Logos ---
  const logos = [
    { src: "/images/clients/client-medtronic.png", alt: "Medtronic" },
    { src: "/images/clients/client-boston-scientific.png", alt: "Boston Scientific" },
    { src: "/images/clients/client-stryker.png", alt: "Stryker" },
    { src: "/images/clients/client-abbott.png", alt: "Abbott" },
    { src: "/images/clients/client-johnson.png", alt: "Johnson & Johnson" },
    { src: "/images/clients/client-pfizer.png", alt: "Pfizer" },
    { src: "/images/clients/client-gehealthcare.png", alt: "GE Healthcare" },
    { src: "/images/clients/client-philips.png", alt: "Philips" },
    { src: "/images/clients/client-roche.png", alt: "Roche" },
    { src: "/images/clients/client-siemens.png", alt: "Siemens" },
  ];

  // --- Slider Settings ---
  const testimonialSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  const logoSettings = {
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    speed: 700,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  // --- Return Layout ---
  return (
    <main className="bg-gradient-to-br from-gray-950 via-black to-gray-900 text-gray-100">
      {/* HERO SECTION */}
      <section className="relative h-[90vh] flex flex-col justify-center items-center text-center overflow-hidden">
        <Image
          src="/images/hero-banner.jpg"
          alt="AI-driven MedTech Innovation"
          fill
          priority
          className="object-cover brightness-[0.4]"
        />
        <div className="relative z-10 px-6 max-w-5xl">
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-5xl md:text-7xl font-extrabold bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent leading-tight"
          >
            Revolutionizing Medical Device Innovation
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 1 }}
            className="text-lg md:text-xl text-gray-300 mt-6 max-w-3xl mx-auto"
          >
            MeDevice empowers MedTech organizations with AI-driven consulting,
            regulatory strategy, and workforce solutions for next-gen healthcare.
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
            className="mt-10 flex justify-center gap-6"
          >
            <Link
              href="/consulting"
              className="bg-red-600 hover:bg-red-700 px-8 py-4 rounded-full text-lg font-semibold shadow-xl hover:scale-105 transition-all"
            >
              Explore Solutions
            </Link>
            <Link
              href="/contact"
              className="border border-red-500 text-red-400 hover:text-white hover:bg-red-600/30 px-8 py-4 rounded-full text-lg font-semibold transition-all"
            >
              Contact Us
            </Link>
          </motion.div>
        </div>
      </section>

      {/* ABOUT SECTION */}
      <section className="py-24 bg-black/30 backdrop-blur-lg text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-8">Who We Are</h2>
        <p className="max-w-4xl mx-auto text-lg text-gray-300 leading-relaxed">
          <strong>MeDevice</strong> combines regulatory science, AI, and
          engineering excellence to help medical device companies bring
          innovations to market faster, safer, and smarter.
        </p>
      </section>

      {/* SERVICES SECTION */}
      <section className="py-28 bg-gradient-to-br from-gray-950 via-black to-gray-900 text-center">
        <h2 className="text-4xl font-bold text-red-400 mb-14">Our Core Services</h2>
        <div className="grid md:grid-cols-3 gap-10 max-w-7xl mx-auto px-8">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ scale: 1.07 }}
              className="bg-white/10 border border-gray-700/40 rounded-3xl overflow-hidden group cursor-pointer"
            >
              <Image
                src={s.img}
                alt={s.title}
                width={600}
                height={400}
                className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="p-6 text-left">
                <h3 className="text-2xl font-bold text-red-400 mb-3">{s.title}</h3>
                <p className="text-gray-300 mb-4">{s.desc}</p>
                <Link
                  href={s.link}
                  className="text-red-500 font-semibold underline hover:text-red-300 transition"
                >
                  Learn More →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* COLLABORATORS & CLIENTS */}
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-10">
          Our Collaborators & Clients
        </h2>
        <p className="text-gray-400 max-w-3xl mx-auto mb-12">
          Partnering with the most innovative MedTech companies worldwide.
        </p>
        <div className="max-w-6xl mx-auto px-8 relative">
          <Slider {...logoSettings}>
            {logos.map((logo, i) => (
              <div key={i} className="px-6">
                <div className="bg-white rounded-2xl p-6 flex justify-center items-center hover:scale-105 transition">
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    width={180}
                    height={80}
                    className="object-contain opacity-90 hover:opacity-100 transition"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="relative py-24 bg-gradient-to-b from-black via-gray-950 to-black text-center border-t border-gray-800">
        <h2 className="text-4xl font-bold text-red-400 mb-12">Client Testimonials</h2>
        <div className="max-w-6xl mx-auto px-8 relative">
          <Slider {...testimonialSettings}>
            {testimonials.map((t, i) => (
              <div key={i} className="px-4">
                <div className="bg-white/10 border border-gray-700/40 rounded-3xl p-8 shadow-lg text-left hover:scale-[1.02] transition">
                  <div className="flex items-center mb-6">
                    <Image
                      src={`/images/testimonials/user-${t.image}.jpg`}
                      alt={t.name}
                      width={64}
                      height={64}
                      className="rounded-full border border-red-500 mr-4"
                    />
                    <div>
                      <h4 className="font-semibold text-red-400">{t.name}</h4>
                      <p className="text-sm text-gray-400">{t.company}</p>
                    </div>
                  </div>
                  <p className="text-gray-300 italic">“{t.message}”</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 text-center bg-gradient-to-r from-red-700 to-pink-600 text-white">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Transform Your MedTech Journey?
        </h2>
        <p className="max-w-3xl mx-auto text-pink-100 mb-8 text-lg">
          Let’s build the future of healthcare innovation — powered by
          intelligence, compliance, and purpose.
        </p>
        <Link
          href="/contact"
          className="bg-white text-red-700 font-semibold px-10 py-4 rounded-full shadow-xl hover:scale-110 hover:bg-gray-100 transition-all"
        >
          Partner With Us
        </Link>
      </section>

      {/* FOOTER */}
      <footer className="py-10 text-center text-gray-500 text-sm bg-black border-t border-gray-800">
        © {new Date().getFullYear()} MeDevice Inc. | Crafted with ❤️ and AI
      </footer>
    </main>
  );
}
