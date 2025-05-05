"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Layout, PlusIcon, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdfDialog from "./UploadPdfDialog";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

const Sidebar = () => {
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress as string,
  });

  return (
    <div className='shadow-md h-screen p-6 border-r-2'>
      <div className='flex justify-start items-center'>
        <Image src={"/logo.svg"} alt='logo' width={64} height={64} className='' />
        <span className='text-4xl font-bold'>ChatAI</span>
      </div>
      <div className='mt-10'>
        <UploadPdfDialog>
          <Button className='w-full cursor-pointer'>
            <PlusIcon className='w-12 h-12 text-3xl font-extrabold' />
            <span>Upload PDF</span>
          </Button>
        </UploadPdfDialog>
        <div className='flex gap-2 items-center p-3 mt-5 hover:bg-slate-100 rounded-lg cursor-pointer'>
          <Layout />
          <h2>Workspace</h2>
        </div>
        <div className='flex gap-2 items-center p-3 hover:bg-slate-100 rounded-lg cursor-pointer'>
          <Shield />
          <h2>Upgrade</h2>
        </div>
      </div>
      <div className='absolute bottom-24 w-[80%]'>
        <Progress value={fileList && (fileList.length / 20) * 100} />
        <p className='text-sm mt-1 '>{fileList?.length}/20 PDF uploaded</p>
        <p className='text-sm text-gray-400 mt-2 '>Upgrade to add more PDF</p>
      </div>
    </div>
  );
};

export default Sidebar;
