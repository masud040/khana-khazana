"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function ExtendLink({ href, children }) {
  const pathname = usePathname();

  return (
    <Link
      href={href}
      className={`${pathname === href && "font-medium text-[#eb4a36]"}`}
    >
      {children}
    </Link>
  );
}
