interface ResponsibilityListProps {
  items: string[]
}

export function ResponsibilityList({ items }: ResponsibilityListProps) {
  return (
    <div className="flex flex-col gap-2">
      {items.map((item) => (
        <div key={item} className="flex items-start gap-2">
          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
          <span className="text-sm text-muted-foreground">{item}</span>
        </div>
      ))}
    </div>
  )
}
