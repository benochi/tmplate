export type StatItem = {
  value: number | string;
  label: string;
  sublabel?: string;
  suffix?: string;
};
export const statsItems: StatItem[] = [
  { value: 3, label: "Avg. days to launch", sublabel: "From signed quote" },
  { value: "95%", label: "Mobile Lighthouse score", suffix: "" },
  { value: 50, label: "Local leads / yr", sublabel: "Typical SMB result", suffix: "+" },
  { value: "$0", label: "Ongoing CMS fees" }
];