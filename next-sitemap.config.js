/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://evanherchek.dev',
  generateRobotsTxt: false,
  changefreq: 'weekly',
  priority: 0.7,
  sitemapSize: 5000,

  // Transform function to customize individual URLs
  transform: async (config, path) => {
    // Set custom priority for specific pages
    const priorities = {
      '/': 1.0,
      '/about': 0.9,
      '/qualifications': 0.9,
      '/contact': 0.8,
      '/inspirations': 0.7,
    };

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: priorities[path] || config.priority,
      lastmod: new Date().toISOString(),
    };
  },
};
