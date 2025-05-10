import Link from "next/link"
import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

export function PricingPreview() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
      {/* Free Plan */}
      <Card className="relative overflow-hidden border-border">
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl">Free</CardTitle>
          <CardDescription className="text-muted-foreground">For personal projects</CardDescription>
          <div className="mt-4 flex items-baseline text-foreground">
            <span className="text-4xl font-extrabold tracking-tight">$0</span>
            <span className="ml-1 text-xl font-semibold">/month</span>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <ul className="space-y-3 text-sm">
            <PricingFeature>5 PDF uploads</PricingFeature>
            <PricingFeature>Up to 50 pages per PDF</PricingFeature>
            <PricingFeature>100 chat messages per month</PricingFeature>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            asChild
          >
            <Link href="/signup">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Pro Plan */}
      <Card className="relative overflow-hidden border-black dark:border-white">
        <div className="absolute top-0 right-0">
          <div className="w-[150px] h-[150px] overflow-hidden absolute -top-[75px] -right-[75px]">
            <div className="absolute top-0 left-0 w-full h-full bg-black dark:bg-white rotate-45 origin-bottom-left flex items-center justify-center transform translate-y-[50%]">
              <span className="text-xs font-bold text-white dark:text-black transform -rotate-45 translate-y-[-50%]">
                MOST POPULAR
              </span>
            </div>
          </div>
        </div>
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl">Pro</CardTitle>
          <CardDescription className="text-muted-foreground">For professionals</CardDescription>
          <div className="mt-4 flex items-baseline text-foreground">
            <span className="text-4xl font-extrabold tracking-tight">$19</span>
            <span className="ml-1 text-xl font-semibold">/month</span>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <ul className="space-y-3 text-sm">
            <PricingFeature highlighted>50 PDF uploads</PricingFeature>
            <PricingFeature highlighted>Up to 200 pages per PDF</PricingFeature>
            <PricingFeature highlighted>1,000 chat messages per month</PricingFeature>
          </ul>
        </CardContent>
        <CardFooter>
          <Button
            className="w-full bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
            asChild
          >
            <Link href="/signup?plan=pro">Get Started</Link>
          </Button>
        </CardFooter>
      </Card>

      {/* Enterprise Plan */}
      <Card className="relative overflow-hidden border-border">
        <CardHeader className="pb-8">
          <CardTitle className="text-2xl">Enterprise</CardTitle>
          <CardDescription className="text-muted-foreground">For organizations</CardDescription>
          <div className="mt-4 flex items-baseline text-foreground">
            <span className="text-4xl font-extrabold tracking-tight">$99</span>
            <span className="ml-1 text-xl font-semibold">/month</span>
          </div>
        </CardHeader>
        <CardContent className="pb-8">
          <ul className="space-y-3 text-sm">
            <PricingFeature>Unlimited PDF uploads</PricingFeature>
            <PricingFeature>Unlimited pages per PDF</PricingFeature>
            <PricingFeature>Unlimited chat messages</PricingFeature>
          </ul>
        </CardContent>
        <CardFooter>
          <Button className="w-full" variant="outline" asChild>
            <Link href="/contact-sales">Contact Sales</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  )
}

function PricingFeature({ children, highlighted = false }) {
  return (
    <li className="flex items-center">
      <Check className={`h-4 w-4 mr-2 ${highlighted ? "text-black dark:text-white" : "text-muted-foreground"}`} />
      <span className={`text-sm ${highlighted ? "font-medium" : ""}`}>{children}</span>
    </li>
  )
}
