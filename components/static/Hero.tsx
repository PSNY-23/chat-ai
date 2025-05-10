import Link from "next/link";
import { Button } from "../ui/button";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { HeroUploadDemo } from "../hero-upload-demo";
import { users } from "@/public/data/users";
import Image from "next/image";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { HorizontalGlass } from "../fun-experiments/horizontalGlass";

const Hero = () => {
  return (
    <section className='relative w-full py-12 md:py-24 lg:py-32 overflow-hidden'>
      <div className='container px-4 md:px-6'>
        <div className='grid gap-6 lg:grid-cols-2 lg:gap-12 items-center'>
          <div className='relative flex flex-col justify-center space-y-4'>
            <HorizontalGlass duration={20} />
            <div className='flex px-2 py-1 rounded-full bg-[#f97316]/40 text-[#f97316] border border-[#f97316] dark:bg-white/10 dark:text-white text-[10px] font-medium mb-2 w-fit -rotate-4'>
              Introducing PDF Chat AI <ArrowUpRight className='h-4 w-4 text-white' />
            </div>
            <h1 className='text-4xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none'>
              <span className='mono-gradient-text'>Chat With Your PDFs</span> Using Advanced AI
            </h1>
            <p className='max-w-[600px] text-muted-foreground text-lg md:text-xl'>
              Transform how you interact with documents. Upload your PDFs and start a conversation with our AI assistant
              to extract insights, answer questions, and summarize content instantly.
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
                <TooltipProvider>
                  {users.map((user) => (
                    <Tooltip key={user.id}>
                      <TooltipTrigger asChild>
                        <Image
                          src={user.image}
                          alt={user.name}
                          width={32}
                          height={32}
                          className='w-10 h-10 rounded-full object-cover'
                        />
                      </TooltipTrigger>
                      <TooltipContent side='top'>{user.name}</TooltipContent>
                    </Tooltip>
                  ))}
                </TooltipProvider>
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
  );
};

export default Hero;
