"use client"

import { useTheme } from "next-themes"

export function BrandLogos() {
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === "dark"

  return (
    <div className="w-full flex flex-wrap items-center justify-center gap-x-12 gap-y-8">
      {/* These would normally be actual SVG logos, using placeholders for the demo */}
      <div className="h-8 w-32 bg-muted/50 rounded flex items-center justify-center text-muted-foreground font-medium">
        Company A
      </div>
      <div className="h-8 w-32 bg-muted/50 rounded flex items-center justify-center text-muted-foreground font-medium">
        Company B
      </div>
      <div className="h-8 w-32 bg-muted/50 rounded flex items-center justify-center text-muted-foreground font-medium">
        Company C
      </div>
      <div className="h-8 w-32 bg-muted/50 rounded flex items-center justify-center text-muted-foreground font-medium">
        Company D
      </div>
      <div className="h-8 w-32 bg-muted/50 rounded flex items-center justify-center text-muted-foreground font-medium">
        Company E
      </div>
    </div>
  )
}
