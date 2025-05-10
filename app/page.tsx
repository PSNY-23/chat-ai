"use client";

import { Header } from "@/components/Header";
import { PricingPreview } from "@/components/pricing-preview";

//static component imports
import Hero from "@/components/static/Hero";
import Brand from "@/components/static/Brand";
import Stats from "@/components/static/stats";
import { Features } from "@/components/static/features";
import { HowItWorks } from "@/components/static/HowItWorks";
import { Testimonials } from "@/components/static/Testimonials";
import CallToAction from "@/components/static/CallToAction";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import VerticalGlass from "@/components/fun-experiments/verticalGlass";
import { HorizontalGlass } from "@/components/fun-experiments/horizontalGlass";

export default function Home() {
  const router = useRouter();
  const { isLoaded, user } = useUser();
  useEffect(() => {
    if (isLoaded && user) {
      router.push("/dashboard");
    }
  }, [user, isLoaded, router]);

  if (!isLoaded) return null; // or a loading spinner

  if (user) return null;

  return (
    <>
      <div className='relative flex flex-col min-h-screen bg-slate-100'>
        <Header />
        {/* Hero Section */}
        <Hero />

        {/* Brands Section */}
        <Brand />

        {/* Stats Section */}
        <Stats />
        {/* Features Section */}
        <Features />
        {/* How It Works Section */}
        <HowItWorks />

        {/* Pricing Preview Section */}
        <PricingPreview />

        {/* Testimonials Section */}
        <Testimonials />

        {/* CTA Section */}
        <CallToAction />
        <HorizontalGlass duration={10} className='' />
        <VerticalGlass duration={20} className="bg-transparent"/>
      </div>
    </>
  );
}
