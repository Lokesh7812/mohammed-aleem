const fs = require('fs');

const content = fs.readFileSync('src/components/Hero.js', 'utf8');

// Find the _UNUSED_PLACEHOLDER line with the base64 garbage and remove it
// It starts at line 5 with: const _UNUSED_PLACEHOLDER = "
const lines = content.split('\n');
const cleanLines = lines.filter(line => {
  // Remove any line that starts with the placeholder or contains massive base64
  if (line.startsWith('const _UNUSED_PLACEHOLDER')) return false;
  if (line.length > 10000) return false; // remove any leftover giant lines
  return true;
});

const newContent = cleanLines.join('\n');
fs.writeFileSync('src/components/Hero.js', newContent);

const newSize = fs.statSync('src/components/Hero.js').size;
console.log('Done! Hero.js size:', newSize, 'bytes (', (newSize/1024).toFixed(1), 'KB )');
// Print first 10 lines
console.log('\n--- First 10 lines ---');
console.log(newContent.split('\n').slice(0, 10).join('\n'));
