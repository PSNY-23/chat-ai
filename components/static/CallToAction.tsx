import { Link, ArrowRight } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

const CallToAction = () => {
  return (
    <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
      
      

      <div className='container px-4 md:px-6 relative'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <div className='inline-block px-3 py-1 rounded-full text-sm font-medium'>
            Get Started Today
          </div>
          <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
            Ready to Transform How You Work With PDFs?
          </h2>
          <p className='max-w-[900px] md:text-xl/relaxed'>
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
              className='bg-transparent border-white hover:bg-white/10'
              asChild
            >
              <Link href='/demo'>Request Demo</Link>
            </Button>
          </div>
          <p className='text-sm  mt-4'>No credit card required. Cancel anytime.</p>
        </div>

        {/* Floating elements for visual interest */}
        <div className='absolute top-1/4 left-10 w-20 h-20 rounded-full blur-xl'></div>
        <div className='absolute bottom-1/4 right-10 w-32 h-32 rounded-full blur-xl'></div>
      </div>
    </section>
  );
};

export default CallToAction;
