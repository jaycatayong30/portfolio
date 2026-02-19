import { Badge } from "@/components/ui/badge"

interface TechStackProps {
  technologies: string[]
}

export function TechStack({ technologies }: TechStackProps) {
  return (
    <div>
      <p className="mb-3 text-sm font-medium text-foreground">Technical Stack</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <Badge
            key={tech}
            variant="secondary"
            className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
          >
            {tech}
          </Badge>
        ))}
      </div>
    </div>
  )
}
