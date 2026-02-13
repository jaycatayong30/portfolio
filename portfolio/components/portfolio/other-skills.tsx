"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Rocket } from "lucide-react"

export function OtherSkillsCard() {
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
        <p className="leading-relaxed text-muted-foreground">
          I 
        </p>
        <p className="leading-relaxed text-muted-foreground">
          With 
        </p>
        <p className="leading-relaxed text-muted-foreground">
          My 
        </p>
      </CardContent>
    </Card>
  )
};
