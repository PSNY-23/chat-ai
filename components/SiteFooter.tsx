import Link from "next/link";
import { FileText } from "lucide-react";

export const SiteFooter = () => {
  return (
    <footer className='w-full border-t bg-background'>
      <div className='container py-12 md:py-16'>
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
          <div className='md:col-span-2'>
            <Link href='/' className='flex items-center space-x-2 mb-4'>
              <div className='h-8 w-8 rounded-full bg-black dark:bg-white flex items-center justify-center'>
                <FileText className='h-4 w-4 text-white dark:text-black' />
              </div>
              <span className='font-bold'>PDF Chat AI</span>
            </Link>
            <p className='text-muted-foreground mb-4 max-w-md'>
              Transform how you interact with documents. Upload your PDFs and start a conversation with our AI assistant
              to extract insights instantly.
            </p>
            <div className='flex space-x-4'>
              <Link href='#' className='text-muted-foreground hover:text-foreground transition-colors'></Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
