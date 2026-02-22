"use client"

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog" // Siguraduhin na tama ang path dito
import { Button } from "@/components/ui/button"
import { ExternalLink } from "lucide-react"

export function ProjectCard() {
  return (
    <Dialog>
      {/* Ito ang magiging clickable button mo */}
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="rounded-xl border-primary/30 text-foreground hover:bg-primary/10 hover:text-primary"
        >
          <ExternalLink className="mr-2 h-4 w-4" />
          View Details
        </Button>
      </DialogTrigger>

      {/* Ito ang box na lilitaw */}
      <DialogContent className="bg-[#121212] border-emerald-500/20 text-white">
        <DialogHeader>
          <DialogTitle className="text-xl text-emerald-400">
            Geo-Tagging Waste Monitoring System
          </DialogTitle>
        </DialogHeader>
        
        <div className="mt-4 space-y-4">
          <p className="text-sm text-gray-400">
            Dito mo na ilalagay yung full description na medyo blurred sa screenshot mo.
          </p>
          
          <div className="flex flex-wrap gap-2">
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded">PHP</span>
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded">MVC Architecture</span>
            <span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-xs rounded">MySQL</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}