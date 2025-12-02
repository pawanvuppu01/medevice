import React from 'react';
import { getContent, getAssetUrl } from '../lib/content';

export default async function ServicesSection() {
  const services = await getContent('services');
  return (
    <section className="services grid grid-cols-1 md:grid-cols-2 gap-6">
      {services?.map((svc: any) => (
        <div key={svc.title} className="service-card p-4 border rounded">
          <img src={getAssetUrl('icons', svc.icon?.split('/').pop(), 'empty')} alt={svc.title} className="h-12 w-12" />
          <h3>{svc.title}</h3>
          <p>{svc.description}</p>
        </div>
      ))}
    </section>
  );
}
