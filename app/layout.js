import { Inter } from "next/font/google";
import connectMongo from "../services/mongo";
import Navbar from "./components/shared/Navbar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Khana Khazana",
  description: "This page is created for sales foods",
};

export default async function RootLayout({ children }) {
  const mongoConnection = await connectMongo();

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
