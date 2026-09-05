import {
  Building2,
  Cpu,
  HeartPulse,
  Factory,
  Landmark,
  Home,
  Leaf,
  Target,
  Layers,
  Settings2,
  TrendingUp,
  ShieldCheck,
  MonitorSmartphone,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Approach", href: "#approach" },
];

export const STATS = [
  { value: "$2.5B+", label: "Assets under management" },
  { value: "50+", label: "Portfolio companies" },
  { value: "15+", label: "Years of experience" },
  { value: "6", label: "Core industries" },
];

export type Service = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const SERVICES: Service[] = [
  {
    icon: Target,
    title: "Strategic Acquisitions",
    description:
      "We identify and acquire businesses with strong fundamentals, established market positions, and opportunities for continued growth, focused on building sustainable long-term value.",
  },
  {
    icon: Layers,
    title: "Portfolio Management",
    description:
      "We actively oversee our portfolio companies and work closely with their management teams, combining strategic oversight with operational expertise to improve performance.",
  },
  {
    icon: Settings2,
    title: "Operational Improvement",
    description:
      "We strengthen operations by implementing efficient processes, identifying areas for improvement, and applying proven business practices to build scalable, profitable businesses.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion",
    description:
      "We help portfolio companies develop and execute growth strategies, expand their market presence, improve their capabilities, and pursue new opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "We take a disciplined approach to managing business and investment risks, working to protect our investments while creating opportunities for sustainable growth.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Development",
    description:
      "We support the digital development of our businesses, including the creation and improvement of modern websites and digital platforms that strengthen their presence.",
  },
];

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
};

export const INDUSTRIES: Industry[] = [
  {
    icon: Cpu,
    title: "Technology",
    description: "Software, technology, and technology-enabled businesses.",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Medical devices and healthcare-related businesses.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial and consumer manufacturing.",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Fintech and financial service businesses.",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Commercial and residential real estate.",
  },
  {
    icon: Leaf,
    title: "Energy",
    description: "Renewable energy and utility-related businesses.",
  },
];

export const APPROACH_PILLARS = [
  "Long-term value creation",
  "Strategic ownership",
  "Operational excellence",
  "Sustainable growth",
  "Portfolio diversification",
  "Risk management",
  "Responsible & sustainable practices",
];

export const FOOTER_INDUSTRY_LINKS = INDUSTRIES.map((i) => i.title);

export { Building2 };
