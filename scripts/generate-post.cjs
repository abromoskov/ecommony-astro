const fs = require('fs');
const path = require('path');

const [, , category, slug, title] = process.argv;

if (!category || !slug || !title) {
  console.log('Usage: node scripts/generate-post.js <category> <slug> "<title>"');
  process.exit(1);
}

const validCategories = ['shopify', 'magento', 'wordpress', 'seo', 'tracking', 'speed'];

if (!validCategories.includes(category)) {
  console.log(`Invalid category. Use one of: ${validCategories.join(', ')}`);
  process.exit(1);
}

const today = new Date().toISOString().slice(0, 10);

const content = `---
title: "${title}"
description: ""
category: "${category}"
date: ${today}
author: "Nigel Abramow"
---

Write intro here.
`;

const outDir = path.join(__dirname, '..', 'src', 'content', 'blog', category);
const outFile = path.join(outDir, `${slug}.md`);

if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

if (fs.existsSync(outFile)) {
  console.log(`File already exists: ${outFile}`);
  process.exit(1);
}

fs.writeFileSync(outFile, content, 'utf8');
console.log(`Created: ${outFile}`);
