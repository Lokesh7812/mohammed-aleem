const fs = require('fs');
const content = fs.readFileSync('src/components/Hero.js', 'utf8');

// Find the base64 data
const startTag = 'data:image/png;base64,';
const startIdx = content.indexOf(startTag);
if (startIdx === -1) {
  console.log('No base64 PNG found');
  process.exit(1);
}

// Find the end of the string (closing quote)
const dataStart = startIdx + startTag.length;
const endIdx = content.indexOf('"', dataStart);
const b64 = content.substring(dataStart, endIdx);

console.log('Base64 length:', b64.length);
const buf = Buffer.from(b64, 'base64');
fs.writeFileSync('public/profile.png', buf);
console.log('Image saved! Size:', fs.statSync('public/profile.png').size, 'bytes');
