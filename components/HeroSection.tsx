import React from 'react';
import { getContent, getAssetUrl } from '../lib/content';

export default function HeroSection() {
  const hero = getContent('hero');
  const banner = getAssetUrl('banners', hero?.banner?.split('/').pop() || '', 'banner');
  return (
    <section className="hero">
      <img src={banner} alt="Hero Banner" className="w-full h-64 object-cover" />
      <h1>{hero?.title}</h1>
      <p>{hero?.subtitle}</p>
      <div>
        {hero?.buttons?.map((btn: any) => (
          <a key={btn.label} href={btn.link} className="btn">{btn.label}</a>
        ))}
      </div>
    </section>
  );
}
