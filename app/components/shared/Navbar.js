import Logo from "@/public/assets/logo.png";
import Image from "next/image";
import Link from "next/link";
import ExtendLink from "../ExtendLink";

export default function Navbar() {
  return (
    <nav>
      <div className="container flex items-center justify-between py-6">
        <Link href="/">
          <Image
            src={Logo}
            alt="Learn with sumit"
            className="object-cover h-[50px]"
          />
        </Link>

        <ul className="flex items-center gap-4 text-sm text-gray-500">
          <li className="py-2 active">
            <ExtendLink href="/">Home</ExtendLink>
          </li>

          <li className="py-2">
            <ExtendLink href="/recipe">Recipe</ExtendLink>
          </li>

          <li className="py-2">
            <ExtendLink href="/about-us">About us</ExtendLink>
          </li>

          <li className="py-2 bg-[#eb4a36] px-6 rounded-md text-white content-center">
            <Link href="/login">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
