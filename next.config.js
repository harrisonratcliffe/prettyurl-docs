const { setupDevPlatform } = require('@cloudflare/next-on-pages/next-dev');

const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
});

if (process.env.NODE_ENV === 'development') {
  setupDevPlatform();
}

module.exports = withNextra();
