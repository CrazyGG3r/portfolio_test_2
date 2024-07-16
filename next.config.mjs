/** @type {import('next').NextConfig} */
const nextConfig = {
    swcMinify: false,
    webpack: (config, { isServer }) => {
        // Disable SWC for now
        config.experiments = { ...config.experiments, topLevelAwait: true };
        return config;
    },
};

export default nextConfig;