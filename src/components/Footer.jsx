// components/Footer.tsx
import { Facebook, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-950 text-white py-12 px-6 md:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Column 1 */}
        <div>
          <h3 className="text-xl font-bold mb-2">FBL</h3>
          <p className="text-sm text-zinc-300">
            Faculty of Business and Law at the University of Elbasan. Building futures through education and research.
          </p>
        </div>

        {/* Column 2 – Quick Links */}
        <div>
          <h4 className="text-md font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm text-zinc-300">
            <li><Link href="/about">About</Link></li>
            <li><Link href="/programs">Programs</Link></li>
            <li><Link href="/departments">Departments</Link></li>
            <li><Link href="/events">Events</Link></li>
          </ul>
        </div>

        {/* Column 3 – Contact */}
        <div>
          <h4 className="text-md font-semibold mb-2">Contact</h4>
          <p className="text-sm text-zinc-300">📧 info@fbl.edu.al</p>
          <p className="text-sm text-zinc-300">📞 +355 67 123 456</p>
        </div>

        {/* Column 4 – Social */}
        <div>
          <h4 className="text-md font-semibold mb-2">Follow Us</h4>
          <div className="flex gap-4">
            <a href="#" aria-label="Facebook">
              <Facebook className="w-5 h-5 text-zinc-300 hover:text-white transition" />
            </a>
            <a href="#" aria-label="Instagram">
              <Instagram className="w-5 h-5 text-zinc-300 hover:text-white transition" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <Linkedin className="w-5 h-5 text-zinc-300 hover:text-white transition" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-10 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Faculty of Business and Law. All rights reserved.
      </div>
    </footer>
  );
}
