import Image from "next/image";

export default function ServicesPage() {
  const services = [
    {
      title: "Consulting",
      desc: "Regulatory, design-control, and risk-management expertise for compliant innovation.",
      img: "https://images.unsplash.com/photo-1581090700227-1e37b190418e?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Staffing",
      desc: "Access skilled professionals in engineering, quality, and manufacturing.",
      img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=2400&q=90",
    },
    {
      title: "Training",
      desc: "Customized programs on design controls, CAPA, and regulatory compliance.",
      img: "https://images.unsplash.com/photo-1581092334534-7b8f57f11603?auto=format&fit=crop&w=2400&q=90",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 text-center">
      <h1 className="text-4xl font-bold mb-12 text-red-900">Our Services</h1>
      <div className="grid gap-10 md:grid-cols-3 max-w-7xl mx-auto px-4">
        {services.map((s) => (
          <div
            key={s.title}
            className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300"
          >
            <div className="relative w-full h-56">
              <Image
                src={s.img}
                alt={s.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover"
                priority
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-red-800">
                {s.title}
              </h2>
              <p className="text-gray-700 text-base leading-relaxed">
                {s.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
