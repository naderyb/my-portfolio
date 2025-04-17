"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/80 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-lg"
    >
      <Link href="/" className="text-2xl font-bold text-red-500">
        Youb.dev
      </Link>
      <ul className="flex space-x-6 text-gray-300">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className={`relative transition-all duration-300 ${
                hovered === link ? "text-white" : ""
              }`}
            >
              {link}
              {hovered === link && (
                <motion.span
                  layoutId="underline"
                  className="absolute left-0 -bottom-1 h-[2px] w-full bg-red-500"
                />
              )}
            </Link>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}
