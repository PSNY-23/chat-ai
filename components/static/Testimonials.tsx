import React from "react";
import { TestimonialCard } from "../testimonial-card";

export const Testimonials = () => {
  return (
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
  );
};
