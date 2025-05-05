"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  const { user } = useUser();

  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress,
  });

  console.log(fileList);

  return (
    <div className='py-2 px-6'>
      <h2 className='font-medium text-3xl mb-6'>Workspace</h2>
      <div className='grid grid-cols-6 gap-2'>
        {fileList && fileList.map((file, index) => (
          <div key={index}>
            <Image src={"/pdf.png"} alt="logo-pdf" width={70} height={70} />
            <h1>{file.fileName}</h1>
            <p>{file.createdBy}</p>
            <p>{file.fileUrl}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
