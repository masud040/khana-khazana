"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function NotFound() {
  const pathname = usePathname();

  return (
    <div className="flex flex-col items-center justify-center w-full h-[500px] space-y-2">
      <h2 className="text-2xl font-bold">Not Found</h2>
      <p>
        Your Request path{" "}
        <span className="font-bold text-indigo-600"> {pathname}</span> is not
        found !!
      </p>
      <Link href="/" className="p-3 text-white bg-indigo-500 rounded-md">
        Return Home
      </Link>
    </div>
  );
}
