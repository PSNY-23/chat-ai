"use client";

import { useMemo, useState } from "react";
import { useParams } from "next/navigation";
import { PDFViewer } from "../_components/pdfViewer";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";
import EditorPage from "./@editor/page";
import ChatPage from "./@chat/page";
import Sidebar from "@/components/Sidebar";
import { Button } from "@/components/ui/button";

import { CustomAiModal } from "@/components/customize-ai-modal";

const WorkspacePage = () => {
  const params = useParams();
  const [mode, setMode] = useState<"chat" | "note" | "">("chat");
  const [isCustomAiModalOpen, setIsCustomAiMoalOpen] = useState<boolean>(false);

  // 👇 Memoize fileId so it doesn't trigger re-renders unnecessarily
  const fileId = useMemo(() => params.fileId as string, [params.fileId]);

  // 👇 Fetch once with stable fileId
  const fileInfo = useQuery(api.fileStorage.getFileRecord, {
    fileId,
  });

  const handleChangeMode = () => {
    if (mode === "chat") {
      setMode("note");
    } else {
      setMode("chat");
    }
  };

  return (
    <div className='flex'>
      <Sidebar />

      <div className='h-full w-full grid grid-cols-2 gap-2 mt-4'>
        <div>
          <div className='flex justify-between items-center ml-1 px-2 mb-1'>
            <p className='text-sm font-semibold'>Current View: {mode}</p>
            <div className="flex gap-2">
              <Button variant="outline" className="shadow-md" onClick={() => setIsCustomAiMoalOpen(true)}>Customize AI</Button>
              <CustomAiModal open={isCustomAiModalOpen} onOpenChange={setIsCustomAiMoalOpen} />
              <Button onClick={handleChangeMode}>Switch to {mode === "chat" ? "Note" : "Chat"}</Button>
            </div>
          </div>
          {mode === "note" ? <EditorPage fileId={fileId} /> : <ChatPage fileId={fileId} />}
        </div>
        <div>
          <PDFViewer fileUrl={fileInfo?.fileUrl || ""} />
        </div>
      </div>
    </div>
  );
};

export default WorkspacePage;
