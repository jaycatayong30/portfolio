import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  SiGit,
  SiGithub,
  SiVsco,
  SiCanva,
  SiFigma,
  SiPostman,
} from "react-icons/si"
import { Wrench } from "lucide-react"
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

export function OtherSkillsCard({
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

export function OtherSSkillsCardComponent() {
  return (
    <OtherSkillsCard
      title="Tools & Platforms"
      icon={Wrench}
      skills={[
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
      ]}
    />
  )
}