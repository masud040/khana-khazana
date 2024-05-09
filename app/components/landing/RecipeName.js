import Link from "next/link";

export default function RecipeName() {
  return (
    <div className="col-span-12 md:col-span-3">
      <h3 className="text-xl font-bold">Recipes</h3>
      <ul className="pl-2 my-6 space-y-4 text-sm text-gray-500">
        <li>
          <Link href="#">Morning Bliss Café</Link>
        </li>

        <li>
          <Link href="#">Sunrise Bites Kitchen</Link>
        </li>

        <li>
          <Link href="#">Brunch Haven Delights</Link>
        </li>

        <li>
          <Link href="#">Rise & Dine Eatery</Link>
        </li>

        <li>
          <Link href="#">Breakfast Oasis Junction</Link>
        </li>
      </ul>
    </div>
  );
}
