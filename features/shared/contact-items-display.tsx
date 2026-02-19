import { ContactItem } from "@/data/contact"

interface ContactItemsDisplayProps {
  items: ContactItem[]
}

export function ContactItemsDisplay({ items }: ContactItemsDisplayProps) {
  return (
    <div className="flex flex-col gap-3">
      {items.map((item) => {
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
              key={item.id}
              href={item.href}
              target={item.target}
              rel={item.rel}
              className="rounded-lg transition-colors hover:bg-secondary/50 -mx-2 px-2 py-1"
            >
              {content}
            </a>
          )
        }

        return (
          <div key={item.id} className="-mx-2 px-2 py-1">
            {content}
          </div>
        )
      })}
    </div>
  )
}
