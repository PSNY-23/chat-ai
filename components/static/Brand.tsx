'use client'
import { BrandLogos } from "@/components/static/brand-logos";

const Brand = () => {
  return (
    <section className='w-full py-8 md:py-12 border-y bg-muted/30'>
      <div className='container px-4 md:px-6'>
        <div className='flex flex-col items-center justify-center space-y-4 text-center'>
          <p className='text-sm uppercase tracking-wider text-muted-foreground'>Trusted by innovative companies</p>
          <BrandLogos />
        </div>
      </div>
    </section>
  );
};

export default Brand;
