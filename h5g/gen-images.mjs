// Pre-generates the resized WebP variants that next/image used to make on the fly.
// Hostinger Agency has no Node runtime, so the optimizer does not exist there.
// Output: public/_opt/<original path>-<width>.webp + h5g/image-manifest.json
import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";

const WIDTHS = [16, 32, 48, 64, 96, 128, 256, 640, 750, 828, 1080, 1200];
const ROOT = path.resolve("public");
const OUT = path.join(ROOT, "_opt");
const manifest = {};

function* walk(dir) {
  for (const e of fs.readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, e.name);
    if (e.isDirectory()) { if (p !== OUT) yield* walk(p); }
    else if (/\.(png|jpe?g|webp|avif)$/i.test(e.name)) yield p;
  }
}

fs.rmSync(OUT, { recursive: true, force: true });
for (const file of walk(ROOT)) {
  const rel = "/" + path.relative(ROOT, file).split(path.sep).join("/");
  const meta = await sharp(file).metadata();
  if (!meta.width) continue;
  const widths = WIDTHS.filter((w) => w < meta.width);
  const made = [];
  for (const w of widths) {
    const dest = path.join(OUT, `${rel}-${w}.webp`);
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    await sharp(file).resize({ width: w }).webp({ quality: 75 }).toFile(dest);
    made.push(w);
  }
  // Full-size variant only when it is actually lighter than the original.
  const full = path.join(OUT, `${rel}-${meta.width}.webp`);
  fs.mkdirSync(path.dirname(full), { recursive: true });
  await sharp(file).webp({ quality: 75 }).toFile(full);
  if (fs.statSync(full).size < fs.statSync(file).size) made.push(meta.width);
  else fs.rmSync(full);
  if (made.length) manifest[rel] = made;
}
fs.writeFileSync("h5g/image-manifest.json", JSON.stringify(manifest));
console.log(`images: ${Object.keys(manifest).length}, variants: ${Object.values(manifest).flat().length}`);
