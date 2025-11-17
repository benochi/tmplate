export type Product = {
  name: string;
  price: string;
  blurb?: string;
  ctaText: string;
  ctaHref: string;
  features: string[];
  popular?: boolean;
};

export const products: Product[] = [
  {
    name: "Starter",
    price: "$699",
    blurb: "Single-page site, fast turnaround.",
    ctaText: "Get Starter",
    ctaHref: "/contact",
    features: ["1 page", "Mobile-first", "Basic SEO", "Contact form"]
  },
  {
    name: "Business",
    price: "$1,499",
    blurb: "Best for local SMBs.",
    ctaText: "Get Business",
    ctaHref: "/contact",
    features: ["Up to 5 pages", "Structured SEO", "Lead capture", "Analytics"],
    popular: true
  },
  {
    name: "Pro",
    price: "$2,499",
    blurb: "Bigger site + content help.",
    ctaText: "Get Pro",
    ctaHref: "/contact",
    features: ["Up to 10 pages", "Blog/news", "Schema basics", "Performance pass"]
  }
];