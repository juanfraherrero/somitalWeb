/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: "/colegios",
                destination: "/actividades/colegios",
                permanent: true, // 308 redirect
            },
        ];
    },
};

module.exports = nextConfig;