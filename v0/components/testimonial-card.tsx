import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Star } from "lucide-react"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  rating?: number
  image?: string
}

export function TestimonialCard({ quote, author, role, rating = 5, image }: TestimonialCardProps) {
  // Generate initials from author name
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .join("")
    .toUpperCase()

  return (
    <Card className="h-full flex flex-col border-border">
      <CardContent className="pt-6 flex-1">
        <div className="flex mb-4">
          {Array.from({ length: 5 }).map((_, i) => {
            const starValue = i + 1
            if (starValue <= rating) {
              return <Star key={i} className="h-5 w-5 text-black dark:text-white fill-current" />
            } else {
              return <Star key={i} className="h-5 w-5 text-muted-foreground/30" />
            }
          })}
        </div>
        <div className="mb-4 text-4xl text-black/30 dark:text-white/30">"</div>
        <p className="text-muted-foreground">{quote}</p>
      </CardContent>
      <CardFooter className="border-t pt-4">
        <div className="flex items-center">
          <Avatar className="h-10 w-10 mr-3">
            {image ? (
              <AvatarImage src={image || "/placeholder.svg"} alt={author} />
            ) : (
              <AvatarFallback className="bg-black/10 dark:bg-white/10 text-black dark:text-white">
                {initials}
              </AvatarFallback>
            )}
          </Avatar>
          <div>
            <p className="text-sm font-medium">{author}</p>
            <p className="text-xs text-muted-foreground">{role}</p>
          </div>
        </div>
      </CardFooter>
    </Card>
  )
}
