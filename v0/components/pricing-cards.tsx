import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface PricingPlan {
  name: string
  price: string
  description: string
  features: string[]
  buttonText: string
  buttonVariant?: "default" | "outline" | "secondary"
  popular?: boolean
  href: string
}

interface PricingCardsProps {
  plans: PricingPlan[]
}

export function PricingCards({ plans }: PricingCardsProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {plans.map((plan) => (
        <div
          key={plan.name}
          className={`flex flex-col p-6 ${
            plan.popular
              ? "bg-primary text-primary-foreground rounded-lg shadow-lg scale-105 border-2 border-primary"
              : "bg-background border rounded-lg shadow-sm"
          }`}
        >
          <div className="space-y-2">
            {plan.popular && (
              <div className="inline-block px-3 py-1 rounded-full bg-primary-foreground text-primary text-xs font-medium mb-2">
                Most Popular
              </div>
            )}
            <h3 className="text-2xl font-bold">{plan.name}</h3>
            <p className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>{plan.description}</p>
          </div>
          <div className="mt-4">
            <span className="text-4xl font-bold">{plan.price}</span>
            <span className={plan.popular ? "text-primary-foreground/80" : "text-muted-foreground"}>/month</span>
          </div>
          <ul className="mt-6 space-y-3">
            {plan.features.map((feature, index) => (
              <li key={index} className="flex items-center">
                <Check className={`h-4 w-4 mr-2 ${plan.popular ? "text-primary-foreground" : "text-primary"}`} />
                <span className="text-sm">{feature}</span>
              </li>
            ))}
          </ul>
          <Button className="mt-8" variant={plan.popular ? "secondary" : plan.buttonVariant || "default"} asChild>
            <Link href={plan.href}>{plan.buttonText}</Link>
          </Button>
        </div>
      ))}
    </div>
  )
}
