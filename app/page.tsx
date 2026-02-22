import { Navbar } from "@/features/navigation/nav-bar"
import { HeroBanner } from "@/features/hero/hero-banner"
import { BioCard } from "@/features/bio/bio-card"
import { ProjectCard } from "@/features/projects/project-card"
import { ExperienceCard } from "@/features/experience/experience-card"
import {
  FrontendSkillsCard,
  BackendSkillsCard,
  EmergingTechCard,
} from "@/features/skills/skill-category-cards"
import { EducationCard } from "@/features/education/education-card"
import { ContactCard } from "@/features/contact/contact-card"
import { OtherSSkillsCardComponent } from "@/features/skills/other-skills"

export default function Page() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen">
        <HeroBanner />

        <section className="relative z-10 bg-background px-4 py-20 md:px-8 lg:px-12">
          <div className="mx-auto max-w-7xl">
            <div id="about">
              <BioCard />
            </div>
            <div className="mt-4 lg:mt-6">
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-3 lg:mt-6 lg:gap-6">
              <FrontendSkillsCard />
              <BackendSkillsCard />
              <EmergingTechCard />
            </div>
            <div className="mt-6 min-w-3x1" id="others">
              <OtherSSkillsCardComponent />
            </div>
            <div id="projects" className="mt-6">
              <ProjectCard />
            </div>
            <div id="experience" className="mt-6">
              <ExperienceCard />
            </div>
            <div id="education" className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
              <EducationCard />
              <ContactCard />
            </div>

            <footer className="mt-20 border-t border-border py-5 text-center">
              <p className="text-sm text-muted-foreground">
                &copy; {new Date().getFullYear()} | Bejay O. Catayong
              </p>
            </footer>
          </div>
        </section>
      </main>
    </>
  )
}
