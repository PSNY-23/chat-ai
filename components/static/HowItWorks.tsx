import { FileText } from "lucide-react";

export const HowItWorks = () => {
    return ( 
        <section className='w-full py-12 md:py-24 lg:py-32 relative overflow-hidden'>
        <div className='absolute inset-0 -z-10 overflow-hidden'>
          <div className='absolute -top-[30%] -right-[10%] w-[70%] h-[70%] rounded-full bg-black/5 blur-3xl dark:bg-white/5 blob-animation'></div>
        </div>

        <div className='container px-4 md:px-6'>
          <div className='flex flex-col items-center justify-center space-y-4 text-center mb-12'>
            <div className='inline-block px-3 py-1 rounded-full bg-black/10 text-black dark:bg-white/10 dark:text-white text-sm font-medium'>
              Simple Process
            </div>
            <h2 className='text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl'>
              How <span className='mono-gradient-text'>PDF Chat AI</span> Works
            </h2>
            <p className='max-w-[800px] text-muted-foreground md:text-xl/relaxed'>
              Three simple steps to start extracting insights from your documents
            </p>
          </div>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-8 relative'>
            {/* Connecting line */}
            <div className='hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-black/20 via-black/50 to-gray-600/20 dark:from-white/20 dark:via-white/50 dark:to-gray-400/20 -translate-y-1/2 z-0'></div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                1
              </div>
              <h3 className='text-xl font-bold'>Upload Your PDF</h3>
              <p className='text-center text-muted-foreground'>
                Drag & drop or select your PDF document from your device. We support files of all sizes.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center'>
                <FileText className='h-12 w-12 text-black/30 dark:text-white/30' />
              </div>
            </div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2 md:translate-y-4'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                2
              </div>
              <h3 className='text-xl font-bold'>AI Processing</h3>
              <p className='text-center text-muted-foreground'>
                Our AI analyzes and indexes your document for intelligent conversations and deep understanding.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center'>
                <div className='w-12 h-12 border-4 border-black/20 border-t-black dark:border-white/20 dark:border-t-white rounded-full animate-spin'></div>
              </div>
            </div>

            <div className='relative z-10 flex flex-col items-center space-y-4 p-6 rounded-xl bg-background border shadow-lg transition-transform hover:-translate-y-2'>
              <div className='flex h-16 w-16 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black text-xl font-bold'>
                3
              </div>
              <h3 className='text-xl font-bold'>Start Chatting</h3>
              <p className='text-center text-muted-foreground'>
                Ask questions and get accurate answers based on your document content with contextual understanding.
              </p>
              <div className='mt-4 w-full h-32 bg-muted/50 rounded-lg flex items-center justify-center p-4'>
                <div className='w-full h-full flex flex-col justify-end'>
                  <div className='bg-black/10 text-black dark:bg-white/10 dark:text-white rounded-lg p-2 text-sm mb-2 self-start max-w-[80%]'>
                    What are the key findings?
                  </div>
                  <div className='bg-muted rounded-lg p-2 text-sm self-end max-w-[80%] typing-animation'>
                    The key findings show that
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
     );
}
 
