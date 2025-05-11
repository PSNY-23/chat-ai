"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { Loader } from "lucide-react";
import { FileCard } from "./_components/FileCard";
import { useState } from "react";
// import { ShareModal } from "@/components/share-modal";

const DashboardPage = () => {
  const { user } = useUser();
  const [openDropdownId, setOpenDropdownId] = useState<string | null>(null);
  // const [shareData, setShareData] = useState<{ url: string; title: string }>({
  //   url: "",
  //   title: "",
  // });

  // const handleShare = (fileName: string, fileUrl: string) => {
  //   setShareData({ title: fileName, url: fileUrl });
  // };

  const handleToggleDropdown = (fileId: string) => {
    setOpenDropdownId((prev) => (prev === fileId ? null : fileId));
  };

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress,
  });

  if (!fileList) {
    return (
      <div className='h-screen flex items-center justify-center animate-pulse'>
        <div className='animate-spin scale-110'>
          <Loader />
        </div>
        <span className='m-4'>Loading...</span>
      </div>
    );
  }

  return (
    <div className='py-2 px-6'>
      <h2 className='font-medium text-3xl mb-6'>Workspace</h2>

      <div className='grid grid-cols-6 gap-2'>
        {fileList &&
          fileList.map((file, index) => (
            <FileCard
              key={index}
              fileName={file.fileName}
              fileUrl={file.fileUrl}
              createdBy={file.createdBy}
              fileId={file.fileId}
              isOpen={openDropdownId === file.fileId}
              onToggleDropdown={() => handleToggleDropdown(file.fileId)}
              // handleShare={handleShare}
            />
          ))}
      </div>
      {/* <ShareModal
        open={openDropdownId ? true : false}
        onOpenChange={(open) => {
          if (!open) setOpenDropdownId(null);
        }}
        url={shareData.url}
        title={shareData.title}
      /> */}
    </div>
  );
};

export default DashboardPage;
