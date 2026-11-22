/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/colegios",
				destination: "/actividades/colegios",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/actividad-en-sierra-de-la-ventana",
				destination: "/actividades/colegios/actividad-en-sierra-de-la-ventana",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/actividad-en-la-laguna-mar-chiquita",
				destination: "/actividades/colegios/actividad-en-la-laguna-mar-chiquita",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/actividad-en-la-playa",
				destination: "/actividades/colegios/actividad-en-la-playa",
				permanent: true, // 308 redirect
			},
			// URLs viejas que ya están indexadas: se redirigen a las nuevas para no perder posicionamiento
			{
				source: "/actividades/actividad-rincon-grande",
				destination: "/actividades/trekking-en-sierras-de-mar-del-plata",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividad-rincon-grande",
				destination: "/actividades/trekking-en-sierras-de-mar-del-plata",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/colegios/actividad-rincon-grande",
				destination: "/actividades/colegios/actividad-en-las-sierras",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/actividad-en-las-sierras-en-rincon-grande",
				destination: "/actividades/colegios/actividad-en-las-sierras",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividades/colegios/actividad-en-las-sierras-en-rincon-grande",
				destination: "/actividades/colegios/actividad-en-las-sierras",
				permanent: true, // 308 redirect
			},
			// Parapente se dejó de ofrecer
			{
				source: "/actividades/vuelo-en-parapente",
				destination: "/actividades",
				permanent: true, // 308 redirect
			},
			{
				source: "/actividad-en-las-sierras-en-rincon-grande",
				destination: "/actividades/colegios/actividad-en-las-sierras",
				permanent: true, // 308 redirect
			},
		];
	},
};

module.exports = nextConfig;
