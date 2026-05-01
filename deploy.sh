#!/bin/bash

echo "Building Astro..."
npm run build

echo "Deploying blog HTML..."
rsync -av --delete dist/blog/ /var/www/ecommony/public_html/blog/

echo "Deploying Astro assets..."
rsync -av --delete dist/_astro/ /var/www/ecommony/public_html/blog/_astro/

echo "Done."
