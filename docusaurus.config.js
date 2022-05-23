// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// For math equations
const math = require('remark-math');
const katex = require('rehype-katex');
const oembed = require('remark-oembed');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'zkHUB',
  tagline: 'A 0xParc ZK Hub',
  url: 'https://learn.0xparc.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: '0xParc', // Usually your GitHub org/user name.
  projectName: 'zkhub', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      // This configures /tutorials directory
      '@docusaurus/plugin-content-docs',
      {
        id: 'tutorials',
        path: 'tutorials',
        routeBasePath: 'tutorials',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [math, oembed],
        rehypePlugins: [katex],
      }
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'courses',
        path: 'courses',
        routeBasePath: 'courses',
        sidebarPath: require.resolve('./sidebars.js'),
        remarkPlugins: [math],
        rehypePlugins: [katex],
      },
    ]
  ],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          routeBasePath: 'docs',
          path: 'docs',
          lastVersion: 'current',
          onlyIncludeVersions: ['current'],
          sidebarPath: require.resolve('./sidebars.js'),
          remarkPlugins: [math],
          rehypePlugins: [katex],
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xPARC/learn.0xparc.org',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/0xPARC/learn.0xparc.org',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  // For math equations
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.24/dist/katex.min.css',
      type: 'text/css',
      integrity:
        'sha384-odtC+0UGzzFL/6PNoE8rX/SPcQDXBJ+uRepguP4QkPCm2LBxH3FA3y+fKSiJ+AmM',
      crossorigin: 'anonymous',
    },
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'zkHUB',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Concepts',
          },
          {
            to: '/courses/intro',
            label: 'Courses',
            position: 'left',
          },
          {
            to: '/tutorials/intro',
            label: 'Tutorials',
            position: 'left',
          },
          { to: '/blog', label: 'Hitchhiker\'s Guide', position: 'left' },
          {
            href: 'https://github.com/0xPARC/learn.0xparc.org',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Concepts',
                to: '/docs/intro',
              },
              {
                label: 'Courses',
                to: '/courses/intro',
              },
              {
                label: 'Tutorials',
                to: '/tutorials/intro',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
              },
              {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
              },
              {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                href: 'https://0xparc.org/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/0xPARC/learn.0xparc.org',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Built for 0xParc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
