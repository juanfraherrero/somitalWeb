module.exports = {
  siteUrl: "https://www.somital.com.ar",
  generateRobotsTxt: true, // (optional)
  changefreq: "daily",
  priority: 0.7,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
  // exclude: ["/server-sitemap-index.xml"], // <= exclude here
  // robotsTxtOptions: {
  //   additionalSitemaps: [
  //     "https://www.somitalaventuras.com.ar/server-sitemap-index.xml", // <==== Add here
  //   ],
  // },
};
