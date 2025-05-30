// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Cossiguetes',
  tagline: 'Cossiguetes és un projecte personal que pretén impulsar l’educació sexual i menstrual a l’illa de Menorca, inspirant a professionals i famílies i oferint un acompanyament respectuós de les sexualitats per a infants i joves.',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://cossiguetes.cat',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
 // baseUrl: '/cosiguetes-web/',
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'wansors', // Usually your GitHub org/user name.
  projectName: 'cosiguetes-web', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ca',
    locales: ['ca'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: false,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.          
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Cossiguetes',
        logo: {
          alt: 'Cossiguetes Logo',
          src: 'img/logonew.png',
        },
        items: [
          {
            to: '/',            
            position: 'right',
            label: 'El Projecte',
          },
          {
            type: 'doc',
            docId: 'aboutme',
            position: 'right',
            label: 'Sobre mi',
          },
          {
            type: 'doc',
            docId: 'tallers_aula',
            position: 'right',
            label: 'Tallers a l\'aula',
          },
          {
            type: 'doc',
            docId: 'tallers_families',
            position: 'right',
            label: 'Per famílies',
          },
          {
            type: 'doc',
            docId: 'acompanyament_i_celebracions',
            position: 'right',
            label: 'Celebracions',
          },          
          {
            type: 'doc',
            docId: 'divulgacio',
            position: 'right',
            label: 'Divulgació',
          }
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {            
            title: 'Contacte',
            items: [
              {
                label: 'Email',
                href: 'mailto:raquel.lluch.pons@gmail.com',
              },              
              {
                label: 'Substack',
                href: 'https://substack.com/@cossiguetes',
              },

            ],
          },          
        ],
        copyright: `Copyright © ${new Date().getFullYear()} - Fet amb Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      } ,  
    }),
    
};

export default config;
