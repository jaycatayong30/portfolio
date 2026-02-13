import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Briefcase } from "lucide-react"

const responsibilities = [
  "Managed 200+ daily support sessions",
  "Troubleshot payment and account access issues",
  "Translated technical problems into user-friendly solutions",
]

export function ExperienceCard() {
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
            Chat Support
          </h3>
          <p className="text-sm text-muted-foreground">
            International Data Conversion Services Inc.
          </p>
          <p className="mt-1 text-xs font-medium tracking-wide text-primary/80 uppercase">
            March 2021 &ndash; August 2022
          </p>
        </div>
        <Separator className="bg-border" />
        <div className="flex flex-col gap-2">
          {responsibilities.map((item) => (
            <div key={item} className="flex items-start gap-2">
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
              <span className="text-sm text-muted-foreground">{item}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
