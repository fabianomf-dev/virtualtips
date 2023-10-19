/** @type {import('next').NextConfig} */
const nextConfig = {
    eslint: {
        // Desabilitar ESLint no ambiente de produção
        ignoreDuringBuilds: process.env.NODE_ENV === 'production',
      }
}

module.exports = nextConfig
