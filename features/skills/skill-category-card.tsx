import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { SkillCategory } from "@/data/skills"

interface SkillCategoryCardProps {
  category: SkillCategory
}

export function SkillCategoryCard({ category }: SkillCategoryCardProps) {
  const Icon = category.icon

  return (
    <Card className="group relative h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:hover:shadow-md rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Icon className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-lg font-semibold text-white">
            {category.title}
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-wrap gap-2">
          {category.skills.map((skill, index) => {
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
