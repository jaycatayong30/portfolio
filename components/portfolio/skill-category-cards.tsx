import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
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
  SiPython,
} from "react-icons/si"
import { Code2, Database, Cpu, Brain, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}

interface SkillCategoryCardProps {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

function SkillCategoryCard({
  title,
  icon: Icon,
  skills,
}: SkillCategoryCardProps) {
  return (
    <Card className="group relative h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:hover:shadow-md rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold text-white">
            {title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, index) => {
            const SkillIcon = skill.icon

            return (
              <Badge
                key={`${skill.name}-${index}`}
                className="group flex items-center gap-2 rounded-lg bg-secondary px-3 py-1.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105"
              >
                <SkillIcon
                  className={`h-4 w-4 grayscale transition-all duration-300 group-hover:grayscale-0 ${skill.color}`}
                />
                {skill.name}
              </Badge>
            )
          })}

        </div>
      </CardContent>
    </Card>
  )
}

export function FrontendSkillsCard() {
  return (
    <SkillCategoryCard
      title="Frontend"
      icon={Code2}
      skills={[
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
          name: "Python",
          icon: SiPython,
          color: "text-[#646CFF]",
        },
      ]}
    />
  )
}

export function BackendSkillsCard() {
  return (
    <SkillCategoryCard
      title="Backend & Database"
      icon={Database}
      skills={[
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
      ]}
    />
  )
}

export function EmergingTechCard() {
  return (
    <SkillCategoryCard
      title="Emerging Tech"
      icon={Cpu}
      skills={[
        {
          name: "Python",
          icon: SiPython,
          color: "text-[#10A37F]",
        },
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
      ]}
    />
  )
}
