import {
  MapPin,
  Mail,
  Github,
  Linkedin,
} from "lucide-react"
import type { LucideIcon } from "lucide-react"

export interface ContactItem {
  id: string
  icon: LucideIcon
  label: string
  value: string
  href?: string
  target?: string
  rel?: string
}

export const contactItems: ContactItem[] = [
  {
    id: "location",
    icon: MapPin,
    label: "Location",
    value: "Mandaluyong City",
  },
  {
    id: "email",
    icon: Mail,
    label: "Email",
    value: "bejaycatayong@proton.me",
    href: "mailto:bejaycatayong@proton.me",
  },
  {
    id: "github",
    icon: Github,
    label: "Github",
    value: "https://github.com/jaycatayong30",
    href: "https://github.com/jaycatayong30",
    target: "_blank",
    rel: "noopener noreferrer",
  },
  {
    id: "linkedin",
    icon: Linkedin,
    label: "LinkedIn",
    value: "https://www.linkedin.com/in/bejay-catayong-012601335",
    href: "https://www.linkedin.com/in/bejay-catayong-012601335",
    target: "_blank",
    rel: "noopener noreferrer",
  },
]
