"use client";
import React, { useState } from "react";
import { Editor } from "@tiptap/react";
import {
  Bold,
  Italic,
  Underline,
  Strikethrough,
  Heading1,
  Heading2,
  Quote,
  Code,
  ListOrdered,
  Link as LinkIcon,
  Image as ImageIcon,
  Minus,
  Sparkle,
  Loader,
} from "lucide-react";
import { useAction, useMutation } from "convex/react";
import { api } from "@/convex/_generated/api";
import { useParams } from "next/navigation";
import { generateAIResponse } from "@/configs/AiMode";
import { useUser } from "@clerk/nextjs";
import { toast } from "sonner";

export const EditorExtension = ({ editor }: { editor: Editor | null }) => {
  const { fileId } = useParams();
  const searchAi = useAction(api.myActions.search);
  const addNotes = useMutation(api.notes.addNotes);
  const { user } = useUser();
  const [aiAnswerSearching, setAiAnswerSearching] = useState<boolean>(false);

  if (!editor) return null;
  const onAiClick = async () => {
    const selectedText = editor.state.doc.textBetween(editor.state.selection.from, editor.state.selection.to, " ");
    if (!selectedText) {
      toast.warning("Select text for searching");
      return;
    }
    setAiAnswerSearching(true);
    const result = await searchAi({
      query: selectedText,
      fileId: fileId as string,
    });

    const UnformattedAns = JSON.parse(result);
    let AllUnformattedAns = "";

    if (UnformattedAns) {
      UnformattedAns.forEach((item: { pageContent: string }) => {
        AllUnformattedAns += item.pageContent;
      });
    }

    const PROMPT = `
You are a helpful, friendly, and intelligent tutor in a student-facing chat application.

Your job is to answer questions **based primarily on the provided content from a PDF**.

**Important behavior guidelines:**
1. Respond as if you're directly helping the student (the end-user), not a developer.
2. Always return your response in clean and simple **HTML format** suitable for rendering in the UI.
3. **Do NOT mention technical issues** like "HTML doesn't exist", "null", "undefined", or programming bugs.
4. Never say things like "I'm an AI" or "As an AI model..." — respond like a confident human tutor.
5. If the answer is clearly found in the provided content, extract and present it clearly.
6. If the answer is **not found in the PDF content**, say:
   <b>The relevant result is not available in the PDF.</b> 
   Then, **optionally provide a helpful general explanation or answer from outside knowledge**, but only if it's accurate and easy to understand.
7. Always **end with a follow-up question or suggestion**, like:
   <i>Would you like help with another topic?</i> or 
   <i>Shall I explain something else for you?</i>

Your tone should be:
- Friendly and calm
- Supportive like a real tutor
- Easy to understand (avoid jargon)
- Confident and helpful

---

Here is the question: ${selectedText}

Here is the extracted content from the PDF to use as your main source: ${AllUnformattedAns}

Now, please generate the final response in HTML format following all the instructions above.
`;

    const aiModelResult = await generateAIResponse(PROMPT);
    console.log("aiModelResult =", aiModelResult);
    /// formating the things with ai because we are gtting an array of html parts
    const htmlString = aiModelResult
      .join("") // Join the chunks
      .replace(/```(html)?/g, "") // Remove ```html and ```
      .trim(); // Clean extra spaces
    const allText = editor.getHTML();
    editor.commands.setContent(
      allText +
        `<div style="margin-top:1rem;">
      <h3><strong>Answer:</strong></h3>
      <div style="padding: 0.5rem 1rem; background-color: #f9f9f9; border-radius: 6px;">
        ${htmlString}
      </div>
    </div>`
    );

    // saving the pdf-docs-chat in the database(notes)
    addNotes({
      notes: editor.getHTML(),
      fileId: fileId as string,
      createdBy: user?.primaryEmailAddress?.emailAddress || "",
    });
    setAiAnswerSearching(false);
  };

  return (
    <div className='flex flex-wrap items-center gap-2 p-2 border rounded-md mb-4 bg-white shadow-sm'>
      <button
        onClick={() => editor.chain().focus().toggleBold().run()}
        className={editor.isActive("bold") ? "btn-active" : "btn"}
      >
        <Bold size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        className={editor.isActive("italic") ? "btn-active" : "btn"}
      >
        <Italic size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleUnderline().run()}
        className={editor.isActive("underline") ? "btn-active" : "btn"}
      >
        <Underline size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        className={editor.isActive("strike") ? "btn-active" : "btn"}
      >
        <Strikethrough size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        className={editor.isActive("heading", { level: 1 }) ? "btn-active" : "btn"}
      >
        <Heading1 size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        className={editor.isActive("heading", { level: 2 }) ? "btn-active" : "btn"}
      >
        <Heading2 size={18} />
      </button>
      <button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        className={editor.isActive("blockquote") ? "btn-active" : "btn"}
      >
        <Quote size={18} />
      </button>
      {/* Code Block w/ language */}
      <button
        onClick={() => {
          const lang = prompt("Code language (js, ts, python):") || "js";
          editor.chain().focus().setCodeBlock({ language: lang }).run();
        }}
        className='btn'
      >
        <Code />
      </button>

      <button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        className={editor.isActive("orderedList") ? "btn-active" : "btn"}
      >
        <ListOrdered size={18} />
      </button>
      {/* Highlight */}
      <button onClick={() => editor.chain().focus().toggleHighlight().run()} className='btn'>
        Highlight
      </button>
      {/* Text Color */}
      <input
        type='color'
        onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
        className='w-10 h-10 border'
      />
      {/* Clear Formatting */}
      <button onClick={() => editor.chain().focus().unsetAllMarks().clearNodes().run()} className='btn'>
        Clear
      </button>
      <button
        onClick={() => {
          const url = prompt("Enter image URL");
          if (url) editor.chain().focus().setImage({ src: url }).run();
        }}
        className='btn'
      >
        <ImageIcon size={18} />
      </button>
      <button
        onClick={() => {
          const url = prompt("Enter link URL");
          if (url) editor.chain().focus().setLink({ href: url }).run();
        }}
        className={editor.isActive("link") ? "btn-active" : "btn"}
      >
        <LinkIcon size={18} />
      </button>
      <button onClick={() => editor.chain().focus().setHorizontalRule().run()} className='btn'>
        <Minus size={18} />
      </button>
      <button onClick={() => onAiClick()} className='btn border border-[#F97316]  shadow-inner'>
        {!aiAnswerSearching ? (
          <Sparkle size={18} className='text-[#F97316]' />
        ) : (
          <Loader size={18} className='animate-spin' />
        )}
      </button>
    </div>
  );
};
