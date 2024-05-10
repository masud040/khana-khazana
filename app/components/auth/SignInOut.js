"use client";

import useAuth from "@/app/hooks/useAuth";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function SignInOut() {
  const { auth, setAuth } = useAuth();
  const router = useRouter();
  function handleLogout() {
    setAuth(null);
    router.push("/login");
  }
  return auth?.email ? (
    <li
      onClick={handleLogout}
      className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center"
    >
      <button>Logout</button>
    </li>
  ) : (
    <Link href="/login">
      <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
        Login
      </li>
    </Link>
  );
}
