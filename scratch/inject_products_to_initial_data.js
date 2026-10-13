const fs = require('fs');
const path = require('path');

const targetFilePath = path.join(__dirname, '../src/lib/data/initial-data.ts');
const fileContent = fs.readFileSync(targetFilePath, 'utf8');

// Find index of export const initialProducts
const splitMarker = 'export const initialProducts: Product[] =';
const markerIndex = fileContent.indexOf(splitMarker);

if (markerIndex === -1) {
  console.error('Marker not found!');
  process.exit(1);
}

const prefixContent = fileContent.slice(0, markerIndex);
const generatedProducts = JSON.parse(fs.readFileSync('generated_products.json', 'utf8'));

// Format products into TypeScript array string
const productsCode = `${splitMarker} ${JSON.stringify(generatedProducts, null, 2)};\n`;

fs.writeFileSync(targetFilePath, prefixContent + productsCode);
console.log('Successfully injected 100 products into initial-data.ts!');
