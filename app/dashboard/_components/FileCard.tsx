import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

type FileCardProps = {
  fileName: string;
  fileUrl: string;
  createdBy: string;
  fileId: string;
};

export function FileCard({ fileName, fileUrl, createdBy, fileId }: FileCardProps) {
  return (
    <Link href={`/workspace/${fileId}`}>
      <Card className='hover:shadow-lg transition-all duration-200 flex flex-col justify-between h-full'>
        <CardHeader className="flex items-center justify-center p-4">
          <Image src="/pdf.png" alt="PDF Icon" width={64} height={64} />
        </CardHeader>
        <CardContent className="px-4 text-sm truncate">
          <h1 className='font-semibold truncate'>{fileName}</h1>
          <p className='text-muted-foreground text-xs truncate'>{createdBy}</p>
        </CardContent>
        <CardFooter className="px-4 py-2 text-xs text-blue-600 truncate">
          {fileUrl}
        </CardFooter>
      </Card>
    </Link>
  );
}
