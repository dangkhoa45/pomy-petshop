import type { IConfig } from 'next-sitemap';

const config: IConfig = {
    siteUrl: process.env.SITE_URL || "https://pomypetshopsoctrang.com",
    generateRobotsTxt: true,
    generateIndexSitemap: true,
    sitemapSize: 7000,
    changefreq: "daily",
    priority: 0.7,
    additionalPaths: async (config) => [
        await config.transform(config, '/'),
        await config.transform(config, '/about'),
        await config.transform(config, '/services'),
        await config.transform(config, '/contact'),
    ],
    robotsTxtOptions: {
        policies: [
            {
                userAgent: '*',
                allow: '/',
            },
            {
                userAgent: '*',
                disallow: ['/api/', '/_next/', '/admin/'],
            },
        ],
        additionalSitemaps: [
            'https://pomypetshopsoctrang.com/sitemap.xml',
        ],
    },
    transform: async (config, path) => {
        // Custom priority and changefreq based on page importance
        const customPriority: Record<string, number> = {
            '/': 1.0,
            '/services': 0.9,
            '/about': 0.8,
            '/contact': 0.7,
        };

        const customChangefreq: Record<string, 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'> = {
            '/': 'daily',
            '/services': 'weekly',
            '/about': 'monthly',
            '/contact': 'monthly',
        };

        return {
            loc: path,
            changefreq: customChangefreq[path] || config.changefreq,
            priority: customPriority[path] || config.priority,
            lastmod: new Date().toISOString(),
        };
    },
    exclude: [
        '/api/*',
        '/_next/*',
        '/admin/*',
        '/_vercel',
        '/_vercel/*',
        '/404',
        '/500',
    ],
};

module.exports = config;
