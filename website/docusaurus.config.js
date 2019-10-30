// const users = require('./data/users');
const repoUrl = 'https://github.com/smashgg/developer-portal';

module.exports = {
  title: 'Developer Portal',
  tagline: 'Turning passions into careers',
  url: 'https://developer.smash.gg',
  baseUrl: '/',
  projectName: 'smashgg-developer',
  organizationName: 'smashgg',
  favicon: 'img/favicon/favicon.ico',
  customFields: {
    repoUrl,
    apiUrl: 'https://api.smash.gg/gql/alpha/schema',
  },
  scripts: ['https://buttons.github.io/buttons.js'],
  themeConfig: {
    image: 'img/devgg.png',
    navbar: {
      title: 'Developer Portal',
      logo: {
        alt: 'Developer Portal Logo',
        src: 'img/logo-dark.svg',
      },
      links: [
        { to: 'docs/intro', label: 'Docs', position: 'right' },
        {
          href: 'https://developer.smash.gg/reference/query.doc.html',
          label: 'Schema',
          position: 'right',
        },
        { to: 'explorer', label: 'API Explorer', position: 'right' },
        { to: 'help', label: 'Help', position: 'right' },
        { to: 'blog', label: 'Blog', position: 'right' },
        { to: 'users', label: 'Users', position: 'right' },
      ],
    },
    footer: {
      logo: {
        alt: 'smash.gg',
        src: 'img/favicon/white-favicon.ico',
      },
      copyright: `Copyright © ${new Date().getFullYear()} smash.gg`,
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/intro',
            },
            {
              label: 'Example Usage',
              to: '/docs/examples/set-entrants',
            },
            {
              label: 'API Explorer',
              to: '/explorer',
            },
            {
              label: 'Projects',
              to: 'blog',
            },
          ],
        },
        {
          title: 'smash.gg',
          items: [
            {
              label: 'Home',
              to: '/',
            },
            {
              label: 'Developer Settings',
              href: 'https://smash.gg/admin/profile/developer',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.gg/smashgg',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/smashgg',
            },
            {
              label: 'GitHub',
              href: repoUrl,
            },
          ],
        },
      ],
    },
    googleAnalytics: {
      trackingID: 'UA-58622313-9',
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../docs',
          sidebarPath: require.resolve('./sidebars.json'),
          editUrl: `${repoUrl}/blob/master/docs/`,
        },
        theme: {
          customCss: require.resolve('./static/css/custom.css'),
        },
      },
    ],
  ],
};
