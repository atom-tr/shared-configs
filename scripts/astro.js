const fs = require('fs');
const path = require('path');

// Load consts.js
const cnf_path = path.join(__dirname, '../consts.json');
const cnf = JSON.parse(fs.readFileSync(cnf_path, 'utf8'));

// Prepare the content for astro.ts
const astro_content = `
export const SITE = {
  TITLE: '${cnf.site.title}',
  DESCRIPTION: '${cnf.site.description}',
  EMAIL: '${cnf.email_address}',
  NUM_POSTS_ON_HOMEPAGE: ${cnf.site.num_posts_on_homepage},
  POSTS_PER_PAGE: ${cnf.site.posts_per_page},
  SITEURL: '${cnf.site.site_url}',
};

export const SOCIAL_LINKS = [
  ...${JSON.stringify(cnf.social, null, 2)},
  { href: '/rss.xml', label: 'RSS' }
];
`;

// Write to astro.ts in the shared-configs directory
const outputPath = path.join(__dirname, '../astro.ts');
fs.writeFileSync(outputPath, astro_content.trim());
console.log('astro.ts has been generated successfully in shared-configs.');