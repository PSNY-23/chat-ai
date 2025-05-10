import Link from "next/link"
import { Check, Info } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import { FaqAccordion } from "@/components/faq-accordion"
import { Header } from "@/components/Header"
import React from "react"

export default function PricingPage() {
  return (
    <div className="flex flex-col min-h-screen px-12">
      <Header/>
      {/* Header Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        {/* Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-primary/5 to-transparent dark:from-primary/10"></div>
          <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary/5 blur-3xl dark:bg-primary/10 blob-animation"></div>
          <div className="absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-3xl dark:bg-purple-500/10 blob-animation"></div>
        </div>

        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium mb-2 w-fit">
              Pricing Plans
            </div>
            <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              <span className="gradient-text">Simple, Transparent</span> Pricing
            </h1>
            <p className="max-w-[700px] text-muted-foreground text-lg md:text-xl">
              Choose the plan thats right for you and start chatting with your PDFs today. All plans include a 7-day
              free trial.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Tables */}
      <section className="w-full py-12 md:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl">
            <Tabs defaultValue="monthly" className="w-full">
              <div className="flex justify-center mb-8">
                <TabsList className="grid w-[300px] grid-cols-2">
                  <TabsTrigger value="monthly">Monthly</TabsTrigger>
                  <TabsTrigger value="yearly">
                    Yearly
                    <Badge
                      variant="outline"
                      className="ml-2 bg-green-500/10 text-green-600 border-green-200 dark:border-green-900"
                    >
                      Save 20%
                    </Badge>
                  </TabsTrigger>
                </TabsList>
              </div>

              <TabsContent value="monthly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Free Plan */}
                  <Card className="relative overflow-hidden border-border">
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Free</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For personal projects and trying out the service
                      </CardDescription>
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
                        <PricingFeature>Basic chat capabilities</PricingFeature>
                        <PricingFeature>7-day chat history</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan */}
                  <Card className="relative overflow-hidden border-primary">
                    <div className="absolute top-0 right-0">
                      <div className="w-[150px] h-[150px] overflow-hidden absolute -top-[75px] -right-[75px]">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary rotate-45 origin-bottom-left flex items-center justify-center transform translate-y-[50%]">
                          <span className="text-xs font-bold text-primary-foreground transform -rotate-45 translate-y-[-50%]">
                            MOST POPULAR
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Pro</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For professionals and small teams
                      </CardDescription>
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
                        <PricingFeature highlighted>Advanced chat capabilities</PricingFeature>
                        <PricingFeature highlighted>30-day chat history</PricingFeature>
                        <PricingFeature highlighted>Export chat as PDF</PricingFeature>
                        <PricingFeature highlighted>Priority support</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gradient-bg hover:opacity-90 transition-opacity" asChild>
                        <Link href="/signup?plan=pro">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card className="relative overflow-hidden border-border">
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Enterprise</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For organizations with advanced needs
                      </CardDescription>
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
                        <PricingFeature>Advanced chat capabilities</PricingFeature>
                        <PricingFeature>Unlimited chat history</PricingFeature>
                        <PricingFeature>Export chat as PDF</PricingFeature>
                        <PricingFeature>Team collaboration features</PricingFeature>
                        <PricingFeature>API access</PricingFeature>
                        <PricingFeature>Dedicated support</PricingFeature>
                        <PricingFeature>Custom integrations</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/contact-sales">Contact Sales</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="yearly">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {/* Free Plan */}
                  <Card className="relative overflow-hidden border-border">
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Free</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For personal projects and trying out the service
                      </CardDescription>
                      <div className="mt-4 flex items-baseline text-foreground">
                        <span className="text-4xl font-extrabold tracking-tight">$0</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <ul className="space-y-3 text-sm">
                        <PricingFeature>5 PDF uploads</PricingFeature>
                        <PricingFeature>Up to 50 pages per PDF</PricingFeature>
                        <PricingFeature>100 chat messages per month</PricingFeature>
                        <PricingFeature>Basic chat capabilities</PricingFeature>
                        <PricingFeature>7-day chat history</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" asChild>
                        <Link href="/signup">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Pro Plan */}
                  <Card className="relative overflow-hidden border-primary">
                    <div className="absolute top-0 right-0">
                      <div className="w-[150px] h-[150px] overflow-hidden absolute -top-[75px] -right-[75px]">
                        <div className="absolute top-0 left-0 w-full h-full bg-primary rotate-45 origin-bottom-left flex items-center justify-center transform translate-y-[50%]">
                          <span className="text-xs font-bold text-primary-foreground transform -rotate-45 translate-y-[-50%]">
                            MOST POPULAR
                          </span>
                        </div>
                      </div>
                    </div>
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Pro</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For professionals and small teams
                      </CardDescription>
                      <div className="mt-4 flex items-baseline text-foreground">
                        <span className="text-4xl font-extrabold tracking-tight">$182</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                      <p className="text-sm mt-1 text-green-600 dark:text-green-400 font-medium">
                        $15.17/month, billed annually (Save 20%)
                      </p>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <ul className="space-y-3 text-sm">
                        <PricingFeature highlighted>50 PDF uploads</PricingFeature>
                        <PricingFeature highlighted>Up to 200 pages per PDF</PricingFeature>
                        <PricingFeature highlighted>1,000 chat messages per month</PricingFeature>
                        <PricingFeature highlighted>Advanced chat capabilities</PricingFeature>
                        <PricingFeature highlighted>30-day chat history</PricingFeature>
                        <PricingFeature highlighted>Export chat as PDF</PricingFeature>
                        <PricingFeature highlighted>Priority support</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full gradient-bg hover:opacity-90 transition-opacity" asChild>
                        <Link href="/signup?plan=pro-yearly">Get Started</Link>
                      </Button>
                    </CardFooter>
                  </Card>

                  {/* Enterprise Plan */}
                  <Card className="relative overflow-hidden border-border">
                    <CardHeader className="pb-8">
                      <CardTitle className="text-2xl">Enterprise</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        For organizations with advanced needs
                      </CardDescription>
                      <div className="mt-4 flex items-baseline text-foreground">
                        <span className="text-4xl font-extrabold tracking-tight">$950</span>
                        <span className="ml-1 text-xl font-semibold">/year</span>
                      </div>
                      <p className="text-sm mt-1 text-green-600 dark:text-green-400 font-medium">
                        $79.17/month, billed annually (Save 20%)
                      </p>
                    </CardHeader>
                    <CardContent className="pb-8">
                      <ul className="space-y-3 text-sm">
                        <PricingFeature>Unlimited PDF uploads</PricingFeature>
                        <PricingFeature>Unlimited pages per PDF</PricingFeature>
                        <PricingFeature>Unlimited chat messages</PricingFeature>
                        <PricingFeature>Advanced chat capabilities</PricingFeature>
                        <PricingFeature>Unlimited chat history</PricingFeature>
                        <PricingFeature>Export chat as PDF</PricingFeature>
                        <PricingFeature>Team collaboration features</PricingFeature>
                        <PricingFeature>API access</PricingFeature>
                        <PricingFeature>Dedicated support</PricingFeature>
                        <PricingFeature>Custom integrations</PricingFeature>
                      </ul>
                    </CardContent>
                    <CardFooter>
                      <Button className="w-full" variant="outline" asChild>
                        <Link href="/contact-sales">Contact Sales</Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* Compare Plans */}
      <section className="w-full py-12 md:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Compare Plans</h2>
            <p className="max-w-[700px] text-muted-foreground">
              Find the perfect plan for your needs with our detailed comparison
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b">
                  <th className="py-4 px-6 text-left font-medium text-muted-foreground">Features</th>
                  <th className="py-4 px-6 text-center font-medium">Free</th>
                  <th className="py-4 px-6 text-center font-medium text-primary">Pro</th>
                  <th className="py-4 px-6 text-center font-medium">Enterprise</th>
                </tr>
              </thead>
              <tbody>
                <ComparisonRow
                  feature="PDF Uploads"
                  free="5"
                  pro="50"
                  enterprise="Unlimited"
                  tooltip="Number of PDFs you can upload and store"
                />
                <ComparisonRow
                  feature="Pages per PDF"
                  free="50"
                  pro="200"
                  enterprise="Unlimited"
                  tooltip="Maximum number of pages per PDF document"
                />
                <ComparisonRow
                  feature="Chat Messages"
                  free="100/month"
                  pro="1,000/month"
                  enterprise="Unlimited"
                  tooltip="Number of questions you can ask per month"
                />
                <ComparisonRow
                  feature="Chat History"
                  free="7 days"
                  pro="30 days"
                  enterprise="Unlimited"
                  tooltip="How long we store your chat history"
                />
                <ComparisonRow
                  feature="Export Options"
                  free="None"
                  pro="PDF, Text"
                  enterprise="PDF, Text, JSON"
                  tooltip="Available formats for exporting your chat history"
                />
                <ComparisonRow
                  feature="Team Members"
                  free="1"
                  pro="5"
                  enterprise="Unlimited"
                  tooltip="Number of team members who can access your account"
                />
                <ComparisonRow
                  feature="API Access"
                  free="❌"
                  pro="❌"
                  enterprise="✅"
                  tooltip="Access to our API for custom integrations"
                />
                <ComparisonRow
                  feature="Custom Branding"
                  free="❌"
                  pro="❌"
                  enterprise="✅"
                  tooltip="Add your own branding to the chat interface"
                />
                <ComparisonRow
                  feature="Priority Support"
                  free="❌"
                  pro="✅"
                  enterprise="✅"
                  tooltip="Get faster responses from our support team"
                />
                <ComparisonRow
                  feature="Dedicated Account Manager"
                  free="❌"
                  pro="❌"
                  enterprise="✅"
                  tooltip="A dedicated person to help you get the most out of our service"
                />
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-12 md:py-24 lg:py-32">
        <div className="container px-4 md:px-6">
          <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
            <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary dark:bg-primary/20 text-sm font-medium">
              FAQ
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
            <p className="max-w-[700px] text-muted-foreground md:text-xl/relaxed">
              Find answers to common questions about our PDF Chat service
            </p>
          </div>

          <div className="mx-auto max-w-3xl">
            <FaqAccordion />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-12 md:py-24 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 gradient-bg -z-10"></div>
        <div className="absolute inset-0 bg-grid-white/10 -z-10"></div>

        <div className="container px-4 md:px-6 relative">
          <div className="flex flex-col items-center justify-center space-y-4 text-center">
            <div className="inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium">
              Get Started Today
            </div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
              Start Chatting with Your PDFs Today
            </h2>
            <p className="max-w-[900px] text-white/80 md:text-xl/relaxed">
              Join thousands of users who are already saving time and gaining insights from their documents. Try it free
              for 7 days, no credit card required.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-4">
              <Button size="lg" variant="secondary" className="font-medium" asChild>
                <Link href="/signup">Create Free Account</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-white text-white hover:bg-white/10"
                asChild
              >
                <Link href="/contact-sales">Contact Sales</Link>
              </Button>
            </div>
            <p className="text-sm text-white/60 mt-4">No credit card required. Cancel anytime.</p>
          </div>
        </div>
      </section>
    </div>
  )
}

function PricingFeature({ children, highlighted = false }:{children:React.ReactNode, highlighted?:boolean}) {
  return (
    <li className="flex items-center">
      <Check className={`h-4 w-4 mr-2 ${highlighted ? "text-primary" : "text-muted-foreground"}`} />
      <span className={`text-sm ${highlighted ? "font-medium" : ""}`}>{children}</span>
    </li>
  )
}

interface ComparisonRowProps {
  feature: string;
  free: React.ReactNode;
  pro: React.ReactNode;
  enterprise: React.ReactNode;
  tooltip?: string;
}

function ComparisonRow({ feature, free, pro, enterprise, tooltip }: ComparisonRowProps) {
  return (
    <tr className="border-b">
      <td className="py-4 px-6 text-sm font-medium flex items-center">
        {feature}
        {tooltip && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger asChild>
                <Info className="h-4 w-4 ml-2 text-muted-foreground cursor-help" />
              </TooltipTrigger>
              <TooltipContent>
                <p className="max-w-xs">{tooltip}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </td>
      <td className="py-4 px-6 text-center text-sm">{free}</td>
      <td className="py-4 px-6 text-center text-sm font-medium text-primary">{pro}</td>
      <td className="py-4 px-6 text-center text-sm">{enterprise}</td>
    </tr>
  )
}
