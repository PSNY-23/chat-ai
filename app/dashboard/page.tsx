"use client";

import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import Image from "next/image";
import Link from "next/link";

const DashboardPage = () => {
  const { user } = useUser();
  const fileList = useQuery(api.fileStorage.GetUserFiles, {
    createdBy: user?.primaryEmailAddress?.emailAddress || "",
  });

  if (!user) return <p className="text-center mt-10 text-lg">Please sign in.</p>;

  return (
    <div className="py-6 px-8">
      <h2 className="font-semibold text-4xl mb-8">📁 Your Workspace</h2>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {fileList
          ? fileList.map((file) => (
              <Link
                key={file._id}
                href={`/workspace/${file.fileId}`}
                className="group bg-white rounded-xl shadow-sm p-4 hover:shadow-md transition-all border border-gray-100"
              >
                <div className="flex justify-center mb-3">
                  <Image src="/pdf.png" alt="pdf-icon" width={64} height={64} />
                </div>
                <div className="text-sm text-gray-800 font-medium truncate">{file.fileName}</div>
                <div className="text-xs text-gray-500 truncate">{file.createdBy}</div>
                <div className="text-[11px] text-gray-400 mt-1">
                  {new Date(file._creationTime).toLocaleDateString()}
                </div>
              </Link>
            ))
          : Array.from({ length: 10 }).map((_, index) => (
              <div
                key={index}
                className="rounded-xl bg-gray-100 h-44 animate-pulse"
              ></div>
            ))}
      </div>
    </div>
  );
};

export default DashboardPage;
