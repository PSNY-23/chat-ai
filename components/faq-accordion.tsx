"use client"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FaqAccordion() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>What types of PDFs can I upload?</AccordionTrigger>
        <AccordionContent>
          You can upload any text-based PDF document. This includes research papers, books, legal documents, reports,
          and more. Currently, we don't support scanned PDFs without OCR text. For best results, use PDFs with
          selectable text.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-2">
        <AccordionTrigger>How accurate are the AI responses?</AccordionTrigger>
        <AccordionContent>
          Our AI provides highly accurate responses based on the content of your PDFs. We use advanced language models
          and vector embeddings to ensure relevance and accuracy. However, as with any AI system, it's always good
          practice to verify important information directly in the source document.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-3">
        <AccordionTrigger>Is my data secure?</AccordionTrigger>
        <AccordionContent>
          Yes, we take security seriously. Your PDFs are encrypted both in transit and at rest. We don't share your
          documents with third parties, and you can delete your data at any time. Our system complies with
          industry-standard security practices to ensure your information remains private.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-4">
        <AccordionTrigger>Can I upgrade or downgrade my plan?</AccordionTrigger>
        <AccordionContent>
          Yes, you can upgrade or downgrade your plan at any time. When upgrading, you'll get immediate access to the
          new features. When downgrading, the changes will take effect at the end of your current billing cycle. Your
          account dashboard provides easy options to manage your subscription.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-5">
        <AccordionTrigger>Do you offer refunds?</AccordionTrigger>
        <AccordionContent>
          We offer a 7-day money-back guarantee for all paid plans. If you're not satisfied with our service, contact
          our support team within 7 days of your purchase for a full refund. After this period, refunds are considered
          on a case-by-case basis.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-6">
        <AccordionTrigger>Can I use this for commercial purposes?</AccordionTrigger>
        <AccordionContent>
          Yes, all our plans support commercial use. The Enterprise plan is specifically designed for businesses with
          advanced needs and higher usage requirements. If you have specific commercial requirements, our sales team can
          help create a custom solution for your organization.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-7">
        <AccordionTrigger>How does the PDF processing work?</AccordionTrigger>
        <AccordionContent>
          When you upload a PDF, our system extracts the text, breaks it into smaller chunks, and creates vector
          embeddings that represent the semantic meaning of the content. When you ask a question, we use these
          embeddings to find the most relevant parts of the document and generate an accurate response using advanced AI
          models.
        </AccordionContent>
      </AccordionItem>

      <AccordionItem value="item-8">
        <AccordionTrigger>Can I share my PDFs and chats with team members?</AccordionTrigger>
        <AccordionContent>
          Yes, our Pro and Enterprise plans include collaboration features that allow you to share PDFs and chat
          sessions with team members. You can control access permissions and export conversations for sharing with
          others who may not have access to the platform.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  )
}
