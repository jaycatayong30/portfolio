"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FolderGit2 } from "lucide-react"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { projects } from "@/data/projects"
import { ProjectDetails } from "./project-details"

export function ProjectCard() {
  return (
    <div className="group relative h-full" id="projects">
      <Card className="h-full border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:border-primary/20 rounded-2xl overflow-hidden">
        <CardHeader className="pb-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                <FolderGit2 className="h-5 w-5 text-primary" />
              </div>
              <CardTitle className="text-xl font-semibold text-foreground">
                Projects
              </CardTitle>
            </div>

            <div className="flex flex-col items-end gap-1">
              <p className="text-xs text-muted-foreground font-medium">
                Navigate Projects
              </p>
            </div>
          </div>
        </CardHeader>

        <CardContent className="flex flex-col gap-4">
          <Carousel className="w-full" opts={{ watchDrag: false }}>
            <CarouselContent>
              {projects.map((project) => (
                <CarouselItem key={project.id}>
                  <ProjectDetails project={project} />
                </CarouselItem>
              ))}
            </CarouselContent>

            <div className="flex gap-2 mt-4 right-2 absolute top-0">
              <CarouselPrevious className="relative static h-8 w-8 border-primary/20 hover:bg-primary/10" />
              <CarouselNext className="relative static h-8 w-8 border-primary/20 hover:bg-primary/10" />
            </div>
          </Carousel>
        </CardContent>
      </Card>
    </div>
  )
}