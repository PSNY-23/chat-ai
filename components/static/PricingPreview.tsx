import { Link } from "lucide-react"
import { Button } from "../ui/button"

export const PricingPreview = () => {
    return (
        <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/30'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Pricing
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Simple, <span className='mono-gradient-text'>Transparent</span> Pricing
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Choose the plan thats right for you with no hidden fees
            </p>
            <Button variant='outline' className='mt-4' asChild>
              <Link href='/pricing'>View All Pricing Options</Link>
            </Button>
          </div>

          <PricingPreview />
        </div>
      </section>
    )
}
 
