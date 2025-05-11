// "use client";

// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
// } from "@/components/ui/dialog";

// import {
//   EmailShareButton,
//   FacebookShareButton,
//   TwitterShareButton,
//   WhatsappShareButton,
//   EmailIcon,
//   FacebookIcon,
// //   TwitterIcon,
//   WhatsappIcon,
// } from "react-share";

// interface ShareModalProps {
//   open: boolean;
//   onOpenChange: (open: boolean) => void;
//   url: string;
//   title: string;
// }

// export const ShareModal = ({ open, onOpenChange, url, title }: ShareModalProps) => {
//   return (
//     <Dialog open={open} onOpenChange={onOpenChange}>
//       <DialogContent className="sm:max-w-md">
//         <DialogHeader>
//           <DialogTitle>Share this file</DialogTitle>
//           <DialogDescription>
//             Choose a platform to share:
//           </DialogDescription>
//         </DialogHeader>

//         <div className="flex justify-around mt-4">
//           <WhatsappShareButton url={url} title={title}>
//             <WhatsappIcon size={48} round />
//           </WhatsappShareButton>
//           <EmailShareButton url={url} subject={title} body={`Check out this file: ${url}`}>
//             <EmailIcon size={48} round />
//           </EmailShareButton>
//           <FacebookShareButton url={url} quote={title}>
//             <FacebookIcon size={48} round />
//           </FacebookShareButton>
//           <TwitterShareButton url={url} title={title}>
//             <TwitterIcon size={48} round />
//           </TwitterShareButton>
//         </div>
//       </DialogContent>
//     </Dialog>
//   );
// };
