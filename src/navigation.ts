import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Why iulink',
      href: getPermalink('/why-iulink'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Docs',
      href: 'https://docs.iulink.com',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [
    { text: 'Get started free', href: getPermalink('/download'), variant: 'primary' },
  ],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Why iulink', href: getPermalink('/why-iulink') },
        { text: 'Pricing', href: getPermalink('/pricing') },
        { text: 'Download', href: getPermalink('/download') },
        { text: 'Changelog', href: '#' },
      ],
    },
    {
      title: 'Use cases',
      links: [
        { text: 'Homelab', href: '#' },
        { text: 'Developer tunnels', href: '#' },
        { text: 'Team sharing', href: '#' },
        { text: 'Edge & IoT', href: '#' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { text: 'Docs', href: 'https://docs.iulink.com' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Discord community', href: '#' },
        { text: 'GitHub', href: 'https://github.com/iulink' },
        { text: 'Status', href: 'https://status.iulink.com' },
      ],
    },
    {
      title: 'Company',
      links: [
        { text: 'About', href: getPermalink('/about') },
        { text: 'Contact', href: getPermalink('/contact') },
        { text: 'Terms', href: getPermalink('/terms') },
        { text: 'Privacy', href: getPermalink('/privacy') },
      ],
    },
  ],
  secondaryLinks: [
    { text: 'Terms', href: getPermalink('/terms') },
    { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/iulink' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: '#' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/iulink' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} iulink. AGPL v3 for open-source components. All rights reserved.
  `,
};
