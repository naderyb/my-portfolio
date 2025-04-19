import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function Footer() {
  return (
    <footer className="relative w-full px-4 pb-2 mt-32 overflow-hidden text-gray-400">
      {/* Glowing border */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="w-[90%] h-full rounded-xl border border-red-700 blur-lg opacity-30 shadow-[0_0_60px_30px_rgba(255,0,0,0.2)]"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 py-12 text-center backdrop-blur-md bg-gradient-to-br from-black/80 to-zinc-900/60 rounded-xl border border-red-800 shadow-[0_0_30px_rgba(255,0,0,0.3)] space-y-6 transition-all duration-300 hover:shadow-[0_0_50px_rgba(255,0,0,0.5)]">

        {/* Brand */}
        <p className="text-sm tracking-wide">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-600 font-semibold hover:tracking-wider transition-all duration-300">
            Nader Youb
          </span>{" "}
          — All rights reserved.
        </p>

        {/* Icon Links */}
        <div className="flex justify-center gap-8 text-2xl">
          <a
            href="mailto:youb.nader@gmail.com"
            className="hover:text-red-500 transition duration-300"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href="https://wa.me/213540588987"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
            aria-label="WhatsApp"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com/unnamed0._"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://github.com/naderyb"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/nader-youb-a784bb309/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition duration-300"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* Signature */}
        <div className="text-xs text-zinc-600 tracking-tight">
          Designed & coded with <span className="text-red-600">&lt;3</span> by Youb Mahmoud Nader
        </div>
      </div>
    </footer>
  );
}
