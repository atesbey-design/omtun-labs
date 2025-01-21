/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://omtunlabs.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 7000,
  exclude: ['/404', '/500'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://omtunlabs.com/server-sitemap.xml',
    ],
  },
} 