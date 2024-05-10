import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import connectMongo from "../services/mongo";
import Navbar from "./components/shared/Navbar";
import "./globals.css";
import AuthProvider from "./providers/AuthProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana - Home",
  description:
    "Indulge in Culinary Delights at Khana Khazana - Your Ultimate Destination for Exquisite Home-Cooked Meals! Explore our extensive menu crafted with love and expertise. Order now to experience the perfect blend of flavor, freshness, and convenience. Welcome to a world of deliciousness!",
};

export default async function RootLayout({ children }) {
  const mongoConnection = await connectMongo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
          <Navbar />
          <Toaster />
          {children}
        </AuthProvider>
      </body>
    </html>
  );
}
