import { getImageBlur } from "@/utils/generateBuffer";
import Image from "next/image";
import Link from "next/link";

export default async function RecipeCard({ recipe }) {
  const { id, name, description, author, thumbnail, rating } = recipe || {};
  const { base64 } = await getImageBlur(thumbnail);

  return (
    <Link href={`/details/${id}`}>
      <div className="card">
        <Image
          src={thumbnail}
          className="rounded-md "
          alt={name}
          width={400}
          height={400}
          placeholder="blur"
          blurDataURL={base64}
        />

        <h4 className="my-2">{name}</h4>
        <div className="flex justify-between py-2 text-xs text-gray-500">
          <span>⭐️ {rating}.0</span>
          <span>By: {author}</span>
        </div>
      </div>
    </Link>
  );
}
