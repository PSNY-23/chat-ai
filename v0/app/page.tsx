import Link from "next/link";
import { ArrowRight, CheckCircle2, FileText, MessageSquare, Shield, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { HeroUploadDemo } from "@/components/hero-upload-demo";
import { FeatureCard } from "@/components/static/feature-card";
import { TestimonialCard } from "@/components/testimonial-card";
import { BrandLogos } from "@/components/static/brand-logos";
import { PricingPreview } from "@/components/pricing-preview";
import { StatsCounter } from "@/components/static/stats-counter";

export default function LandingPage() {
  return (
    <div className='flex flex-col min-h-screen'>
      {/* Hero Section */}
      <section className='relative w-full py-12 md:py-24 lg:py-32 overflow-hidden'>
        {/* Background Elements */}
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-black/5 to-transparent dark:from-white/5'></div>
          <div className='absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-black/5 blur-3xl dark:bg-white/5 blob-animation'></div>
          <div className='absolute -bottom-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gray-500/5 blur-3xl dark:bg-gray-400/5 blob-animation'></div>
        </div>

        <div className='container px-4 md:px-6'>
          <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
            <div className='flex flex-col justify-center space-y-4'>
              <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium mb-2 w-fit'>
                Introducing PDF Chat AI
              </div>
              <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
                <span className='mono-gradient-text'>Chat With Your PDFs</span> Using Advanced AI
              </h1>
              <p className='max-w-[600px] text-muted-foreground text-lg md:text-xl'>
                Transform how you interact with documents. Upload your PDFs and start a conversation with our AI
                assistant to extract insights, answer questions, and summarize content instantly.
              </p>

              <div className='flex flex-wrap gap-3 pt-2'>
                <Button
                  size='lg'
                  className='bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90 transition-colors'
                  asChild
                >
                  <Link href='/signup'>
                    Get Started Free <ArrowRight className='ml-2 h-4 w-4' />
                  </Link>
                </Button>
                <Button size='lg' variant='outline' className='mono-border' asChild>
                  <Link href='/pricing'>View Pricing</Link>
                </Button>
              </div>

              <div className='flex items-center gap-4 pt-4'>
                <div className='flex -space-x-2'>
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className='w-8 h-8 rounded-full bg-black/10 dark:bg-white/10 border-2 border-background flex items-center justify-center text-xs font-medium'
                    >
                      {String.fromCharCode(64 + i)}
                    </div>
                  ))}
                </div>
                <p className='text-sm text-muted-foreground'>
                  <span className='font-medium text-foreground'>1,000+</span> users already using PDF Chat AI
                </p>
              </div>
            </div>
            <div className='relative'>
              <div className='absolute -inset-0.5 bg-gradient-to-r from-black/20 to-gray-600/20 dark:from-white/20 dark:to-gray-400/20 rounded-xl blur opacity-30'></div>
              <div className='relative bg-background rounded-xl overflow-hidden border shadow-xl'>
                <HeroUploadDemo />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Brands Section */}
      <section className='w-full py-8 md:py-12 border-y bg-muted/30'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <p className='text-sm uppercase tracking-wider text-muted-foreground'>Trusted by innovative companies</p>
            <BrandLogos />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className='w-full py-12 md:py-16'>
        <div className='container px-4 md:px-6'>
          <div className='grid grid-cols-2 md:grid-cols-4 gap-8'>
            <StatsCounter value={10000} label='Documents Processed' />
            <StatsCounter value={5000} label='Active Users' />
            <StatsCounter value={1000000} label='Questions Answered' />
            <StatsCounter value={99.9} label='Uptime Percentage' suffix='%' />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className='w-full py-12 md:py-24 lg:py-32 bg-muted/30'>
        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Powerful Features
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              Everything You Need for <span className='mono-gradient-text'>PDF Intelligence</span>
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Our platform combines cutting-edge AI with intuitive design to transform how you interact with documents
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            <FeatureCard
              icon={<FileText className='h-10 w-10' />}
              title='Smart PDF Upload'
              description='Drag & drop or select PDFs of any size. Our system processes and indexes them for intelligent conversations.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<MessageSquare className='h-10 w-10' />}
              title='AI-Powered Chat'
              description='Ask questions in natural language and get accurate answers based on your document content with context awareness.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Zap className='h-10 w-10' />}
              title='Lightning Fast'
              description='Advanced vector embeddings and optimized algorithms ensure quick and relevant responses to your queries.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Shield className='h-10 w-10' />}
              title='Secure & Private'
              description='Your documents are encrypted and processed securely. We prioritize your privacy with enterprise-grade security.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<Sparkles className='h-10 w-10' />}
              title='Smart Summaries'
              description='Get instant summaries of entire documents or specific sections to quickly grasp key information and insights.'
              className='feature-card-hover'
            />
            <FeatureCard
              icon={<CheckCircle2 className='h-10 w-10' />}
              title='Export & Share'
              description='Export your chat history or share conversation links with team members for seamless collaboration.'
              className='feature-card-hover'
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-black/5 blur-3xl dark:bg-white/5 blob-animation'></div>
        </div>

        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Simple Process
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              How <span className='mono-gradient-text'>PDF Chat AI</span> Works
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Three simple steps to start extracting insights from your documents
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
            {/* Connecting line */}
            <div className='hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-black/20 via-black/50 to-gray-600/20 dark:from-white/20 dark:via-white/50 dark:to-gray-400/20 -translate-y-1/2 z-0'></div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                1
              </div>
              <h3 className='text-xl font-bold'>Upload Your PDF</h3>
              <p className='text-center text-muted-foreground'>
                Drag & drop or select your PDF document from your device. We support files of all sizes.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center'>
                <FileText className='h-12 w-12 text-black/30 dark:text-white/30' />
              </div>
            </div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2 md:translate-y-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                2
              </div>
              <h3 className='text-xl font-bold'>AI Processing</h3>
              <p className='text-center text-muted-foreground'>
                Our AI analyzes and indexes your document for intelligent conversations and deep understanding.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center'>
                <div className='w-12 h-12 border-4 border-black/20 border-t-black dark:border-white/20 dark:border-t-white rounded-full animate-spin'></div>
              </div>
            </div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                3
              </div>
              <h3 className='text-xl font-bold'>Start Chatting</h3>
              <p className='text-center text-muted-foreground'>
                Ask questions and get accurate answers based on your document content with contextual understanding.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center p-4'>
                <div className='w-full h-full flex flex-col justify-end'>
                  <div className='bg-black/10 text-black dark:bg-white/10 dark:text-white rounded-lg p-2 text-sm mb-2 self-start max-w-[80%]'>
                    What are the key findings?
                  </div>
                  <div className='bg-muted rounded-lg p-2 text-sm self-end max-w-[80%] typing-animation'>
                    The key findings show that
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Preview Section */}
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
              Choose the plan that's right for you with no hidden fees
            </p>
            <Button variant='outline' className='mt-4' asChild>
              <Link href='/pricing'>View All Pricing Options</Link>
            </Button>
          </div>

          <PricingPreview />
        </div>
      </section>

      {/* Testimonials Section */}
      <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute -bottom-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-black/5 blur-3xl dark:bg-white/5 blob-animation'></div>
        </div>

        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Testimonials
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              What Our <span className='mono-gradient-text'>Users Say</span>
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Trusted by professionals and teams worldwide
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div className='animate-float'>
              <TestimonialCard
                quote='This tool has completely transformed how I study research papers. I can chat with complex PDFs and understand them much faster than traditional reading.'
                author='Sarah J.'
                role='PhD Researcher'
                rating={5}
                image='/placeholder.svg?height=80&width=80'
              />
            </div>
            <div className='animate-float-slow md:translate-y-8'>
              <TestimonialCard
                quote='As a lawyer, I deal with lengthy documents daily. PDF Chat AI helps me extract key information in seconds instead of hours. The time savings alone is worth the investment.'
                author='Michael T.'
                role='Corporate Attorney'
                rating={5}
                image='/placeholder.svg?height=80&width=80'
              />
            </div>
            <div className='animate-float-slower'>
              <TestimonialCard
                quote="We've integrated PDF Chat into our workflow for document analysis. The time savings and insights are incredible. Our team productivity has increased by at least 30%."
                author='Emily R.'
                role='Project Manager'
                rating={5}
                image='/placeholder.svg?height=80&width=80'
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 bg-black dark:bg-gray-900 -z-10'></div>
        <div className='absolute inset-0 bg-grid-white/10 -z-10'></div>

        <div className='container px-4 md:px-6 relative'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center'>
            <div className='inline-block px-3 py-1 rounded-full bg-white/10 text-white text-sm font-medium'>
              Get Started Today
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white'>
              Ready to Transform How You Work With PDFs?
            </h2>
            <p className='max-w-[900px] text-white/80 md:text-xl/relaxed'>
              Join thousands of users who are already saving time and gaining insights from their documents. Try it free
              for 7 days, no credit card required.
            </p>
            <div className='flex flex-col sm:flex-row gap-4 mt-4'>
              <Button size='lg' variant='secondary' className='font-medium' asChild>
                <Link href='/signup'>
                  Start Your Free Trial <ArrowRight className='ml-2 h-4 w-4' />
                </Link>
              </Button>
              <Button
                size='lg'
                variant='outline'
                className='bg-transparent border-white text-white hover:bg-white/10'
                asChild
              >
                <Link href='/demo'>Request Demo</Link>
              </Button>
            </div>
            <p className='text-sm text-white/60 mt-4'>No credit card required. Cancel anytime.</p>
          </div>

          {/* Floating elements for visual interest */}
          <div className='absolute top-1/4 left-10 w-20 h-20 rounded-full bg-white/5 blur-xl'></div>
          <div className='absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-white/5 blur-xl'></div>
        </div>
      </section>
    </div>
  );
}
