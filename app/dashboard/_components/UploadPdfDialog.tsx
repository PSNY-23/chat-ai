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
import { useMutation } from "convex/react";
import { v } from "convex/values";
import { Loader } from "lucide-react";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

const UploadPdfDialog = ({ children }: { children: React.ReactNode }) => {
  const [file, setFile] = useState<File | undefined>();
  const [loading, setLoading] = useState<boolean>(false);
  const [fileName, setFileName] = useState("");

  const generateUploadUrl = useMutation(api.fileStorage.generateUploadUrl);

  const { user } = useUser();
  const uploadFile = useMutation(api.fileStorage.uploadFile);
  const getFileUrl = useMutation(api.fileStorage.getFileUrl);

  const onFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFile(event.target.files?.[0]);
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
    const {success, url} = await getFileUrl({storageId});
    const fileId = uuidv4();
    const uploadData = {
      fileId: fileId,
      storageId: storageId,
      fileName: fileName,
      fileUrl: url,
      createdBy: user?.primaryEmailAddress?.emailAddress,
    };
    const res = await uploadFile(uploadData);
    console.log(res);
    setLoading(false);
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Upload PDF file</DialogTitle>
          <DialogDescription asChild>
            <div className='mt-2'>
              <div className='flex mt-5 gap-2 p-4 rounded-md border'>
                <h2>Select file to upload</h2>
                <input type='file' accept='application/pdf' onChange={(event) => onFileSelect(event)} />
              </div>
              <div className='mt-2'>
                <label>Add file name</label>
                <Input placeholder='Enter file name' value={fileName} onChange={(e) => setFileName(e.target.value)} />
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button type='button' variant='secondary'>
              Close
            </Button>
          </DialogClose>
          <Button type='button' variant='default' onClick={onUpload}>
            {loading ? <Loader className='animate-spin' /> : "Upload"}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default UploadPdfDialog;
