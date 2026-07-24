
export interface Experience {
  id: string
  position: string
  company: string
  startDate: string
  endDate: string
  responsibilities: string[]
}

export const experiences: Experience[] = [
  {
    id: "chat-support",
    position: "Chat Support",
    company: "International Data Conversion Services Inc.",
    startDate: "March 2021",
    endDate: "August 2022",
    responsibilities: [
      "Managed 200+ daily support sessions",
      "Troubleshot payment and account access issues",
      "Translated technical problems into user-friendly solutions",
    ],
  },
  {
    id: "cornersteel-web-dev",
    position: "Web Development",
    company: "Cornersteel Systems Corporation",
    startDate: "January 2026",
    endDate: "April 2026",
    responsibilities: [
      "Developed responsive web pages using React, TypeScript, Tailwind CSS, and Sass, utilizing Vite & Next.js for optimized development builds adhering to MVC structure.",
      "Created 15+ reusable UI components with ShadCN, maintaining design consistency and reducing front-end development time by 20% for subsequent pages.",
      "Optimized application loading speeds and cross-browser compatibility by implementing lazy loading and image optimization, improving Core Web Vital (LCP) by 15%.",
    ],
  },
]
