import loading from "@/public/assets/colorLoading.png";
import Image from "next/image";
export default function Loading() {
  return (
    <div className="flex items-center justify-center col-span-12 gap-2 md:col-span-9">
      <Image
        src={loading}
        alt="Loading.."
        width={35}
        height={40}
        className="animate-spin"
      />
      <p className="text-sm">Loading Recipes..</p>
    </div>
  );
}
