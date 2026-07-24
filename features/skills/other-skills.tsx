import { skillCategories } from "@/data/skills"
import { SkillCategoryCard } from "./skill-category-card"

export function OtherSSkillsCardComponent() {
  const category = skillCategories.find((c) => c.id === "tools")
  if (!category) return null
  return <SkillCategoryCard category={category} />
}
