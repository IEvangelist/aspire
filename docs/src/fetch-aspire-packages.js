// fetch-aspire-packages.js
import fs from 'fs';
import fetch from 'node-fetch';

const API_URL = 'https://azuresearch-usnc.nuget.org/query?q=aspire';
const OUTPUT_PATH = './src/data/aspire-packages.json';

async function fetchPackages() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const packages = data.data.filter(pkg => pkg.id.toLowerCase().startsWith('aspire.'));

  const transformed = packages.map(pkg => ({
    title: pkg.id,
    description: pkg.description,
    icon: pkg.iconUrl || 'https://www.nuget.org/Content/gallery/img/default-package-icon.svg',
    href: `https://www.nuget.org/packages/${pkg.id}`,
    tags: pkg.tags ?? [],
  }));

  fs.writeFileSync(OUTPUT_PATH, JSON.stringify(transformed, null, 2));
  console.log(`✅ Saved ${transformed.length} packages to ${OUTPUT_PATH}`);
}

fetchPackages().catch(err => {
  console.error('❌ Failed to fetch NuGet packages', err);
});
