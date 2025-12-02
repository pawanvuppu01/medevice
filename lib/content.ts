// Pre-compiled content for Vercel compatibility (no filesystem access)
import siteJson from '../resources/content/site.json';
import heroJson from '../resources/content/hero.json';
import servicesJson from '../resources/content/services.json';
import teamJson from '../resources/content/team.json';
import galleryJson from '../resources/content/gallery.json';
import footerJson from '../resources/content/footer.json';

const CONTENT_MAP: Record<string, any> = {
  site: siteJson,
  hero: heroJson,
  services: servicesJson,
  team: teamJson,
  gallery: galleryJson,
  footer: footerJson,
};

const PLACEHOLDER_MAP: Record<string, string> = {
  banner: '/assets/placeholders/banner.png',
  profile: '/assets/placeholders/profile.png',
  empty: '/assets/placeholders/empty.png',
};

export function getContent(section: string): any {
  return CONTENT_MAP[section] || null;
}

export function listAssets(type: string): string[] {
  const assetMap: Record<string, string[]> = {
    icons: ['logo.png', 'favicon.ico', 'regulatory.svg', 'quality.svg', 'twitter.svg', 'linkedin.svg'],
    team: ['jane.png', 'john.png'],
    images: ['gallery1.jpg', 'gallery2.jpg', 'gallery3.jpg'],
    banners: ['hero.jpg'],
  };
  return (assetMap[type] || []).map(f => `/assets/${type}/${f}`);
}

export function getAssetUrl(type: string, filename: string, placeholderType: string = 'empty'): string {
  if (!filename) return PLACEHOLDER_MAP[placeholderType] || PLACEHOLDER_MAP.empty;
  return `/assets/${type}/${filename}`;
}
