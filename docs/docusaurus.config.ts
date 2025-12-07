import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Physical AI & Humanoid Robotics Course Book',
  tagline: 'An online course book on Physical AI and Humanoid Robotics.',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://SyedMuhammadSarmad.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/Physical-AI-Humanoid-Robotics-Course/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'SyedMuhammadSarmad', // Usually your GitHub org/user name.
  projectName: 'Physical-AI-Humanoid-Robotics-Course', // Usually your repo name.

  onBrokenLinks: 'throw',
  trailingSlash: false,

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course/tree/main/docs/',
        },
        blog: {
          showReadingTime: true,
          feedOptions: {
            type: ['rss', 'atom'],
            xslt: true,
          },
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course/tree/main/docs/',
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: {
          trackingID: 'G-XXXXXXXXXX',
          anonymizeIP: true,
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      respectPrefersColorScheme: true,
    },
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID', // dummy value, will be ignored by disableOnRegularTags: true
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY', // dummy value, will be ignored by disableOnRegularTags: true
      indexName: 'YOUR_INDEX_NAME', // dummy value, will be ignored by disableOnRegularTags: true
      // Optional: see doc section below
      contextualSearch: true,
      // Optional: Specify domains where the API key is valid.
      // When specifying domains, the client is allowed to make requests only from the specified domains.
      // If you are using a backend to proxy search requests, you don't need to specify a domain.
      // For example, if your site is hosted on "mywebsite.com" and you want to make requests from "search.mywebsite.com",
      // you can specify `algolia: { appID: '...', apiKey: '...', indexName: '...', searchPagePath: 'search', domains: ['search.mywebsite.com'] }`
      disableOnRegularTags: true, // will use the default local search instead
    },
    navbar: {
      title: 'Physical AI & Humanoid Robotics Course Book',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Tutorial',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course',
          label: 'GitHub',
          position: 'right',
        },
        // Search icon is enabled by default
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
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
              label: 'X',
              href: 'https://x.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/SyedMuhammadSarmad/Physical-AI-Humanoid-Robotics-Course',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Physical AI & Humanoid Robotics Course Book. Built with Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
