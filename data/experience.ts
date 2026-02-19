
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
]
