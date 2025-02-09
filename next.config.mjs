/** @type {import('next').NextConfig} */
const nextConfig = {
    publicRuntimeConfig: {
        CLIENT_BACKEND_BASE_URL: process.env.CLIENT_BACKEND_BASE_URL ?? "",
    },
    serverRuntimeConfig: {
        BACKEND_BASE_URL: process.env.BACKEND_BASE_URL ?? "",
    }
};

export default nextConfig;
