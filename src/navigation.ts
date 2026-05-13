import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    {
      text: 'Why Linkvec',
      href: getPermalink('/why-linkvec'),
    },
    {
      text: 'Pricing',
      href: getPermalink('/pricing'),
    },
    {
      text: 'Docs',
      href: 'https://docs.linkvec.com',
    },
    {
      text: 'Blog',
      href: getBlogPermalink(),
    },
  ],
  actions: [{ text: 'Get Started', href: getPermalink('/download'), variant: 'primary' as const }],
};

export const footerData = {
  links: [
    {
      title: 'Product',
      links: [
        { text: 'Why Linkvec', href: getPermalink('/why-linkvec') },
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
        { text: 'Docs', href: 'https://docs.linkvec.com' },
        { text: 'Blog', href: getBlogPermalink() },
        { text: 'Discord community', href: 'https://discord.gg/linkvec' },
        { text: 'GitHub', href: 'https://github.com/linkvec' },
        { text: 'Status', href: 'https://status.linkvec.com' },
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
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://x.com/linkvec' },
    { ariaLabel: 'Discord', icon: 'tabler:brand-discord', href: 'https://discord.gg/linkvec' },
    { ariaLabel: 'GitHub', icon: 'tabler:brand-github', href: 'https://github.com/linkvec' },
    { ariaLabel: 'RSS', icon: 'tabler:rss', href: getAsset('/rss.xml') },
  ],
  footNote: `
    &copy; ${new Date().getFullYear()} Linkvec. AGPL v3 for open-source components. All rights reserved.
  `,
};
