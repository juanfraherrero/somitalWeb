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
				source: "actividades/actividad-en-sierra-de-la-ventana",
				destination: "actividades/colegios/actividad-en-sierra-de-la-ventana",
				permanent: true, // 308 redirect
			},
			{
				source: "actividades/actividad-en-la-laguna-mar-chiquita",
				destination: "actividades/colegios/actividad-en-la-laguna-mar-chiquita",
				permanent: true, // 308 redirect
			},
			{
				source: "actividades/actividad-en-las-sierras-en-rincon-grande",
				destination:
					"actividades/colegios/actividad-en-las-sierras-en-rincon-grande",
				permanent: true, // 308 redirect
			},
			{
				source: "actividades/actividad-en-la-playa",
				destination: "actividades/colegios/actividad-en-la-playa",
				permanent: true, // 308 redirect
			},
			{
				source: "actividades/actividad-en-la-laguna-mar-chiquita",
				destination: "actividades/colegios/actividad-en-la-laguna-mar-chiquita",
				permanent: true, // 308 redirect
			},
			{
				source: "actividades/actividad-en-sierra-de-la-ventana",
				destination: "actividades/colegios/actividad-en-sierra-de-la-ventana",
				permanent: true, // 308 redirect
			},
		];
	},
};

module.exports = nextConfig;
