import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles } from "lucide-react"

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
        <p className="leading-relaxed text-muted-foreground">
          I am an aspiring full-stack developer currently pursuing a BS in
          Information Technology at Jose Rizal University. My journey in tech
          began with a deep curiosity about how digital systems work, and it has
          since evolved into a genuine passion for building scalable,
          user-centered web applications.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          With professional experience in chat support and a strong academic
          foundation, I bring a unique blend of technical problem-solving and
          communication skills. I thrive in collaborative environments and am
          constantly learning new technologies to stay at the forefront of modern
          web development.
        </p>
        <p className="leading-relaxed text-muted-foreground">
          My goal is to contribute meaningful solutions that make a real impact,
          whether it{"'"}s streamlining city waste management or crafting
          seamless user experiences for the web.
        </p>
      </CardContent>
    </Card>
  )
}
