import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { FolderGit2, ExternalLink } from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const highlights = [
  "Automated truck tracking system",
  "Automated solid waste monitoring system",
  "Reduced manual reporting errors",
  "With real-time data visualization and reporting",
]

const techStack = ["Typescript", "React", "Supabase", "Next.js", "Tailwind CSS", "MapLibre GL", "ApexCharts"]

const thesisImages = [
  { src: "/projects/dashboard.jpg", title: "Main Dashboard View" },
  { src: "/projects/employee management.jpg", title: "Employee Management Page" },
  { src: "/projects/reports page.jpg", title: "Reports Page" },
  { src: "/projects/incident report management.jpg", title: "Incident Report Management Page" },
  { src: "/projects/trucktracking.jpg", title: "Truck Tracking Page" },
  { src: "/projects/wastecollection tracking.jpg", title: "Waste Collection Tracking Page" },
];

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
              THESIS | Geo-Tagging System for Solid Waste Monitoring in City Environmental Management Department
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

      <div className="pointer-events-none absolute inset-0 flex flex-col items-center justify-center gap-5 rounded-2xl bg-black/70 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">

        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="rounded-xl border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Personal Projects
            </Button>
          </DialogTrigger>
          <Carousel>
            <Carousel>
              <CarouselContent>

                <DialogContent className="bg-card rounded-2xl overflow-hidden sm:max-w-5xl w-[95%] border-primary/20 p-0 shadow-2xl">
                  <div className="flex flex-col lg:flex-row h-full max-h-[90vh]">

                    <div className="w-full lg:w-[65%] bg-black/5 flex items-center justify-center p-4 lg:p-8">
                      <Carousel className="w-full max-w-xl">

                        <CarouselContent>
                          {thesisImages.map((src, index) => (

                            <CarouselItem key={index}>
                              <div className="relative aspect-video overflow-hidden rounded-xl border border-border">
                                <img
                                  src={src.src}
                                  alt={src.title}
                                  title={src.title}
                                  className="object-cover w-full h-full cursor-pointer"
                                />

                              </div>
                              <div className="text-center py-2">
                                <p className="text-sm font-medium text-muted-foreground">
                                  {src.title}
                                </p>
                              </div>
                            </CarouselItem>
                          ))}
                        </CarouselContent>

                        <CarouselPrevious className="left-2" />
                        <CarouselNext className="right-2" />

                      </Carousel>
                      <CarouselPrevious className="left-1" />
                      <CarouselNext className="right-1" />
                    </div>
                    <div className="w-full lg:w-[35%] p-6 lg:p-8 overflow-y-auto border-l border-border bg-card/50">

                      <DialogHeader>
                        <DialogTitle className="text-2xl font-bold tracking-tight text-foreground">
                          Personal Projects
                        </DialogTitle>
                        <p className="text-sm font-medium text-foreground mt-1">Featured Thesis Work</p>
                      </DialogHeader>

                      <Separator className="my-6" />

                      <div className="space-y-6">
                        <div>
                          <h3 className="text-lg font-semibold leading-tight">
                            Geo-Tagging System for Solid Waste Monitoring
                          </h3>
                          <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
                            Architected a solution for the Mandaluyong City Environmental Management Department.
                            Features real-time data visualization and automated truck tracking.
                          </p>
                        </div>

                        <div className="space-y-3">
                          <h4 className="text-xs font-bold uppercase tracking-widest text-muted-foreground">Technologies Used</h4>
                          <div className="flex flex-wrap gap-2">
                            {["Typescript", "React", "Supabase", "Next.js", "Tailwind CSS", "MapLibre GL", "ApexCharts"].map((tech) => (

                              <span key={tech} className="rounded-lg bg-secondary px-2.5 py-1 text-xs text-secondary-foreground">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                      </div>

                    </div>

                  </div>

                </DialogContent>

              </CarouselContent>
            </Carousel>

          </Carousel>
        </Dialog>

      </div >
    </div >
  )
}