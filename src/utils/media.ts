export const FALLBACK_IMAGE =
  'https://placehold.co/800x600/png?text=Image+Unavailable';

export function toAbsoluteMediaUrl(path?: string | null): string {
  if (!path) return FALLBACK_IMAGE;
  if (path.startsWith('http')) return path;
  return path;
}
