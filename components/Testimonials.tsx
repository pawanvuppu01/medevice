"use client";

import Image from "next/image";
import Slider from "react-slick";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Anna Roberts",
      title: "QA Manager, Medtronic",
      img: "/images/testimonials/user-anna.jpg",
      text: "MeDevice transformed our regulatory submission workflow — faster, smoother, and audit-ready.",
    },
    {
      name: "Brian Lopez",
      title: "Compliance Director, Stryker",
      img: "/images/testimonials/user-brian.jpg",
      text: "Their AI-powered solutions reduced human errors by 40% during our quality audits.",
    },
    {
      name: "Sophia Chen",
      title: "Training Lead, Abbott",
      img: "/images/testimonials/user-sophia.jpg",
      text: "Our engineers gained real-world insights from their training workshops. Highly recommended!",
    },
    {
      name: "Michael Green",
      title: "Project Lead, J&J",
      img: "/images/testimonials/user-michael.jpg",
      text: "We saw measurable improvements in documentation quality and compliance speed.",
    },
    {
      name: "Kevin Brown",
      title: "Design Control Engineer, Boston Scientific",
      img: "/images/testimonials/user-kevin.jpg",
      text: "Their digital DHF tools are a game changer for traceability and reporting.",
    },
    {
      name: "Laura Singh",
      title: "Validation Expert, GE Healthcare",
      img: "/images/testimonials/user-laura.jpg",
      text: "The validation templates saved us weeks of redundant work — absolute time saver.",
    },
    {
      name: "David Patel",
      title: "Consultant, Siemens Healthineers",
      img: "/images/testimonials/user-david.jpg",
      text: "Outstanding service — precise, professional, and highly reliable regulatory support.",
    },
    {
      name: "Julia Moore",
      title: "R&D Coordinator, Roche",
      img: "/images/testimonials/user-julia.jpg",
      text: "Their documentation and design control frameworks set a new benchmark in compliance.",
    },
    {
      name: "James Carter",
      title: "Operations Manager, Philips",
      img: "/images/testimonials/user-james.jpg",
      text: "MeDevice helped align our global teams with unified QMS processes across sites.",
    },
    {
      name: "Claire Evans",
      title: "VP, Regulatory Affairs, Pfizer",
      img: "/images/testimonials/user-claire.jpg",
      text: "Their blend of AI and regulatory expertise makes them our trusted compliance partner.",
    },
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4500,
    slidesToShow: 2,
    slidesToScroll: 1,
    arrows: true,
    responsive: [{ breakpoint: 768, settings: { slidesToShow: 1 } }],
  };

  return (
    <section className="py-24 bg-gradient-to-b from-gray-900 to-black text-center border-t border-gray-800">
      <h2 className="text-4xl font-bold text-red-400 mb-10">What Our Clients Say</h2>
      <div className="max-w-6xl mx-auto px-6">
        <Slider {...settings}>
          {testimonials.map((t) => (
            <div key={t.name} className="p-6">
              <div className="bg-white/10 border border-gray-800 rounded-3xl p-8 text-left shadow-lg hover:bg-white/20 transition">
                <div className="flex items-center gap-4 mb-6">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={70}
                    height={70}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="text-lg font-bold text-red-400">{t.name}</h3>
                    <p className="text-sm text-gray-400">{t.title}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-base italic leading-relaxed">“{t.text}”</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
}
