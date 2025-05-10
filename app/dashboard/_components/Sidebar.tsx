"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Layout, PanelLeftOpen, PanelRightOpen, Plus, Shield } from "lucide-react";
import { Progress } from "@/components/ui/progress";
import UploadPdfDialog from "./UploadPdfDialog";
import { UserButton, useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useState } from "react";
import clsx from "clsx";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress as string,
  });

  return (
    <div
      className={clsx(
        "shadow-md h-screen border-r transition-all duration-300 flex flex-col justify-between",
        isOpen ? "w-64 p-4" : "w-20 p-4"
      )}
    >
      <div>
        <div className={`flex justify-between ${!isOpen ? "flex-col" : "flex-row-reverse"}`}>
          {/* Toggle Button */}
          <div className='flex justify-center items-center mb-6 scale-160'>
            <Button variant='ghost' onClick={() => setIsOpen(!isOpen)} className='rounded-full'>
              {isOpen ? <PanelRightOpen size={64} /> : <PanelLeftOpen size={64} />}
            </Button>
          </div>
          {/* Top: Logo */}
          <div className='flex items-center gap-3 justify-center'>
            <Image src={"/logo.svg"} alt='logo' width={isOpen ? 48 : 32} height={isOpen ? 48 : 32} />
            {isOpen && <span className='text-2xl font-bold'>ChatAI</span>}
          </div>
        </div>

        {/* Middle: Actions */}
        <div className='mt-10 flex flex-col gap-3'>
          <UploadPdfDialog>
            <Plus />
            {isOpen && <span>Upload PDF</span>}
          </UploadPdfDialog>

          <div className='flex gap-3 items-center p-3 hover:bg-slate-100 rounded-lg cursor-pointer'>
            <Layout />
            {isOpen && <span>Workspace</span>}
          </div>

          <div className='flex gap-3 items-center p-3 hover:bg-slate-100 rounded-lg cursor-pointer'>
            <Shield />
            {isOpen && <span>Upgrade</span>}
          </div>
        </div>
      </div>

      {/* Bottom: Progress & Profile */}
      <div>
        <Progress value={fileList ? (fileList.length / 20) * 100 : 0} />
        {isOpen && (
          <>
            <p className='text-sm mt-1'>{fileList?.length}/20 PDF uploaded</p>
            <p className='text-sm text-gray-400 mt-2'>Upgrade to add more PDF</p>
          </>
        )}

        <div className='flex gap-3 mt-4 bg-slate-200 rounded-full px-3 py-2 items-center'>
          <UserButton />
          {isOpen && (
            <div className='leading-tight overflow-hidden'>
              <p className='text-sm font-bold text-gray-700 m-0'>{user?.firstName}</p>
              <p className='text-xs text-gray-500 m-0'>{user?.primaryEmailAddress?.emailAddress}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
