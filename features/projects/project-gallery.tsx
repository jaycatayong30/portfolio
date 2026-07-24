import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ProjectImage } from "@/data/projects"

interface ProjectGalleryProps {
  images: ProjectImage[]
}

export function ProjectGallery({ images }: ProjectGalleryProps) {
  return (
    <div className="w-full" onPointerDown={(e) => e.stopPropagation()}>
      <p className="mb-3 text-sm font-medium text-foreground">Project Gallery</p>

      <Carousel className="w-full cursor-grab active:cursor-grabbing">
        <CarouselContent>
          {images.map((item, index) => (
            <CarouselItem key={index}>
              <div className="relative overflow-hidden rounded-xl border border-border">
                <img
                  src={item.src}
                  alt={item.title}
                  className="object-cover w-full h-full select-none"
                />
              </div>
              <div className="text-center py-2">
                <p className="text-xs font-medium text-muted-foreground">
                  {item.title}
                </p>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-2" />
        <CarouselNext className="right-2" />
      </Carousel>
    </div>
  )
}
