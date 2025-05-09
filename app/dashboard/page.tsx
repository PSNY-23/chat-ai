"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Loader } from "lucide-react";
import { FileCard } from "./_components/FileCard";

const DashboardPage = () => {
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress,
  });

  if (!fileList) {
    return (
      <div className='h-screen flex items-center justify-center animate-pulse'>
        <div className='animate-spin scale-110'>
          <Loader /> 
        </div>
        <span className="m-4">Loading...</span>
      </div>
    );
  }

  return (
    <div className='py-2 px-6'>
      <h2 className='font-medium text-3xl mb-6'>Workspace</h2>
      <p>This is dev branch workspace bro</p>
      <div className='grid grid-cols-6 gap-2'>
        {fileList &&
          fileList.map((file, index) => (
            <FileCard
                key={index}
                fileName={file.fileName}
                fileUrl={file.fileUrl}
                createdBy={file.createdBy}
                fileId={file.fileId}
              />
          ))}
      </div>
    </div>
  );
};

export default DashboardPage;
