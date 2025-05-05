import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export const WorkspaceHeader = () => {
  return (
    <div className='flex px-6 py-3 items-center justify-between border-b'>
      <div className=''>
        <Link href='/dashboard' className='flex justify-start items-center'>
          <Image src={"/logo.svg"} alt='logo' width={64} height={64} className='' />
          <span className='text-4xl font-bold'>ChatAI</span>
        </Link>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center justify-center scale-105">
          <Button size="lg">Save</Button>
        </div>
        <div className='scale-160 flex items-center justify-center'>
          <UserButton />
        </div>
      </div>
    </div>
  );
};
