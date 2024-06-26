import Link from "next/link";
import LoginForm from "../components/auth/LoginForm";
export const metadata = {
  title: "Khana Khazana - Login",
  description:
    "Indulge in Culinary Delights at Khana Khazana - Your Ultimate Destination for Exquisite Home-Cooked Meals! Explore our extensive menu crafted with love and expertise. Order now to experience the perfect blend of flavor, freshness, and convenience. Welcome to a world of deliciousness!",
};
export default function LoginPage() {
  return (
    <main className="">
      <section className="grid h-screen place-items-center">
        <div className="max-w-[450px] w-full mx-auto p-6 border border-gray-700/20 rounded-md">
          <h4 className="text-2xl font-bold">Sign in</h4>
          <LoginForm />

          <p className="text-xs text-center text-gray-600">Or</p>

          <Link
            href="/register"
            className="block mx-auto mt-4 text-sm text-center text-gray-600 underline"
          >
            Create New Account
          </Link>
        </div>
      </section>
    </main>
  );
}
