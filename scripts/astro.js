const fs = require('fs');
const path = require('path');

// Load consts.js
const constsPath = path.join(__dirname, '../consts.js');
const consts = require(constsPath);

// Prepare the content for astro.ts
const astroContent = `
export const SITE = {
  TITLE: '${consts.site.title}',
  DESCRIPTION: '${consts.site.description}',
  EMAIL: '${consts.email_address}',
  NUM_POSTS_ON_HOMEPAGE: ${consts.num_posts_on_homepage},
  POSTS_PER_PAGE: ${consts.posts_per_page},
  SITEURL: '${consts.site_url}',
};

export const SOCIAL_LINKS = [
  ...${JSON.stringify(consts.SOCIAL, null, 2)},
  { href: '/rss.xml', label: 'RSS' }
];
`;

// Write to astro.ts in the shared-configs directory
const outputPath = path.join(__dirname, '../astro.ts');
fs.writeFileSync(outputPath, astroContent.trim());
console.log('astro.ts has been generated successfully in shared-configs.');