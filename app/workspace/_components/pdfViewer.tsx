"use client";
import { Loader } from "lucide-react";
import React, { useState } from "react";

export const PDFViewer = ({ fileUrl }: { fileUrl: string }) => {
  console.log("reached pdf viewer component")
  const [loaded, setLoaded] = useState(false);
  return (
    <div>
      <div className='relative rounded-2xl overflow-hidden shadow-xl border border-gray-200'>
        {!loaded && (
          <div className='h-[90vh] flex items-center justify-center bg-gray-100  text-xl'>
            <span className='animate-pulse'>Loading...</span>
            <Loader className='animate-spin' />
          </div>
        )}
        {fileUrl ? (
          <iframe
            onLoad={() => setLoaded(true)}
            src={fileUrl}
            className={`w-full h-[90vh] border-none ${loaded ? "" : "hidden"}`}
          />
        ) : null}
      </div>
    </div>
  );
};
