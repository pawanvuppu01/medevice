import React from 'react';
import { getContent, getAssetUrl } from '../lib/content';

export default async function GallerySection() {
  const gallery = await getContent('gallery');
  return (
    <section className="gallery grid grid-cols-2 md:grid-cols-4 gap-4">
      {gallery?.map((img: string, i: number) => (
        <img key={i} src={getAssetUrl('images', img?.split('/').pop(), 'empty')} alt={`Gallery ${i+1}`} className="w-full h-32 object-cover" />
      ))}
    </section>
  );
}
