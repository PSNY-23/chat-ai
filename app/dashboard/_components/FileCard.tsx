import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "@/components/ui/dropdown-menu";
import { Copy, Settings } from "lucide-react";
import React, { useState } from "react";
import { useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { toast } from "sonner";

type FileCardProps = {
  fileName: string;
  fileUrl: string;
  createdBy: string;
  fileId: string;
  isOpen: boolean;
  onToggleDropdown: () => void;
};

export function FileCard({
  fileName,
  fileUrl,
  createdBy,
  fileId,
  isOpen,
  onToggleDropdown,
}: FileCardProps) {
  const [isCopied, setIsCopied] = useState(false);

  const deleteFile = useMutation(api.fileStorage.deleteFile);

  // Function to handle copying the URL to clipboard
  const handleCopyLink = async (e: React.MouseEvent) => {
    e.preventDefault(); // Prevent the default link behavior (navigation)
    try {
      await navigator.clipboard.writeText(fileUrl);
      setIsCopied(true); // Indicate that the URL has been copied
      setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
    } catch (error) {
      console.error("Failed to copy the URL: ", error);
    }
  };
  const handleEditTab = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("👋Coming soon");
  };
  const handleDeleteTab = (e: React.MouseEvent) => {
    e.preventDefault();
    deleteFile({ fileId });
    toast.success("Deleted");
  };
  const handleShareTab = (e: React.MouseEvent) => {
    e.preventDefault();
    toast("👋Coming soon");
  };
  return (
    <Card className='relative flex flex-col justify-between h-full backdrop-blur-md bg-white/10 border border-white/20 shadow-lg rounded-2xl transition-all duration-200 hover:scale-[1.01] hover:shadow-xl focus-within:ring-2 focus-within:ring-black'>
      {/* Three-dot icon */}
      <div className='absolute top-4 right-4 z-10'>
        <DropdownMenu open={isOpen} onOpenChange={() => onToggleDropdown()}>
          <DropdownMenuTrigger className='focus:outline-none'>
            <Settings
              className='w-5 h-5 text-black/50 hover:text-black hover:rotate-90 transition-all duration-200 ease-in-out'
              onClick={() => onToggleDropdown()}
            />
          </DropdownMenuTrigger>
          <DropdownMenuContent side='bottom' align='end' className='bg-white shadow-md border rounded-md'>
            <DropdownMenuItem onClick={handleEditTab}>Edit</DropdownMenuItem>
            <DropdownMenuItem onClick={handleDeleteTab}>Delete</DropdownMenuItem>
            <DropdownMenuItem onClick={handleShareTab}>Share</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>

      {/* Card Header */}
      <Link href={`/workspace/${fileId}`}>
        <CardHeader className='flex items-center justify-center p-4'>
          <Image src='/pdf.png' alt='PDF Icon' width={64} height={64} />
        </CardHeader>

        {/* Card Content */}
        <CardContent className='px-4 text-sm truncate'>
          <h1 className='font-semibold truncate'>{fileName}</h1>
          <p className='text-muted-foreground text-xs truncate'>{createdBy}</p>
        </CardContent>
      </Link>

      {/* Card Footer */}
      <CardFooter className='px-4 py-2 text-xs text-gray-600 truncate'>
        {/* Link to copy URL */}
        <div onClick={handleCopyLink} className='cursor-pointer hover:text-blue-800'>
          {isCopied ? (
            "Link copied!"
          ) : (
            <div className='text-xs flex gap-1'>
              PDF Link <Copy className='h-4 w-4' />
            </div>
          )}
        </div>
      </CardFooter>
    </Card>
  );
}
