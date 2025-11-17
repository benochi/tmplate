export type WorkItem = {
  title: string;
  excerpt: string;
  image: string;
  href: string; // internal or external
};

export const workItems: WorkItem[] = [
  { title: "Café Azul", excerpt: "Local café landing page focused on calls.", image: "/images/site1.jpg", href: "/work/cafe-azul" },
  { title: "ProBuild Services", excerpt: "Contractor services with clear pricing.", image: "/images/site2.jpg", href: "/work/probuild" },
  { title: "Bright Dental", excerpt: "Clinic site optimized for local search.", image: "/images/site3.jpg", href: "/work/bright-dental" }
];
