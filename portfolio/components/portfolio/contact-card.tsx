"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Mail, Phone, Send, Github, Linkedin } from "lucide-react"

const contactItems = [
  {
    icon: MapPin,
    label: "Location",
    value: "Mandaluyong City",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bejaycatayong@proton.me",
    href: "mailto:bejaycatayong@proton.me",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "09626565989",
    href: "tel:09626565989",
  },
  {
    icon: Github,
    label: "Account",
    value: "GitHub",
    href: "https://github.com/jaycatayong30",
  },
    {
    icon: Linkedin,
    label: "Account",
    value: "LinkedIn",
    href: "Linked Fucking In",
  },
]

export function ContactCard() {
  return (
    <Card
      id="contact"
      className="h-full border-border bg-card rounded-2xl transition-all duration-300 hover:-translate-y-1 hover:border-primary/20"
    >
      <CardHeader className="pb-4">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
            <Send className="h-5 w-5 text-primary" />
          </div>
          <CardTitle className="text-xl font-semibold text-white">
            Get In Touch
          </CardTitle>
        </div>
      </CardHeader>
      <CardContent className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            {contactItems.map((item) => {
              const Icon = item.icon
              const content = (
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-secondary">
                    <Icon className="h-4 w-4 text-muted-foreground" />
                  </div>
                  <div>
                    
                    <p className="text-xs text-muted-foreground">{item.label}</p>
                    <p className="text-sm font-medium text-foreground">
                      {item.value}
                    </p>
                  </div>
                </div>

              )

              if (item.href) {
                return (
                  <a
                    key={item.label}
                    href={item.href}
                    className="rounded-lg transition-colors hover:bg-secondary/50 -mx-2 px-2 py-1"
                  >
                    {content}
                  </a>
                )
              }

              return (
                <div key={item.label} className="-mx-2 px-2 py-1">
                  {content}
                </div>
              )
            })}
          </div>
      </CardContent>
    </Card>
  )
}
