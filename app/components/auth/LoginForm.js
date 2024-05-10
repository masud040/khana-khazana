"use client";

import { performLogin } from "@/app/actions";
import loading from "@/public/assets/loading.svg";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";
import toast from "react-hot-toast";
export default function LoginForm() {
  const [error, setError] = useState("");
  const [pending, setPending] = useState();
  const router = useRouter();
  async function handleLogin(event) {
    event.preventDefault();
    setPending(true);
    const toastId = toast.loading("Login in progress..");
    const formData = new FormData(event.currentTarget);
    const response = await performLogin(formData);
    if (response?.email) {
      setPending(false);
      toast.success("Login successful!", {
        id: toastId,
      });
      router.push("/");
    } else {
      setPending(false);
      setError("Please provide a valid credentials!");
      toast.success("Login failed!", {
        id: toastId,
      });
    }
  }
  return (
    <form className="login-form" onSubmit={handleLogin}>
      {error && (
        <div className="text-[#eb4a36] rounded-md  content-center">{error}</div>
      )}
      <div>
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" id="email" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input type="password" name="password" id="password" />
      </div>

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
          "Login"
        )}
      </button>
    </form>
  );
}
