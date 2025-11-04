"use client";

import Slider from "react-slick";
import Image from "next/image";

export default function ClientList() {
  const clients = [
    { name: "Medtronic", img: "/images/clients/client-medtronic.png" },
    { name: "Boston Scientific", img: "/images/clients/client-boston-scientific.png" },
    { name: "Stryker", img: "/images/clients/client-stryker.png" },
    { name: "Abbott", img: "/images/clients/client-abbott.png" },
    { name: "Johnson & Johnson", img: "/images/clients/client-johnson.png" },
    { name: "Pfizer", img: "/images/clients/client-pfizer.png" },
    { name: "GE Healthcare", img: "/images/clients/client-gehealthcare.png" },
    { name: "Philips", img: "/images/clients/client-philips.png" },
    { name: "Roche", img: "/images/clients/client-roche.png" },
    { name: "Siemens Healthineers", img: "/images/clients/client-siemens.png" },
  ];

  const settings = {
    dots: false,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 4 } },
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div className="max-w-7xl mx-auto px-8">
      <Slider {...settings}>
        {clients.map((c) => (
          <div key={c.name} className="p-8 flex justify-center items-center">
            <Image
              src={c.img}
              alt={c.name}
              width={220}
              height={90}
              className="object-contain opacity-80 hover:opacity-100 transition"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}
