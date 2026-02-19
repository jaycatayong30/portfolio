import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { GraduationCap } from "lucide-react"
import { education } from "@/data/education"

export function EducationCard() {
  return (
    <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <GraduationCap className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            Education & Certifications
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {education.school}
          </h3>
          <p className="text-sm text-muted-foreground">
            {education.degree}
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-primary/80 uppercase">
            {education.startDate} &ndash; {education.endDate}
          </p>
        </div>
        <Separator className="bg-border" />
        <div>
          <p className="mb-3 text-sm font-medium text-foreground">
            Certifications
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {education.certifications.map((cert) => (
              <Badge
                key={cert}
                variant="secondary"
                className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {cert}
              </Badge>
            ))}
          </div>
          <p className="mb-3 text-sm font-medium text-foreground">
            In Progress
          </p>
          <div className="flex flex-wrap gap-2 mb-3">
            {education.inProgress.map((course) => (
              <Badge
                key={course}
                variant="secondary"
                className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground"
              >
                {course}
              </Badge>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
