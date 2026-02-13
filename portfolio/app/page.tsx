import { Navbar } from "@/components/portfolio/nav-bar"
import { HeroBanner } from "@/components/portfolio/hero-banner"
import { BioCard } from "@/components/portfolio/bio-card"

import { ProjectCard } from "@/components/portfolio/project-card"
import { ExperienceCard } from "@/components/portfolio/experience-card"
import {
  FrontendSkillsCard,
  BackendSkillsCard,
  EmergingTechCard,
} from "@/components/portfolio/skill-category-cards"
import { EducationCard } from "@/components/portfolio/education-card"
import { ContactCard } from "@/components/portfolio/contact-card"
import { OtherSkillsCard } from "@/components/portfolio/other-skills"

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
              <OtherSkillsCard />
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
              <ProjectCard />
              <div id="experience">
                <ExperienceCard />
              </div>
            </div>
            <div className="mt-4 grid grid-cols-1 gap-4 md:grid-cols-2 lg:mt-6 lg:gap-6">
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
