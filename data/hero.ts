
export interface HeroData {
  name: string
  title: string
  subtitle: string
  location: string
  school: string
  description: string
  status: string
  image?: string
  resumeUrl?: string
}

export const hero: HeroData = {
  name: "Bejay O. Catayong",
  title: "IT Student & Future Full-Stack Developer",
  subtitle: "Hello, I'm",
  location: "Philippines",
  school: "Jose Rizal University",
  status: "Open to opportunities",
  description:
    "Resourceful BS Information Technology student passionate about building scalable, user-centered web applications and contributing technical expertise through collaborative, impact-driven solutions.",
  image: "/me.jpg",
  resumeUrl: "/BejayCatayong-Resume.pdf",
}
