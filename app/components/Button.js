"use client";
import loading from "@/public/assets/loading.svg";
import Image from "next/image";
import { useFormStatus } from "react-dom";
export default function Buttton({ btnName }) {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className="bg-[#eb4a36] py-3 rounded-md text-white w-full mt-4 disabled:cursor-not-allowed"
      disabled={pending}
    >
      {pending ? (
        <span className="flex items-center justify-center">
          <Image className="animate-spin" src={loading} alt="Loading.." />
        </span>
      ) : (
        btnName
      )}
    </button>
  );
}
