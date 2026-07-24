import { Separator } from "@/components/ui/separator"
import { Project } from "@/data/projects"
import { ProjectGallery } from "./project-gallery"
import { TechStack } from "../shared/tech-stack"

interface ProjectDetailsProps {
  project: Project
}

export function ProjectDetails({ project }: ProjectDetailsProps) {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <h3 className="text-lg font-semibold text-foreground">
          {project.title}
        </h3>
        <p className="mt-2 leading-relaxed text-muted-foreground">
          {project.description}
        </p>
      </div>

      <Separator className="bg-border" />

      <ProjectGallery images={project.images} />

      <Separator className="bg-border" />

      <TechStack technologies={project.techStack} />
    </div>
  )
}
