/** @type {import('next').NextConfig} */
const nextConfig = {
  serverExternalPackages: ['sequelize', 'sqlite3'],
  transpilePackages: ['styled-components'],
  compiler: {
    styledComponents: true,
  },
  experimental: {
    turbo: {
      // Deixar vazio ou não configurar força o Webpack
    }
  }
};

export default nextConfig;