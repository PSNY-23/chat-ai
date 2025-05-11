"use client";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

type Message = {
  id: number;
  role: "user" | "bot";
  content: string;
};

interface ChatBoxProps {
  fileId: string;
}

const ChatBox = ({ fileId }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  console.log("fileId: ", fileId);

  const sendMessage = () => {
    if (!input.trim()) return;

    const userMsg: Message = {
      id: Date.now(),
      role: "user",
      content: input,
    };

    const botReply: Message = {
      id: Date.now() + 1,
      role: "bot",
      content: "I'm a bot and I received: " + input, // Replace with real logic
    };

    setMessages((prev) => [...prev, userMsg, botReply]);
    setInput("");
  };

  return (
    <div className='flex flex-col h-[600px] w-full p-2'>
      <Card className='flex-1 overflow-hidden'>
        <ScrollArea className='h-full p-4 space-y-3'>
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`p-3 rounded-lg max-w-xl mb-3 ${
                msg.role === "user" ? "bg-slate-200 ml-auto w-1/2" : "mr-auto border border-gray-300 w-2/3"
              }`}
            >
              {msg.content}
            </div>
          ))}
        </ScrollArea>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className='mt-4 flex gap-2 px-4'
        >
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type your message...' />
          <Button type='submit'>Send</Button>
        </form>
      </Card>
    </div>
  );
};

export default ChatBox;
