"use client";

import { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";
import { toast } from "sonner";
import { useAction } from "convex/react";
import { api } from "@/convex/_generated/api";
import { generateAIResponse } from "@/configs/AiMode";
import { Loader, SendHorizonal } from "lucide-react";

type Message = {
  fileId: string;
  role: "user" | "bot";
  content: string;
  createdAt: number;
};

interface ChatBoxProps {
  fileId: string;
}

const ChatBox = ({ fileId }: ChatBoxProps) => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [loadingBotAnswer, setLoadingBotAnswer] = useState<boolean>(false);

  const searchAi = useAction(api.myActions.search);

  const bottomRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom when messages update
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const sendMessage = async () => {
    if (!input.trim()) {
      toast.error("Type something to search");
      return;
    }
    setLoadingBotAnswer(true);
    const userMsg: Message = {
      fileId: fileId,
      role: "user",
      content: input,
      createdAt: Date.now(),
    };
    setMessages((prev) => [...prev, userMsg]);

    const chatHistoryContext = messages.reduce((acc, msg) => {
  const sender = msg.role === "user" ? "You" : "Bot";
  return acc + `${sender}: ${msg.content}\n`;
}, "");


    const PROMPT_FOR_QUESTION = `
You are a highly intelligent assistant designed to rewrite vague or incomplete questions into fully clear and self-contained search queries.

You will receive two things:
1. A previous conversation (chat history) between a user and a bot.
2. A follow-up user question that may refer back to earlier topics (e.g., using words like "they", "which", "what", "how many", etc.)

Your task is to:
- Fully understand the context and intent behind the user's current question
- Identify any references or pronouns and resolve them using the chat history
- Rewrite the question into a clear, focused, and complete query that stands alone — as if it were being asked without any prior context

---

### Rules:
- Avoid vague terms or unresolved references like "they", "those", "this", or "which"
- Incorporate any necessary details from the previous conversation
- Ensure the query is phrased in natural language, as someone would type into a search engine or ask a smart tutor
- Do NOT return explanations, notes, or bullet points — just output a single clean question

---

### Chat History:
${chatHistoryContext}

### Follow-up User Question:
"${input}"

---

🎯 Now output the final, rephrased search query that clearly expresses what the user is really asking, with full context included.
Only output the final question string.
`;


    const aiModelQuestionUnformatted = await generateAIResponse(PROMPT_FOR_QUESTION)
    const aiModelQuestionFormatted = aiModelQuestionUnformatted.join(" ").trim().replace(/\s+/g, " ");
    console.log(aiModelQuestionFormatted)
    const getBotAnswer = async () => {
      const result = await searchAi({
        query:aiModelQuestionFormatted ,
        fileId: fileId as string,
      });
      const UnformattedAns = JSON.parse(result);
      console.log(UnformattedAns)
      const PROMPT = `
    You are a helpful, friendly, and intelligent tutor in a student-facing chat application.
    
    Your job is to answer questions **based primarily on the provided content from a PDF**.
    
    **Important behavior guidelines:**
    1. Respond as if you're directly helping the student (the end-user), not a developer.
    2. Always return your response in clean and simple **HTML format** suitable for rendering in the UI.
    3. **Do NOT mention technical issues** like "HTML doesn't exist", "null", "undefined", or programming bugs.
    4. Never say things like "I'm an AI" or "As an AI model..." — respond like a confident human tutor.
    5. If the answer is clearly found in the provided content, extract and present it clearly in an anchor tag with the exact
    text your found.
    6. If the answer is **not found in the PDF content**, say:
       Then, provide a helpful very short(1-2 lines) general explanation or answer from outside knowledge, but only if it's accurate and easy to understand.
    7. Don't say "Hi", "hello" etc.
    8. Make sure you don't include anything unnecessary that may consume users time and focus.
    
    Your tone should be:
    - Friendly and calm
    - Supportive like a real tutor
    - Easy to understand (avoid jargon)
    - Confident and helpful
    
    ---
    
    Here is the question: ${result}
    
    Here is the extracted content from the PDF to use as your main source: ${UnformattedAns}.
    The ${UnformattedAns} are the actual part of pdf so they must be an anchortag(<a></a>) in the response.
    
    Now, please generate the final response in HTML format following all the instructions above.
    `;

      const aiModelResult = await generateAIResponse(PROMPT);

      // / formating the things with ai because we are gtting an array of html parts
      const htmlString = aiModelResult
        .join("") // Join the chunks
        .replace(/```(html)?/g, "") // Remove ```html and ```
        .trim(); // Clean extra spaces

      // saving the pdf-docs-chat in the database(notes)
      return htmlString;

      setLoadingBotAnswer(false);
    };

    const botAnswer = await getBotAnswer();

    const botReply: Message = {
      fileId: fileId,
      role: "bot",
      content: botAnswer, // Replace with real logic
      createdAt: Date.now() + 1,
    };

    setMessages((prev) => [...prev, botReply]);
    setLoadingBotAnswer(false);
    setInput("");
  };

  return (
    <div className='flex flex-col h-[600px] w-full p-2'>
      <Card className='flex-1 overflow-hidden'>
        <ScrollArea className='h-full p-4 space-y-3'>
          {messages.map((msg, index) => {
            const isLastUserMessage =
              msg.role === "user" && index === messages.length - 1 && messages[messages.length - 1].role === "user";

            return (
              <div
                key={msg.createdAt}
                className={`p-3 rounded-lg mb-3 break-words max-w-[70%] ${
                  msg.role === "user"
                    ? `ml-auto flex justify-end ${
                        isLastUserMessage
                          ? "bg-slate-100 border border-orange-400 animate-pulse"
                          : "bg-gray-200 text-gray-800"
                      }`
                    : "mr-auto bg-white text-gray-900 border border-gray-300"
                }`}
                style={{ width: "fit-content" }}
              >
                {msg.role === "bot" ? <div dangerouslySetInnerHTML={{ __html: msg.content }} /> : msg.content}
              </div>
            );
          })}

          <div ref={bottomRef} />
        </ScrollArea>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            sendMessage();
          }}
          className='mt-4 flex gap-2 px-4'
        >
          <Input value={input} onChange={(e) => setInput(e.target.value)} placeholder='Type your message...' />
          <Button type='submit'>
            {loadingBotAnswer ? (
              <span className='animate-spin'>
                <Loader />
              </span>
            ) : (
              <span>
                <SendHorizonal />
              </span>
            )}
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default ChatBox;
