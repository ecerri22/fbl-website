import "./globals.css";
import { ReactNode } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header className="sticky top-0 z-50 bg-white shadow-sm border-b">
          <nav className="flex justify-between items-center px-6 py-4 max-w-7xl mx-auto">
            <h1 className="text-xl font-bold text-blue-950">FBL</h1>
            <Navbar />
          </nav>
        </header>

        <main>{children}</main>

        <Footer/>
      </body>
    </html>
  );
}
