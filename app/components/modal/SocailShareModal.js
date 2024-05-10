import { FacebookIcon, FacebookShareButton } from "next-share";
export default function SocialShareModal() {
  return (
    <div className="absolute  right-2 w-32 h-40 bg-gray-200 backdrop-blur-3xl rounded-md rounded-br-none rounded-bl-3xl  -top-[170px] text-balance">
      <FacebookShareButton
        url={"https://github.com/next-share"}
        quote={"next-share is a social share buttons for your next React apps."}
        hashtag={"#nextshare"}
      >
        <FacebookIcon size={32} round />
      </FacebookShareButton>
    </div>
  );
}
