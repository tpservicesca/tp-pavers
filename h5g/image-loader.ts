import manifest from "./image-manifest.json";

// Static replacement for the Next image optimizer: picks the smallest
// pre-generated variant that covers the requested width (see gen-images.mjs).
const variants = manifest as Record<string, number[]>;

export default function loader({ src, width }: { src: string; width: number }): string {
  const list = variants[src];
  if (!list || list.length === 0) return src;
  const fit = list.find((w) => w >= width);
  // Nothing big enough: the original is the largest we have.
  if (fit === undefined) return src;
  return `/_opt${src}-${fit}.webp`;
}
