import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiVite,
  SiPhp,
  SiMysql,
  SiMongodb,
  SiSupabase,
  SiGit,
  SiGithub,
  SiVsco,
  SiCanva,
  SiFigma,
  SiPostman,
} from "react-icons/si"
import { Code2, Database, Cpu, Wrench, Brain, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface SkillItem {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

export interface SkillCategory {
  id: string
  title: string
  icon: LucideIcon
  skills: SkillItem[]
}

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    skills: [
      {
        name: "HTML",
        icon: SiHtml5,
        color: "text-[#E34C26]",
      },
      {
        name: "CSS",
        icon: SiCss3,
        color: "text-[#E34C26]",
      },
      {
        name: "React.js",
        icon: SiReact,
        color: "text-[#61DAFB]",
      },
      {
        name: "Next.js",
        icon: SiNextdotjs,
        color: "text-black dark:text-white",
      },
      {
        name: "TypeScript",
        icon: SiTypescript,
        color: "text-[#3178C6]",
      },
      {
        name: "Vite",
        icon: SiVite,
        color: "text-[#646CFF]",
      },
    ],
  },
  {
    id: "backend-database",
    title: "Backend & Database",
    icon: Database,
    skills: [
      {
        name: "PHP",
        icon: SiPhp,
        color: "text-[#777BB4]",
      },
      {
        name: "MySQL",
        icon: SiMysql,
        color: "text-[#4479A1]",
      },
      {
        name: "MongoDB",
        icon: SiMongodb,
        color: "text-[#47A248]",
      },
      {
        name: "Supabase",
        icon: SiSupabase,
        color: "text-[#3ECF8E]",
      },
    ],
  },
  {
    id: "emerging-tech",
    title: "Emerging Tech",
    icon: Cpu,
    skills: [
      {
        name: "Gen AI Prompt Engineering",
        icon: Brain,
        color: "text-[#10A37F]",
      },
      {
        name: "Machine Learning",
        icon: Sparkles,
        color: "text-[#FFB81C]",
      },
    ],
  },
  {
    id: "tools",
    title: "Tools & Platforms",
    icon: Wrench,
    skills: [
      {
        name: "Git",
        icon: SiGit,
        color: "text-[#F05032]",
      },
      {
        name: "GitHub",
        icon: SiGithub,
        color: "text-[#181717]",
      },
      {
        name: "VS Code",
        icon: SiVsco,
        color: "text-[#0078D4]",
      },
      {
        name: "Postman",
        icon: SiPostman,
        color: "text-[#FF6C37]",
      },
      {
        name: "Canva",
        icon: SiCanva,
        color: "text-[#00C4CC]",
      },
      {
        name: "Figma",
        icon: SiFigma,
        color: "text-[#F24E1E]",
      },
    ],
  },
]
