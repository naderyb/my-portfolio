"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

const links = ["About", "Skills", "Projects", "Contact"];

export default function Navbar() {
  const [hovered, setHovered] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
      className="fixed top-0 left-0 w-full z-50 bg-black/50 backdrop-blur-md px-8 py-4 flex justify-between items-center shadow-lg"
    >
      {/* Logo */}
      <Link href="/" className="text-2xl font-bold text-red-500 transition-transform transform hover:scale-105">
        Mahmoud Nader YOUB
      </Link>

      {/* Desktop Navbar Links */}
      <ul className="hidden md:flex space-x-6 text-gray-300">
        {links.map((link) => (
          <li key={link}>
            <Link
              href={`#${link.toLowerCase()}`}
              onMouseEnter={() => setHovered(link)}
              onMouseLeave={() => setHovered(null)}
              className={`relative transition-all duration-300 hover:text-white`}
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

      {/* Mobile Hamburger Menu */}
      <div
        className="md:hidden flex flex-col justify-center items-center space-y-1 cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {/* Hamburger Icon */}
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-transform duration-300 ease-in-out ${
            isOpen ? "rotate-45 translate-y-2.5" : ""
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-opacity duration-300 ease-in-out ${
            isOpen ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`w-6 h-0.5 bg-gray-300 transition-transform duration-300 ease-in-out ${
            isOpen ? "-rotate-45 -translate-y-2.5" : ""
          }`}
        />
      </div>

      {/* Mobile Navbar Links */}
      {isOpen && (
        <motion.ul
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 10 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 w-full bg-black/80 backdrop-blur-md text-gray-300 text-center py-4 space-y-6 md:hidden"
        >
          {links.map((link) => (
            <li key={link}>
              <Link
                href={`#${link.toLowerCase()}`}
                onClick={() => setIsOpen(false)}
                className="block py-2 text-xl hover:text-white"
              >
                {link}
              </Link>
            </li>
          ))}
        </motion.ul>
      )}
    </motion.nav>
  );
}
