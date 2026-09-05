import {
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
  Search,
  Zap,
  type LucideIcon,
} from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "What We Do", href: "#what-we-do" },
  { label: "Industries", href: "#industries" },
  { label: "Approach", href: "#approach" },
];

export const PROCESS_STEPS = [
  {
    tag: "Acquire",
    icon: Search,
    title: "Strategic Acquisitions",
    description:
      "Identifying businesses with strong fundamentals and room to grow.",
    variant: "dark" as const,
  },
  {
    tag: "Manage",
    icon: Layers,
    title: "Active Ownership",
    description:
      "Working closely with management teams on strategy and operations.",
    variant: "dark" as const,
  },
  {
    tag: "Grow",
    icon: TrendingUp,
    title: "Growth & Expansion",
    description:
      "Scaling market presence and building long-term, sustainable value.",
    variant: "light" as const,
    image:
      "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=400&q=80",
  },
];

export const ABOUT_CARDS = [
  {
    icon: Zap,
    title: "Operational Excellence",
    description:
      "Implementing efficient processes and proven practices to build scalable, profitable businesses.",
    variant: "light" as const,
  },
  {
    icon: Leaf,
    title: "Sustainable Growth",
    description:
      "Pursuing responsible, disciplined growth that protects long-term value across every holding.",
    variant: "dark" as const,
  },
];

export const INSIGHTS = [
  {
    value: "$2.5B+",
    eyebrow: "About Us",
    title: "Assets Under Management",
    description:
      "Capital deployed across a diversified portfolio spanning six core industries.",
  },
  {
    value: "50+",
    eyebrow: "Our Portfolio",
    title: "Portfolio Companies",
    description:
      "Active operating partnerships built on strategic oversight and hands-on support.",
  },
  {
    value: "15+",
    eyebrow: "Track Record",
    title: "Years of Experience",
    description:
      "Guiding acquisitions, operations, and growth strategies across the economy.",
  },
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
      "We identify and acquire businesses with strong fundamentals, established market positions, and opportunities for continued growth.",
  },
  {
    icon: Layers,
    title: "Portfolio Management",
    description:
      "We actively oversee our portfolio companies and work closely with their management teams to improve performance.",
  },
  {
    icon: Settings2,
    title: "Operational Improvement",
    description:
      "We strengthen operations by implementing efficient processes and applying proven business practices.",
  },
  {
    icon: TrendingUp,
    title: "Growth & Expansion",
    description:
      "We help portfolio companies develop growth strategies, expand market presence, and pursue new opportunities.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Management",
    description:
      "We take a disciplined approach to managing business and investment risks across every holding.",
  },
  {
    icon: MonitorSmartphone,
    title: "Digital Development",
    description:
      "We support the digital development of our businesses, including modern websites and digital platforms.",
  },
];

export type Industry = {
  icon: LucideIcon;
  title: string;
  description: string;
  sector: string;
  focus: string;
  image: string;
};

export const INDUSTRIES: Industry[] = [
  {
    icon: Cpu,
    title: "Technology",
    description:
      "Software, technology, and technology-enabled businesses with room to scale.",
    sector: "Technology",
    focus: "Software & technology-enabled businesses",
    image:
      "https://images.unsplash.com/photo-1531973576160-7125cd663d86?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: HeartPulse,
    title: "Healthcare",
    description: "Medical devices and healthcare-related businesses.",
    sector: "Healthcare",
    focus: "Medical devices & healthcare services",
    image:
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Industrial and consumer manufacturing operations.",
    sector: "Manufacturing",
    focus: "Industrial & consumer manufacturing",
    image:
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Landmark,
    title: "Financial Services",
    description: "Fintech and financial service businesses.",
    sector: "Financial Services",
    focus: "Fintech & financial service businesses",
    image:
      "https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Home,
    title: "Real Estate",
    description: "Commercial and residential real estate.",
    sector: "Real Estate",
    focus: "Commercial & residential real estate",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=1200&q=80",
  },
  {
    icon: Leaf,
    title: "Energy",
    description: "Renewable energy and utility-related businesses.",
    sector: "Energy",
    focus: "Renewable energy & utilities",
    image:
      "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80",
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
