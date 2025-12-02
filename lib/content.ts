import fs from 'fs';
import path from 'path';

const CONTENT_DIR = path.join(process.cwd(), 'resources', 'content');
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const PLACEHOLDER_MAP: Record<string, string> = {
  banner: '/assets/placeholders/banner.png',
  profile: '/assets/placeholders/profile.png',
  empty: '/assets/placeholders/empty.png',
};

export async function getContent(section: string): Promise<any> {
  const file = path.join(CONTENT_DIR, `${section}.json`);
  try {
    const data = await fs.promises.readFile(file, 'utf-8');
    return JSON.parse(data);
  } catch (e) {
    return null;
  }
}

export function listAssets(type: string): string[] {
  const dir = path.join(ASSETS_DIR, type);
  try {
    return fs.readdirSync(dir)
      .filter(f => !f.startsWith('.'))
      .map(f => `/assets/${type}/${f}`);
  } catch {
    return [];
  }
}

export function getAssetUrl(type: string, filename: string, placeholderType: string = 'empty'): string {
  if (!filename) return PLACEHOLDER_MAP[placeholderType] || PLACEHOLDER_MAP.empty;
  const assetPath = `/assets/${type}/${filename}`;
  const filePath = path.join(ASSETS_DIR, type, filename);
  if (fs.existsSync(filePath)) return assetPath;
  return PLACEHOLDER_MAP[placeholderType] || PLACEHOLDER_MAP.empty;
}
