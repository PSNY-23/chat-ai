"use client";

import { TextEditor } from "../../_components/textEditor";

interface EditorPageProps {
  fileId: string;
  
}

const EditorPage = ({ fileId }:EditorPageProps) => {
  return <TextEditor fileId={fileId}  />;
};

export default EditorPage;
