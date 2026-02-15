export type NavItem =
  | { label: string; href: string; type?: "link" }
  | { label: string; type: "menu"; items: { label: string; href: string }[] };

export const NAV: NavItem[] = [
  { label: "Home", href: "#home" },
  {
    label: "Category",
    type: "menu",
    items: [
      { label: "Weight Loss", href: "#categories" },
      { label: "Sexual Health", href: "#categories" },
      { label: "Brain Health", href: "#categories" },
    ],
  },
  {
    label: "Top Products",
    type: "menu",
    items: [
      { label: "Best Selling", href: "#products" },
      { label: "New Arrivals", href: "#products" },
    ],
  },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
  { label: "FAQs", href: "#faqs" },
];

export function scrollToId(href: string) {
  const id = href.startsWith("#") ? href.slice(1) : href;
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}
