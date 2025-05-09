"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { api } from "@/convex/_generated/api";
import { useUser } from "@clerk/nextjs";
import { DialogClose } from "@radix-ui/react-dialog";
import { useAction, useMutation } from "convex/react";
import { v } from "convex/values";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import axios from "axios";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

const UploadPdfDialog = ({ children }: { children: React.ReactNode }) => {
  const router = useRouter();
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [open, setOpen] = useState<boolean>(false);
  const [fileName, setFileName] = useState("");

  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);

  const { user } = useUser();
  const uploadFile = useMutation(api.fileStorage.uploadFile);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);
  const embeddDocument = useAction(api.myActions.ingest);

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
    setFileName(event.target.files?.[0]?.name || "");
  };
  const onUpload = async () => {
    setLoading(true);
    // Step 1: Get a short-lived upload URL
    const postUrl = await generateUploadUrl();
    // Step 2: POST the file to the URL
    const result = await fetch(postUrl, {
      method: "POST",
      headers: { "Content-Type": file?.type },
      body: file,
    });
    const { storageId } = await result.json();
    //3. upload this storageId with the other values in the database
    const { success, url } = await getFileUrl({ storageId });
    const fileId = uuidv4();
    const uploadData = {
      fileId: fileId,
      storageId: storageId,
      fileName: fileName,
      fileUrl: url,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    };
    const res = await uploadFile(uploadData);
    

    if (!res.success) {
      toast("❌Error uploading file");
      return { success: false, error: "Error uploading file" };
    } else {
      toast(`Step-1:${res.message}`);
    }

    // API call to fetch => pdf process data
    
    const ApiResponse = await axios.get(`/api/pdf-loader?pdfUrl=${res.fileUrl}`);
  
    toast("Step-2:Embedding...");
    const embeddedResult = await embeddDocument({
      splitText: ApiResponse.data.docs,
      fileId: fileId,
    });
    if (embeddedResult.success) {
      toast(embeddedResult.message);
      setLoading(false);
      setOpen(false);
      router.push(`/workspace/${res.fileId}`);
    }
  };
  return (
    <Dialog open={open}>
      <DialogTrigger asChild>
        <Button onClick={() => setOpen(true)} className='w-full'>
          {children}
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className='text-gray-500'>Upload PDF file</DialogTitle>
          <DialogDescription asChild>
            <div className='space-y-4'>
              <div className='rounded-md shadow-lg bg-white'>
                <label className='flex flex-col items-center justify-center gap-3 p-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-50 transition'>
                  <span className='text-gray-500 text-sm'>Select a PDF file</span>
                  <input
                    type='file'
                    accept='application/pdf'
                    className='hidden'
                    onChange={(event) => onFileSelect(event)}
                  />
                </label>
              </div>

              <div>
                <label className='block text-sm text-gray-600 mb-1'>File name</label>
                <Input
                  placeholder='Enter file name'
                  value={fileName}
                  onChange={(e) => setFileName(e.target.value)}
                  className='border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 transition'
                />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button type='button' variant='secondary' disabled={loading}>
              Close
            </Button>
          </DialogClose>
          <Button type='button' variant='default' onClick={onUpload} disabled={loading}>
            {loading ? <Loader className='animate-spin' /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
