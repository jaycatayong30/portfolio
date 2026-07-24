# Portfolio MVC Architecture

This portfolio now follows the **Model-View-Controller (MVC)** pattern for better organization and maintainability.

## Project Structure

```
data/
├── bio.ts                 # Biography data
├── contact.ts            # Contact information
├── education.ts          # Education & certifications
├── experience.ts         # Work experience
├── hero.ts              # Hero/intro section data
├── navigation.ts        # Navigation links
├── projects.ts          # Project showcase data
└── skills.ts            # All skill categories

features/
├── bio/
│   └── bio-card.tsx                 # About Me card (uses bio.ts)
├── contact/
│   └── contact-card.tsx             # Contact card (uses contact.ts)
├── education/
│   └── education-card.tsx           # Education card (uses education.ts)
├── experience/
│   └── experience-card.tsx          # Experience card (uses experience.ts)
├── hero/
│   ├── hero-banner.tsx              # Hero section (uses hero.ts)
│   └── intro-card.tsx               # Alternative intro section
├── navigation/
│   └── nav-bar.tsx                  # Navigation (uses navigation.ts)
├── projects/
│   ├── project-card.tsx             # Project showcase main component
│   ├── project-details.tsx          # Individual project details
│   └── project-gallery.tsx          # Image carousel for projects
├── skills/
│   ├── other-skills.tsx             # Tools & platforms (uses skills.ts)
│   ├── skill-category-card.tsx      # Reusable skill category card
│   └── skill-category-cards.tsx     # Skill category exports
└── shared/
    ├── contact-items-display.tsx    # Reusable contact items renderer
    ├── responsibility-list.tsx      # Reusable responsibility renderer
    └── tech-stack.tsx               # Technology badges renderer
```

## How to Add New Content

### 1. Add a New Skill Category
Edit [data/skills.ts](data/skills.ts):

```typescript
{
  id: "new-category",
  title: "Your Category Title",
  icon: YourIcon,
  skills: [
    {
      name: "Skill Name",
      icon: SiIconName,
      color: "text-[#HexColor]",
    },
  ],
}
```

### 2. Add a New Project
Edit [data/projects.ts](data/projects.ts):

```typescript
{
  id: "project-id",
  title: "Project Title",
  description: "Project description...",
  images: [
    { src: "/projects/image1.jpg", title: "Screenshot 1" },
  ],
  techStack: ["Tech1", "Tech2"],
  isFeatured: false,
}
```

### 3. Add a New Experience
Edit [data/experience.ts](data/experience.ts):

```typescript
{
  id: "job-id",
  position: "Job Title",
  company: "Company Name",
  startDate: "Month Year",
  endDate: "Month Year",
  responsibilities: ["Responsibility 1", "Responsibility 2"],
}
```

### 4. Update Navigation Links
Edit [data/navigation.ts](data/navigation.ts):

```typescript
export const navLinks: NavLink[] = [
  // Add new link here
  { label: "New Section", href: "#new-section" },
]
```

## Benefits of This Structure

✅ **Separation of Concerns** - Data layer is separate from UI  
✅ **Easy Updates** - Change data without touching components  
✅ **Reusable Components** - Single components handle multiple data sources  
✅ **Type Safety** - TypeScript interfaces ensure data consistency  
✅ **Scalability** - Easy to add new sections or features  
✅ **Maintainability** - Clear organization and documentation  

## Component Dependencies

- **Data Models** (No dependencies) - Pure data files
- **Reusable Components** (Depend on data models) - Generic renderers
- **Main Components** (Depend on reusable components + data) - Final UI
