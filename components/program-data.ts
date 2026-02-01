import { 
  BrainCircuit, 
  Layout, 
  BarChart3, 
  Shield, 
  Terminal, 
  Share2, 
  Database, 
  PenTool, 
  Bitcoin,
  LucideIcon
} from 'lucide-react';

export type ThemeColor = 'blue' | 'purple' | 'orange' | 'emerald' | 'indigo' | 'pink' | 'cyan' | 'rose' | 'amber';
export type PatternType = 'grid' | 'dots' | 'waves' | 'circles';

export interface Course {
  id: string;
  title: string;
  desc: string;
  category: string;
  duration: string;
  students: number;
  features: string[];
  link: string;
  icon: LucideIcon;
  colorTheme: ThemeColor;
  pattern: PatternType;
}

export interface ThemeStyles {
  bg: string;
  text: string;
  light: string;
  border: string;
  hoverBorder: string;
}

export const ThemeMap: Record<ThemeColor, ThemeStyles> = {
  blue:    { bg: 'bg-blue-600',    text: 'text-blue-600',    light: 'bg-blue-50',    border: 'border-blue-100', hoverBorder: 'group-hover:border-blue-300' },
  purple:  { bg: 'bg-purple-600',  text: 'text-purple-600',  light: 'bg-purple-50',  border: 'border-purple-100', hoverBorder: 'group-hover:border-purple-300' },
  orange:  { bg: 'bg-orange-600',  text: 'text-orange-600',  light: 'bg-orange-50',  border: 'border-orange-100', hoverBorder: 'group-hover:border-orange-300' },
  emerald: { bg: 'bg-emerald-600', text: 'text-emerald-600', light: 'bg-emerald-50', border: 'border-emerald-100', hoverBorder: 'group-hover:border-emerald-300' },
  indigo:  { bg: 'bg-indigo-600',  text: 'text-indigo-600',  light: 'bg-indigo-50',  border: 'border-indigo-100', hoverBorder: 'group-hover:border-indigo-300' },
  pink:    { bg: 'bg-pink-600',    text: 'text-pink-600',    light: 'bg-pink-50',    border: 'border-pink-100', hoverBorder: 'group-hover:border-pink-300' },
  cyan:    { bg: 'bg-cyan-600',    text: 'text-cyan-600',    light: 'bg-cyan-50',    border: 'border-cyan-100', hoverBorder: 'group-hover:border-cyan-300' },
  rose:    { bg: 'bg-rose-600',    text: 'text-rose-600',    light: 'bg-rose-50',    border: 'border-rose-100', hoverBorder: 'group-hover:border-rose-300' },
  amber:   { bg: 'bg-amber-600',   text: 'text-amber-600',   light: 'bg-amber-50',   border: 'border-amber-100', hoverBorder: 'group-hover:border-amber-300' },
};

export const DIPLOMAS: Course[] = [
  { 
    id: 'd1',
    title: "Diploma in AI Development", 
    desc: "Build intelligent systems that learn and adapt using machine learning, deep learning, and NLP technologies.", 
    category: "Innovation",
    duration: "16-22 months",
    students: 587,
    features: ["Machine Learning", "Deep Learning", "NLP"],
    link: "https://univad.org/admissions",
    icon: BrainCircuit,
    colorTheme: 'blue',
    pattern: 'grid'
  },
  { 
    id: 'd2',
    title: "Diploma in UX Design", 
    desc: "Design human-centered digital experiences through user research, prototyping, and testing.", 
    category: "Design",
    duration: "12-16 months",
    students: 423,
    features: ["User Research", "Prototyping", "Design Systems"],
    link: "https://univad.org/admissions",
    icon: Layout,
    colorTheme: 'purple',
    pattern: 'circles'
  },
  { 
    id: 'd3',
    title: "Diploma in Digital Marketing", 
    desc: "Drive business growth through data-driven marketing strategies across digital channels.", 
    category: "Business",
    duration: "10-14 months",
    students: 634,
    features: ["SEO/SEM", "Social Media", "Analytics"],
    link: "https://univad.org/admissions",
    icon: BarChart3,
    colorTheme: 'orange',
    pattern: 'waves'
  },
  { 
    id: 'd4',
    title: "Diploma in Cybersecurity", 
    desc: "Master the art of protecting digital infrastructure from evolving cyber threats and attacks.", 
    category: "Technology",
    duration: "12-18 months",
    students: 512,
    features: ["Penetration Testing", "SecOps", "Compliance"],
    link: "https://univad.org/admissions",
    icon: Shield,
    colorTheme: 'emerald',
    pattern: 'dots'
  }
];

export const SHORT_COURSES: Course[] = [
  { 
    id: 's1',
    title: "Gen AI Prompt Engineering", 
    desc: "Master the art of crafting effective prompts for tools like ChatGPT and Claude.", 
    category: "AI & Technology",
    duration: "4-6 weeks",
    students: 1847,
    features: ["Prompt Design", "Productivity"],
    link: "https://univad.org/admissions",
    icon: Terminal,
    colorTheme: 'indigo',
    pattern: 'grid'
  },
  { 
    id: 's2',
    title: "Social Media Strategies", 
    desc: "Transform social engagement into tangible business results through conversion strategies.", 
    category: "Digital Marketing",
    duration: "3-5 weeks",
    students: 2156,
    features: ["Conversion", "Analytics"],
    link: "https://univad.org/admissions",
    icon: Share2,
    colorTheme: 'pink',
    pattern: 'circles'
  },
  { 
    id: 's3',
    title: "DeFi Infrastructure", 
    desc: "Understand decentralized finance protocols and smart contracts powering the future.", 
    category: "Blockchain",
    duration: "5-7 weeks",
    students: 1289,
    features: ["Smart Contracts", "Yield Farming"],
    link: "https://univad.org/admissions",
    icon: Database,
    colorTheme: 'cyan',
    pattern: 'dots'
  },
  { 
    id: 's4',
    title: "Content Marketing", 
    desc: "Create compelling content that attracts, engages, and converts your target audience.", 
    category: "Marketing",
    duration: "4-6 weeks",
    students: 1923,
    features: ["Content Strategy", "SEO Writing"],
    link: "https://univad.org/admissions",
    icon: PenTool,
    colorTheme: 'rose',
    pattern: 'waves'
  },
  { 
    id: 's5',
    title: "Bitcoin & Cryptocurrency", 
    desc: "Navigate the crypto landscape with knowledge of Bitcoin, altcoins, and trading.", 
    category: "Cryptocurrency",
    duration: "4-6 weeks",
    students: 1654,
    features: ["Bitcoin", "Market Analysis"],
    link: "https://univad.org/admissions",
    icon: Bitcoin,
    colorTheme: 'amber',
    pattern: 'grid'
  }
];