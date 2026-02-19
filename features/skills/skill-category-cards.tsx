import { skillCategories } from "@/data/skills"
import { SkillCategoryCard } from "./skill-category-card"

export function FrontendSkillsCard() {
  const category = skillCategories.find((c) => c.id === "frontend")
  if (!category) return null
  return <SkillCategoryCard category={category} />
}

export function BackendSkillsCard() {
  const category = skillCategories.find((c) => c.id === "backend-database")
  if (!category) return null
  return <SkillCategoryCard category={category} />
}

export function EmergingTechCard() {
  const category = skillCategories.find((c) => c.id === "emerging-tech")
  if (!category) return null
  return <SkillCategoryCard category={category} />
}
