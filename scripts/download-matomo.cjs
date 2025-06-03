const https = require('https');
const fs = require('fs');
const path = require('path');

const MATOMO_URL = 'https://wellvetted.matomo.cloud/matomo.js';
const OUTPUT_DIR = path.join(__dirname, '../public/matomo');
const OUTPUT_FILE = path.join(OUTPUT_DIR, 'matomo.js');

// Ensure the output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

console.log('Downloading Matomo script...');

https.get(MATOMO_URL, (response) => {
  if (response.statusCode !== 200) {
    console.error(`Failed to download Matomo script: ${response.statusCode}`);
    process.exit(1);
  }

  const file = fs.createWriteStream(OUTPUT_FILE);
  response.pipe(file);

  file.on('finish', () => {
    file.close();
    console.log('Matomo script downloaded successfully!');
  });
}).on('error', (err) => {
  console.error('Error downloading Matomo script:', err.message);
  process.exit(1);
}); 