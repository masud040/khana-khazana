import Image from "next/image";

export default function RecipeCard() {
  return (
    <div className="card">
      <Image
        src="https://source.unsplash.com/-YHSwy6uqvk/300x160"
        className="rounded-md"
        alt=""
        width={400}
        height={400}
      />
      <h4 className="my-2">Chef John's Turkey Sloppy Joes</h4>
      <div className="flex justify-between py-2 text-xs text-gray-500">
        <span>⭐️ 5.0</span>
        <span>By: John Doe</span>
      </div>
    </div>
  );
}
