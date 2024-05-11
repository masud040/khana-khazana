import linkSvg from "@/public/assets/link.svg";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookShareButton,
  PinterestIcon,
  PinterestShareButton,
} from "next-share";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function SocialShareModal({ recipeName }) {
  const pathname = usePathname();
  const [copySuccess, setCopySuccess] = useState(false);
  const baseURL =
    typeof window !== "undefined" && window.location.origin
      ? window.location.origin
      : "";
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(`${baseURL}${pathname}`);
      setCopySuccess(true);
    } catch (error) {
      console.log("Failed to copy:", error);
    } finally {
      setTimeout(() => {
        setCopySuccess(false);
      }, 3000);
    }
  };
  return (
    <div className="absolute space-y-1 py-2 pt-0 h-52 bg-gray-100 rounded-md right-2 modal -top-[178px] text-balance backdrop-blur-3xl ">
      <div className="flex items-center justify-start px-2 py-1 rounded-t-md hover:bg-gray-200">
        <FacebookShareButton
          url={`${baseURL}${pathname}`}
          quote={recipeName}
          blankTarget={true}
        >
          <div className="flex items-center gap-1 text-sm">
            <FacebookIcon size={25} round />
            <p>Facebook</p>
          </div>
        </FacebookShareButton>
      </div>
      <div className="flex items-center justify-start px-2 py-1 hover:bg-gray-200">
        <EmailShareButton url={`${baseURL}${pathname}`} quote={recipeName}>
          <div className="flex items-center gap-1 text-sm">
            <EmailIcon size={25} round />
            <p>Email</p>
          </div>
        </EmailShareButton>
      </div>
      <div className="flex items-center justify-start px-2 py-1 pb-2 border-b border-gray-400 hover:bg-gray-200">
        <PinterestShareButton
          url={`${baseURL}${pathname}`}
          quote={recipeName}
          blankTarget={true}
        >
          <div className="flex items-center gap-1 text-sm ">
            <PinterestIcon size={25} round />
            <p>Pinterest</p>
          </div>
        </PinterestShareButton>
      </div>
      <div className="flex items-center justify-start px-2 py-1 hover:bg-gray-200">
        <button
          onClick={copyToClipboard}
          className="flex items-center gap-1 text-sm"
        >
          <Image src={linkSvg} alt="copy" className="" />
          <p>{copySuccess ? "Copied" : "Copy link"}</p>
        </button>
      </div>
    </div>
  );
}
