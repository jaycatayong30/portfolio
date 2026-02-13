import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FolderGit2, ExternalLink } from "lucide-react"

const highlights = [
  "Automated tracking system",
  "Reduced manual reporting errors",
  "Applied MVC architecture for scalability",
]

const techStack = ["PHP", "MVC", "MySQL", "Geo-tagging"]

export function ProjectCard() {
  return (
    <div className="group relative h-full" id="projects">
      <Card className="h-full border-border bg-card transition-all duration-300 group-hover:scale-[1.02] group-hover:border-primary/30 rounded-2xl overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <FolderGit2 className="h-5 w-5 text-primary" />
            </div>
            <CardTitle className="text-xl font-semibold text-foreground">
              Featured Project
            </CardTitle>
          </div>
        </CardHeader>
        <CardContent className="flex flex-col gap-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">
              Geo-Tagging Waste Monitoring System
            </h3>
            <p className="mt-2 leading-relaxed text-muted-foreground">
              Architected a solution for the Mandaluyong City Environmental
              Management Department to automate solid waste monitoring.
            </p>
          </div>
          <Separator className="bg-border" />
          <div>
            <p className="mb-3 text-sm font-medium text-foreground">
              Technical Highlights
            </p>
            <div className="flex flex-col gap-2">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <span className="text-sm text-muted-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-2 flex flex-wrap gap-2">
            {techStack.map((tag) => (
              <Badge
                key={tag}
                variant="secondary"
                className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Hover overlay */}
      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl bg-black/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
        <p className="px-6 text-center text-sm text-muted-foreground">
          Tech Stack: PHP, MVC Architecture, MySQL
        </p>
        <Button
          variant="outline"
          className="rounded-xl border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </div>
    </div>
  )
}
