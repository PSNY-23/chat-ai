"use client";





import { useParams } from "next/navigation";
import { WorkspaceHeader } from "../_components/workspace-header";
import { TextEditor } from "../_components/textEditor";
import { PDFViewer } from "../_components/pdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useEffect } from "react";

const WorkspacePage = () => {

  const { fileId } = useParams();

  const fileInfo = useQuery(api.fileStorage.getFileRecord, {
    fileId: fileId as string,
  });

  useEffect(() => {
    console.log("fileInfo: ", fileInfo);
  }, []);

  return (
    <div>
      <WorkspaceHeader />
      <div className='h-full grid grid-cols-2 gap-2'>
        <div>
          <TextEditor fileId={fileId as string} />
        </div>
        <div>
          <PDFViewer fileUrl={fileInfo?.fileUrl || ""} />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
