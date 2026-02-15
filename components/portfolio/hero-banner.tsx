"use client"

import { Button } from "@/components/ui/button"
import {
  Download,
  User,
  MapPin,
  GraduationCap,
  ChevronDown,
} from "lucide-react"

function scrollToContent() {
  document
    .getElementById("about")
    ?.scrollIntoView({ behavior: "smooth" })
}

export function HeroBanner() {
  return (
    <section
      id="home"
      className="-z-10 flex min-h-screen flex-col items-center justify-center overflow-hidden px-6"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 40%, hsl(142 72% 50% / 0.06), transparent)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--muted-foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--muted-foreground)) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="pointer-events-none absolute -top-40 right-1/4 h-80 w-80 rounded-full bg-primary/5 blur-[120px]" />
      <div className="pointer-events-none absolute -bottom-32 left-1/4 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />

      <div className="relative flex flex-col items-center text-center">
        <div className="mb-8 flex h-28 w-28 items-center justify-center rounded-full border-2 border-primary/20 bg-card md:h-32 md:w-32">
          <User className="h-14 w-14 text-muted-foreground md:h-16 md:w-16" />
        </div>

        <span className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-xs font-medium text-primary">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
          Open to opportunities
        </span>

        <p className="font-mono text-sm tracking-widest text-muted-foreground uppercase">
          Hello, I{"'"}m
        </p>

        <h1 className="mt-1 text-5xl font-bold tracking-tight text-foreground md:text-6xl lg:text-7xl text-balance">
          Bejay O. Catayong
        </h1>

        <p className="mt-4 text-xl font-medium tracking-wide text-primary md:text-2xl">
          IT Student & Future Full-Stack Developer
        </p>

        <div className="mt-6 flex flex-wrap items-center justify-center gap-4">
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <MapPin className="h-3.5 w-3.5" />
            Philippines
          </span>
          <span className="h-3.5 w-px bg-muted-foreground/30" />
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground">
            <GraduationCap className="h-3.5 w-3.5" />
            Jose Rizal University
          </span>
        </div>

        <p className="mt-5 max-w-xl leading-relaxed text-muted-foreground">
          Resourceful BS Information Technology student passionate about building
          scalable, user-centered web applications and contributing technical
          expertise through collaborative, impact-driven solutions.
        </p>

        <div className="mt-5 flex flex-wrap items-center justify-center gap-4">
          <Button className="rounded-xl" size="lg" asChild>
            <a href="/BejayCatayong-Resume.pdf" download="BejayCatayong-Resume.pdf">
              <Download className="mr-2 h-4 w-4" />
              Download Resume
            </a>
          </Button>

          <Button
            variant="outline"
            className="rounded-xl border-border text-foreground hover:bg-secondary hover:text-foreground"
            size="lg"
            onClick={scrollToContent}
          >
            View My Work
          </Button>
        </div>
      </div>

      <button
        onClick={scrollToContent}
        className="absolute bottom-2 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
        aria-label="Scroll down to content"
      >
        <span className="text-[10px] font-medium tracking-widest uppercase">
          Scroll Down
        </span>
        <ChevronDown className="h-3 w-3 animate-bounce" />
      </button>
    </section>
  )
}
