"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Send } from "lucide-react"
import { contactItems } from "@/data/contact"
import { ContactItemsDisplay } from "../shared/contact-items-display"

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
        <ContactItemsDisplay items={contactItems} />
      </CardContent>
    </Card>
  )
}
