"use client";

import { useState, useTransition } from "react";
import toast from "react-hot-toast";
import { handleToggleFavourite, performLogin } from "../actions";
import useAuth from "../hooks/useAuth";

export default function ActionButton({ recipeId }) {
  const { auth, setAuth } = useAuth();
  const isFavourite = auth?.favourites?.find((id) => id === recipeId);
  const [favourite, setFavourite] = useState(isFavourite);
  const [isPending, startTransition] = useTransition();
  async function handleFavourite(userId, recipeId) {
    if (!auth?.email) {
      toast.error("Please log in to add to favourites!");
    } else {
      await handleToggleFavourite(auth?.id, recipeId);
      setFavourite(!favourite);
      const formData = new FormData();
      formData.append("email", auth?.email);
      formData.append("password", auth?.password);
      const response = await performLogin(formData);
      setAuth(response);
    }
  }
  return (
    <div className="flex justify-end gap-4">
      <button
        onClick={() => {
          startTransition(() => {
            handleFavourite(auth?.id, recipeId);
          });
        }}
        className={`flex border border-gray-300 rounded-md p-1 gap-2 text-gray-600 cursor-pointer hover:text-[#eb4a36] ${
          favourite && "bg-red-500/50"
        }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="icon icon-tabler icons-tabler-outline icon-tabler-heart"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M19.5 12.572l-7.5 7.428l-7.5 -7.428a5 5 0 1 1 7.5 -6.566a5 5 0 1 1 7.5 6.572" />
        </svg>
        <span>Favourite</span>
      </button>

      <div className="flex gap-2 border border-gray-300 rounded-md p-1 text-gray-600 cursor-pointer hover:text-[#0E79F6]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M6 12m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 6m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M18 18m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <path d="M8.7 10.7l6.6 -3.4" />
          <path d="M8.7 13.3l6.6 3.4" />
        </svg>
        <span>Share</span>
      </div>
    </div>
  );
}
