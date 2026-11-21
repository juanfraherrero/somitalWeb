const PRIORITIES = {
  "/": 1.0,
  "/trekking-mar-del-plata": 0.9,
  "/actividades/colegios": 0.9,
  "/actividades": 0.8,
  "/comunidad": 0.8,
};

module.exports = {
  siteUrl: "https://www.somital.com.ar",
  generateRobotsTxt: true,
  changefreq: "weekly",
  priority: 0.7,
  transform: async (config, path) => ({
    loc: path,
    changefreq: config.changefreq,
    priority: PRIORITIES[path] ?? config.priority,
    lastmod: new Date().toISOString(),
  }),
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
  },
};
