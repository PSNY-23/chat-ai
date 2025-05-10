"use client";

import { Button } from "@/components/ui/button";
import { SignedOut, SignInButton, SignUpButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const Header = () => {
 
  return (
    <div className='fixed top-0 z-50 w-full bg-transparent backdrop-blur-sm'>
      <div className='flex px-6 py-2 items-center justify-between border-b'>
        <div className=''>
          <Link href='/dashboard' className='flex justify-start items-center'>
            <Image src={"/logo.svg"} alt='logo' width={48} height={48} className='hover:animate-spin' />
            <span className='text-3xl font-bold'>ChatAI</span>
          </Link>
        </div>
        <div className='flex gap-6'>
         
          <div className='scale-130 flex items-center justify-center pr-6'>
            <div className='flex items-center gap-4'>
              <SignedOut>
                <SignInButton>
                  <Button size='sm' className='text-sm' variant="default">
                    Sign In
                  </Button>
                </SignInButton>
                <SignUpButton>
                  <Button size='sm' variant="outline" className='text-sm'>
                    Sign Up
                  </Button>
                </SignUpButton>
              </SignedOut>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
