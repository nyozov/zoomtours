export type NavigationItem = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

export const navigation: NavigationItem[] = [
  { name: "Home", href: "/" },
  {
    name: "Tours",
    href: "#",
    dropdown: [
      { name: "Day Tours", href: "/products/web" },
      { name: "Niagara Falls Tours", href: "/tours/niagarafalls" },
      { name: "Multi City Tours", href: "/tours/multicity" },
      { name: "Canadian Tours", href: "/tours/canadian" },
      { name: "USA Tours", href: "/tours/usa" },
    ],
  },
  { name: "Blog", href: "/blog" },
  { name: "About", href: "/about" },
  { name: "Cities", href: "/cities" },
];
