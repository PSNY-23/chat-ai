"use client";

import type React from "react";

import { useState, useEffect } from "react";
import { FileText, Upload, X, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { useRouter } from "next/navigation";

export function HeroUploadDemo() {
  const [isDragging, setIsDragging] = useState(false);
  const [isUploaded, setIsUploaded] = useState(false);
  const [isProcessing, setIsProcessing] = useState(false);
  const [processingProgress, setProcessingProgress] = useState(0);
  const [isChatReady, setIsChatReady] = useState(false);
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentTypingIndex, setCurrentTypingIndex] = useState(0);

  const router = useRouter();

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    simulateUpload();
  };

  const simulateUpload = () => {
    setIsUploaded(true);
    setIsProcessing(true);
    setProcessingProgress(0);

    // Simulate processing progress
    const interval = setInterval(() => {
      setProcessingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsProcessing(false);
          setIsChatReady(true);
          setMessages([
            { role: "system", content: "PDF has been processed. You can now ask questions about the document." },
          ]);
          return 100;
        }
        return prev + 5;
      });
    }, 150);
  };

  const resetDemo = () => {
    setIsUploaded(false);
    setIsProcessing(false);
    setProcessingProgress(0);
    setIsChatReady(false);
    setMessages([]);
    setInputValue("");
    setIsTyping(false);
    setCurrentTypingIndex(0);
  };

  const simulateChat = () => {
    router.push("/dashboard");
    if (!isChatReady || !inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: "user", content: userMessage }]);
    setInputValue("");
    setIsTyping(true);
    setCurrentTypingIndex(0);
  };

  // Simulate typing effect for AI response
  useEffect(() => {
    if (isTyping) {
      const response =
        "This document discusses advanced machine learning techniques for natural language processing, with a focus on transformer architectures and their applications in document understanding. The key findings show that transformer models outperform traditional approaches by 37% on benchmark tasks.";

      if (currentTypingIndex < response.length) {
        const timer = setTimeout(() => {
          setCurrentTypingIndex((prev) => prev + 1);
        }, 20);
        return () => clearTimeout(timer);
      } else {
        setMessages((prev) => [...prev, { role: "assistant", content: response }]);
        setIsTyping(false);
      }
    }
  }, [isTyping, currentTypingIndex]);

  return (
    <div className='relative w-full max-w-md mx-auto lg:mx-0 rounded-xl border shadow-lg bg-background overflow-hidden'>
      <div className='absolute top-0 left-0 right-0 h-12 bg-muted/50 backdrop-blur-sm flex items-center px-4 border-b z-10'>
        <div className='flex space-x-2'>
          <div className='w-3 h-3 rounded-full bg-red-500'></div>
          <div className='w-3 h-3 rounded-full bg-yellow-500'></div>
          <div className='w-3 h-3 rounded-full bg-green-500'></div>
        </div>
        <div className='ml-4 text-sm font-medium'>PDF Chat</div>
        {isUploaded && (
          <Button variant='ghost' size='icon' className='ml-auto h-8 w-8' onClick={resetDemo}>
            <X className='h-4 w-4' />
            <span className='sr-only'>Reset Demo</span>
          </Button>
        )}
      </div>

      <div className='pt-12 p-4 h-[450px] flex flex-col'>
        {!isUploaded ? (
          <div
            className={`flex-1 border-2 border-dashed rounded-lg flex flex-col items-center justify-center p-6 transition-colors ${isDragging ? "border-black bg-black/5 dark:border-white dark:bg-white/5" : "border-muted-foreground/20"}`}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            onClick={simulateUpload}
          >
            <div className='w-16 h-16 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center mb-4'>
              <Upload className='h-8 w-8 text-black dark:text-white' />
            </div>
            <p className='text-center font-medium mb-2'>Test sample PDF</p>
            <p className='text-center text-muted-foreground text-sm mb-4'>
              Upload this sample PDF, and chat
            </p>
            <Button
              size='sm'
              className='relative overflow-hidden group bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90'
              onClick={(e) => {
                e.stopPropagation();
                simulateUpload();
              }}
            >
              <span className='relative z-10'>Select PDF</span>
            </Button>
          </div>
        ) : (
          <div className='flex-1 flex flex-col'>
            {isProcessing ? (
              <div className='flex-1 flex flex-col items-center justify-center'>
                <div className='w-16 h-16 rounded-full bg-black/10 dark:bg-white/10 flex items-center justify-center mb-4'>
                  <Zap className='h-8 w-8 text-black dark:text-white animate-pulse' />
                </div>
                <p className='text-center font-medium mb-2'>Processing your PDF</p>
                <p className='text-center text-muted-foreground text-sm mb-4'>
                  Analyzing document content and generating embeddings
                </p>
                <div className='w-full max-w-xs mb-2'>
                  <Progress value={processingProgress} className='h-2' />
                </div>
                <p className='text-xs text-muted-foreground'>{processingProgress}% complete</p>
              </div>
            ) : (
              <>
                <div className='flex items-center gap-2 mb-4 p-2 bg-muted rounded-lg'>
                  <FileText className='h-5 w-5 text-black dark:text-white' />
                  <div className='flex-1'>
                    <div className='flex items-center'>
                      <span className='text-sm font-medium'>research-paper.pdf</span>
                      <Badge variant='outline' className='ml-2 text-xs'>
                        12 pages
                      </Badge>
                    </div>
                    <span className='text-xs text-muted-foreground'>2.4 MB • Uploaded just now</span>
                  </div>
                </div>

                <div className='flex-1 overflow-y-auto space-y-4 mb-4 scrollbar-hide'>
                  {messages.map((message, index) => (
                    <div
                      key={index}
                      className={`p-3 rounded-lg text-sm ${
                        message.role === "user"
                          ? "bg-black text-white dark:bg-white dark:text-black ml-12"
                          : message.role === "assistant"
                            ? "bg-muted mr-12"
                            : "bg-muted/50 text-muted-foreground italic text-xs"
                      }`}
                    >
                      {message.content}
                    </div>
                  ))}
                  {isTyping && (
                    <div className='bg-muted rounded-lg p-3 text-sm mr-12'>
                      {Array.from({ length: currentTypingIndex }).map((_, i) => (
                        <span key={i}>
                          {"This document discusses advanced machine learning techniques for natural language processing, with a focus on transformer architectures and their applications in document understanding. The key findings show that transformer models outperform traditional approaches by 37% on benchmark tasks.".charAt(
                            i
                          )}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className='relative'>
                  <input
                    type='text'
                    placeholder='Ask a question about your PDF...'
                    className='w-full p-3 pr-24 rounded-lg border focus:outline-none focus:ring-2 focus:ring-black dark:focus:ring-white'
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && simulateChat()}
                  />
                  <Button
                    size='sm'
                    className='absolute right-1 top-1 bottom-1 bg-black text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90'
                    onClick={simulateChat}
                    disabled={!inputValue.trim()}
                  >
                    Ask
                  </Button>
                </div>
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
}
