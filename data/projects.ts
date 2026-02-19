
export interface ProjectImage {
  src: string
  title: string
}

export interface Project {
  id: string
  title: string
  description: string
  images: ProjectImage[]
  techStack: string[]
  isFeatured?: boolean
}

export const projects: Project[] = [
  {
    id: "thesis-geo-tagging",
    title: "THESIS | Geo-Tagging System for Solid Waste Monitoring",
    description:
      "Architected a solution for the Mandaluyong City Environmental Management Department to automate solid waste monitoring.",
    images: [
      { src: "/public/projects/dashboard.jpg", title: "Main Dashboard View" },
      {
        src: "/public/projects/employee management.jpg",
        title: "Employee Management Page",
      },
      { src: "/public/projects/reports page.jpg", title: "Reports Page" },
      {
        src: "/public/projects/incident report management.jpg",
        title: "Incident Report Management Page",
      },
      {
        src: "/public/projects/wastecollection tracking.jpg",
        title: "Waste Collection Tracking Page",
      },
    ],
    techStack: [
      "Typescript",
      "React",
      "Supabase",
      "Next.js",
      "Tailwind CSS",
      "MapLibre GL",
      "ApexCharts",
    ],
    isFeatured: true,
  },
  {
    id: "next-project",
    title: "Your Next Project Title",
    description: "Brief description of what you built and its impact.",
    images: [
      { src: "/projects/image1.jpg", title: "Screenshot 1" },
      { src: "/projects/image2.jpg", title: "Screenshot 2" },
    ],
    techStack: ["Tech1", "Tech2", "Tech3"],
    isFeatured: false,
  },
]
