"use client";

import useAuth from "@/app/hooks/useAuth";

export default function ShowGreetings() {
  const { auth } = useAuth();
  const name = `${auth?.firstName + " " + auth?.lastName}`;
  return (
    auth?.email && <li className="py-2 text-indigo-600">Hello {name} | </li>
  );
}
