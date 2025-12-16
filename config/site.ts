// config/site.ts  (final version - only our festival links, no old ones)
export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "CELESTYUM",
  description: "Electronic music and art festival · Mexico City · 2026",
  navItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Lineup",
      href: "#lineup",
    },
    {
      label: "Venue",
      href: "#venue",
    },
    {
      label: "Tickets",
      href: "#tickets",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  navMenuItems: [
    {
      label: "Home",
      href: "#home",
    },
    {
      label: "About",
      href: "#about",
    },
    {
      label: "Lineup",
      href: "#lineup",
    },
    {
      label: "Venue",
      href: "#venue",
    },
    {
      label: "Tickets",
      href: "#tickets",
    },
    {
      label: "Contact",
      href: "#contact",
    },
  ],
  links: {
    instagram: "https://instagram.com/celestyumfest",
    twitter: "https://x.com/celestyumfest",
    tiktok: "https://tiktok.com/@celestyumfest",
  },
};