const fs = require('fs');
const sharp = require('sharp');

const svg = `<svg width="512" height="512" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="sealGoldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#FFF8EB" />
      <stop offset="30%" stop-color="#E7D4A4" />
      <stop offset="65%" stop-color="#C5A15A" />
      <stop offset="100%" stop-color="#9B7835" />
    </linearGradient>
    <linearGradient id="sealMaroonBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stop-color="#641C32" />
      <stop offset="100%" stop-color="#3F1024" />
    </linearGradient>
  </defs>

  <circle cx="50" cy="50" r="49" fill="url(#sealMaroonBg)" />
  <circle cx="50" cy="50" r="47" stroke="url(#sealGoldGrad)" stroke-width="2" stroke-dasharray="3 2" />
  <circle cx="50" cy="50" r="43" fill="url(#sealMaroonBg)" stroke="url(#sealGoldGrad)" stroke-width="2.5" />
  <circle cx="50" cy="50" r="39" stroke="url(#sealGoldGrad)" stroke-width="1" opacity="0.85" />

  <text
    x="50"
    y="56"
    text-anchor="middle"
    dominant-baseline="middle"
    font-family="'Playfair Display', Georgia, serif"
    font-size="26"
    font-weight="bold"
    letter-spacing="1.5"
    fill="url(#sealGoldGrad)"
  >
    F&amp;M
  </text>

  <circle cx="50" cy="22" r="2" fill="#E7D4A4" />
  <circle cx="50" cy="78" r="2" fill="#E7D4A4" />
</svg>`;

async function main() {
  // 1. Write vector SVG icons
  fs.writeFileSync('src/app/icon.svg', svg);
  fs.writeFileSync('public/icon.svg', svg);

  // 2. Generate crisp raster PNGs
  const png32 = await sharp(Buffer.from(svg)).resize(32, 32).png().toBuffer();
  const png180 = await sharp(Buffer.from(svg)).resize(180, 180).png().toBuffer();

  fs.writeFileSync('src/app/apple-icon.png', png180);
  fs.writeFileSync('public/apple-icon.png', png180);

  // 3. Generate standard ICO container wrapping 32x32 PNG
  const icoHeader = Buffer.alloc(22);
  icoHeader.writeUInt16LE(0, 0); // reserved
  icoHeader.writeUInt16LE(1, 2); // type: 1 = icon
  icoHeader.writeUInt16LE(1, 4); // count of images: 1

  icoHeader.writeUInt8(32, 6);   // width: 32
  icoHeader.writeUInt8(32, 7);   // height: 32
  icoHeader.writeUInt8(0, 8);    // color palette: 0 (no palette)
  icoHeader.writeUInt8(0, 9);    // reserved
  icoHeader.writeUInt16LE(1, 10); // color planes
  icoHeader.writeUInt16LE(32, 12); // bits per pixel: 32
  icoHeader.writeUInt32LE(png32.length, 14); // image data size in bytes
  icoHeader.writeUInt32LE(22, 18); // offset to image data

  const icoBuffer = Buffer.concat([icoHeader, png32]);
  fs.writeFileSync('src/app/favicon.ico', icoBuffer);
  fs.writeFileSync('public/favicon.ico', icoBuffer);

  console.log('Successfully generated F&M wedding logo favicon.ico, icon.svg, and apple-icon.png!');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
