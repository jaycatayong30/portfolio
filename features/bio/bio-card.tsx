import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"
import { bio } from "@/data/bio"

export function BioCard() {
  return (
    <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 rounded-2xl">
      <CardHeader className="pb-3">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Sparkles className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-white">
            About Me
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {bio.paragraphs.map((paragraph, index) => (
          <p key={index} className="leading-relaxed text-muted-foreground">
            {paragraph}
          </p>
        ))}
      </CardContent>
    </Card>
  )
}
