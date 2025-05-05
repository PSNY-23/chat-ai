import { NextRequest, NextResponse } from "next/server";
import { WebPDFLoader } from "@langchain/community/document_loaders/web/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

// const pdfUrl = "https://www.yesterdaysclassics.com/previews/burt_poems_preview.pdf"; // Replace with a valid PDF URL
export const GET = async (req: NextRequest) => {
  
  const { searchParams } = new URL(req.url);
  const pdfUrl = searchParams.get("pdfUrl");

  

  if (!pdfUrl) {
    return NextResponse.json({ error: "Missing pdfUrl parameter" }, { status: 400 });
  }
  //1. load the pdf file and convert it in text

  const res = await fetch(pdfUrl);
  const blob = await res.blob();
  const loader = new WebPDFLoader(blob);
  const docs = await loader.load(); 
  
  let pdfTextContent = "";
  docs.forEach((docs) => {
    pdfTextContent = pdfTextContent + docs.pageContent;
  });

 

  //2. split the texts into smaller chunks

  const textSplitter = new RecursiveCharacterTextSplitter({
    chunkSize: 100,
    chunkOverlap: 20,
  });
  const texts = await textSplitter.splitText(pdfTextContent);
  

  return NextResponse.json({ docs: texts });
};
