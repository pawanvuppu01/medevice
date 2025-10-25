import Image from "next/image";

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  image: string;
}

export default function PageHeader({ title, subtitle, image }: PageHeaderProps) {
  return (
    <section className="relative flex items-center justify-center text-center h-[40vh] overflow-hidden">
      <Image
        src={image}
        alt={title}
        fill
        priority
        className="object-cover brightness-90"
      />
      <div className="absolute inset-0 bg-black/40" />
      <div className="relative z-10 text-white px-6">
        <h1 className="text-5xl font-bold mb-2 drop-shadow-lg">{title}</h1>
        {subtitle && <p className="text-lg text-gray-200">{subtitle}</p>}
      </div>
    </section>
  );
}
