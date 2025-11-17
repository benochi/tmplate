export type Testimonial = {
  /** The quoted text from your client. */
  quote: string;
  /** Client’s display name (shown in bold). */
  author: string;
  /** Optional short role or company line under the author. */
  role?: string;
  /** Optional square avatar image path (e.g., /images/avatars/name.jpg). */
  avatarSrc?: string;
  /**
   * Can be relative (e.g., "/work/cafe-azul") or absolute (e.g., "https://cafe-azul.biz").
   */
  href?: string;
};


export const testimonials: Testimonial[] = [
  {
    quote: "Launched in 5 days and our calls doubled.",
    author: "Jamie R.",
    role: "Owner, Café Azul",
    avatarSrc: "",
    href: "/work/cafe-azul",
  },
  {
    quote: "Clean, fast, zero headaches from day one.",
    author: "S. Patel",
    role: "Dentist, Bright Dental",
    avatarSrc: "",
    href: "https://brightdental.example",
  },
  {
    quote: "Local leads up 40% within the first month.",
    author: "L. Gomez",
    role: "Contractor, ProBuild",
    avatarSrc: "",
    href: "/work/probuild",
  },
  {
    quote: "Our site speed is night and day—clients noticed.",
    author: "Marina K.",
    role: "Manager, Harbor Fitness",
    avatarSrc: "",
    href: "/work/harbor-fitness",
  },
  {
    quote: "Simple edits, great SEO, and more bookings.",
    author: "Noah B.",
    role: "Owner, GreenLeaf Landscaping",
    avatarSrc: "",
    href: "https://greenleaf-landscaping.example",
  },
  {
    quote: "We finally rank on maps and phones keep ringing.",
    author: "Priya S.",
    role: "Office Admin, Suncoast Plumbing",
    avatarSrc: "",
    href: "/work/suncoast-plumbing",
  },
  {
    quote: "Professional look without the bloat—love it.",
    author: "Aaron T.",
    role: "Partner, NorthStar Legal",
    avatarSrc: "",
    href: "https://northstar-legal.example",
  },
  {
    quote: "Mobile experience is perfect, orders up 25%.",
    author: "Bella M.",
    role: "Owner, FreshBite Deli",
    avatarSrc: "",
    href: "/work/freshbite-deli",
  },
  {
    quote: "Clear calls to action = more service requests.",
    author: "Chris D.",
    role: "Lead Tech, Summit HVAC",
    avatarSrc: "",
    href: "/work/summit-hvac",
  },
  {
    quote: "We look modern and load instantly. Huge win.",
    author: "Dana P.",
    role: "Broker, Bayview Realty",
    avatarSrc: "",
    href: "https://bayviewrealty.example",
  },
  {
    quote: "Setup was painless and content is easy to update.",
    author: "Evan L.",
    role: "Owner, Bolt Electric",
    avatarSrc: "",
    href: "/work/bolt-electric",
  },
  {
    quote: "Accessibility checks passed with flying colors.",
    author: "Fatima R.",
    role: "Coordinator, Riverstone Chiropractic",
    avatarSrc: "",
    href: "/work/riverstone-chiro",
  },
  {
    quote: "Our brand finally feels consistent everywhere.",
    author: "Gina V.",
    role: "Founder, PureGlow Spa",
    avatarSrc: "",
    href: "https://pureglowspa.example",
  },
  {
    quote: "Traffic grew and bounce rate dropped sharply.",
    author: "Hector C.",
    role: "Manager, Coastal Auto",
    avatarSrc: "",
    href: "/work/coastal-auto",
  },
  {
    quote: "Support is fast and the site just works.",
    author: "Isabella F.",
    role: "Owner, Petal & Stem Florist",
    avatarSrc: "",
    href: "https://petalandstem.example",
  },
];

export default testimonials;
