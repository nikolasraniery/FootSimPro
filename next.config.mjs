/** @type {import('next').NextConfig} */
const nextConfig = {
  // Isso desativa o Turbopack explicitamente se ele estiver sendo forçado
  transpilePackages: ['styled-components'], 
  compiler: {
    styledComponents: true,
  },
  // Garante que não usaremos o motor experimental que quebra no WASM
  experimental: {
    turbo: {
      // Deixar vazio ou não configurar força o Webpack
    }
  }
};

export default nextConfig;