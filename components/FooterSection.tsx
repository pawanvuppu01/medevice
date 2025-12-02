import React from 'react';
import { getContent, getAssetUrl } from '../lib/content';

export default async function FooterSection() {
  const footer = await getContent('footer');
  return (
    <footer className="footer p-6 border-t mt-10">
      <div className="links flex gap-4">
        {footer?.links?.map((l: any) => (
          <a key={l.label} href={l.url}>{l.label}</a>
        ))}
      </div>
      <div className="social flex gap-2 mt-2">
        {footer?.social?.map((s: any) => (
          <a key={s.url} href={s.url} target="_blank" rel="noopener noreferrer">
            <img src={getAssetUrl('icons', s.icon?.split('/').pop(), 'empty')} alt="icon" className="h-6 w-6 inline" />
          </a>
        ))}
      </div>
    </footer>
  );
}
