"use client";

import { useMemo } from "react";
import { useParams } from "next/navigation";
import { TextEditor } from "../_components/textEditor";
import { PDFViewer } from "../_components/pdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import {Header} from "@/components/Header"

const WorkspacePage = () => {
  const params = useParams();

  // 👇 Memoize fileId so it doesn't trigger re-renders unnecessarily
  const fileId = useMemo(() => params.fileId as string, [params.fileId]);

  // 👇 Fetch once with stable fileId
  const fileInfo = useQuery(api.fileStorage.getFileRecord, {
    fileId,
  });

  return (
    <div>
      <Header />
      <div className="h-full grid grid-cols-2 gap-2">
        <div>
          <TextEditor fileId={fileId} />
        </div>
        <div>
          <PDFViewer fileUrl={fileInfo?.fileUrl || ""} />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
