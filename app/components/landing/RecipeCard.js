import Image from "next/image";
import Link from "next/link";

export default function RecipeCard({ recipe }) {
  const { id, name, description, author, thumbnail, rating } = recipe || {};

  return (
    <Link href={`/details/${id}`}>
      <div className="card">
        <Image
          src={thumbnail}
          className="rounded-md"
          alt=""
          width={400}
          height={400}
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
