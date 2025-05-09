"use client";

import React, { useEffect } from "react";
import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Placeholder from "@tiptap/extension-placeholder";

import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Image from "@tiptap/extension-image";

import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Highlight from "@tiptap/extension-highlight";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { common, createLowlight } from "lowlight";
const lowlight = createLowlight(common);

// languages for code block highlighting
import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";

// register them
lowlight.register("js", javascript);
lowlight.register("ts", typescript);
lowlight.register("python", python);

import { EditorExtension } from "../_components/EditorExtension";
import { useQuery } from "convex/react";
import { api } from "@/convex/_generated/api";

export const TextEditor = ({ fileId }: { fileId: string }) => {
  const editor = useEditor({
    extensions: [
      StarterKit.configure({
        codeBlock: false,
      }),
      Placeholder.configure({
        placeholder: "Start taking your notes here...",
      }),
      Underline,
      Link.configure({
        openOnClick: true,
      }),
      Image.configure({
        inline: false,
        allowBase64: true,
      }),
      TextStyle,
      Color,
      Highlight,
      CodeBlockLowlight.configure({
        lowlight,
      }),
    ],
    // content: "",
    editorProps: {
      attributes: {
        class: "focus:outline-none min-h-[90vh] p-5 prose prose-sm sm:prose lg:prose-lg xl:prose-xl",
      },
    },
  });


  // get the previous notes from the db
  const allNotes = useQuery(api.notes.getAllNotes, {
    fileId: fileId,
  });


  useEffect(() => {
    editor?.commands.setContent(allNotes);
  }, [allNotes]);

  return (
    <div className="px-2 flex flex-col h-full">
      <div className=" mt-1">
        {editor && <EditorExtension editor={editor} />}
      </div>
      <div className="bg-slate-100 border-2 rounded-md flex-1 overflow-y-auto scrollbar-none max-h-[500px]">
        <EditorContent editor={editor} />
      </div>
    </div>
  );
};
