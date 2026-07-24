export interface Education {
  school: string
  degree: string
  startDate: string
  endDate: string
  certifications: string[]
  inProgress: string[]
}

export const education: Education = {
  school: "Jose Rizal University",
  degree: "Bachelor of Science Information Technology",
  startDate: "2022",
  endDate: "Present",
  certifications: [
    "Certiport IT Specialist (Databases)",
    "NCIII Java Programming",
    "AI Singapore - Machine Learning",
    "Cognizant Gen AI Workshop",
  ],
  inProgress: [
    "CS50x: Introduction to Computer Science",
    "freeCodeCamp - Frontend Development",
  ],
}
