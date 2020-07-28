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
  scripts: [
      'https://buttons.github.io/buttons.js',
      {
        src: "https://smashgg.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-7vydwo/b/20/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=d4b7b8c3",
        async: true,
      },
      {
        src: "https://smashgg.atlassian.net/s/d41d8cd98f00b204e9800998ecf8427e-T/-7vydwo/b/20/a44af77267a987a660377e5c46e0fb64/_/download/batch/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector/com.atlassian.jira.collector.plugin.jira-issue-collector-plugin:issuecollector.js?locale=en-US&collectorId=1d971c66",
        async: true,
      }
  ],
  themeConfig: {
    algolia: {
        apiKey: '89c46064287024ef645cdfe67ff077ca',
        indexName: 'smash',
    },
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
