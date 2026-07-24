import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Briefcase } from "lucide-react"
import { experiences } from "@/data/experience"
import { ResponsibilityList } from "../shared/responsibility-list"

export function ExperienceCard() {
  const experience = experiences[0]

  return (
    <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 rounded-2xl">
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Briefcase className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-foreground">
            Experience
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-semibold text-foreground">
            {experience.position}
          </h3>
          <p className="text-sm text-muted-foreground">
            {experience.company}
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-primary/80 uppercase">
            {experience.startDate} &ndash; {experience.endDate}
          </p>
        </div>
        <Separator className="bg-border" />
        <ResponsibilityList items={experience.responsibilities} />
      </CardContent>
    </Card>
  )
}
