"use client"

import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"
import {
  SiReact,
  SiHtml5,
  SiCss3,
  SiNextdotjs,
  SiTypescript,
  SiVite,
} from "react-icons/si"
import { Code2, Database, Cpu, Brain, Sparkles } from "lucide-react"
import type { LucideIcon } from "lucide-react"

interface Skill {
  name: string
  icon: React.ComponentType<{ className?: string }>
  color: string
}
interface OtherSkillCardProps {
  title: string
  icon: LucideIcon
  skills: Skill[]
}

export function OtherSkillsCard({
  title,
  icon: Icon,
  skills,
}: OtherSkillCardProps) {
  return (
    <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 rounded-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Rocket className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-white">
            Other Skills
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
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
};
