// src/components/sections/Footer.tsx
export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-800 text-gray-400 py-10 px-4 mt-24">
      <div className="max-w-6xl mx-auto text-center space-y-6">
        {/* Brand / Rights */}
        <div className="text-sm">
          &copy; {new Date().getFullYear()}{" "}
          <span className="text-red-600 font-semibold tracking-wide hover:tracking-wider transition-all duration-300">
            Nader Youb
          </span>{" "}
          — All rights reserved.
        </div>

        {/* Links */}
        <div className="flex justify-center gap-8 text-sm">
          <a
            href="https://github.com/naderyoub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 hover:underline transition-all duration-300"
          >
            GitHub
          </a>

          <a
            href="https://linkedin.com/in/naderyoub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 hover:underline transition-all duration-300"
          >
            LinkedIn
          </a>

          <a
            href="#contact"
            className="hover:text-red-500 hover:underline transition-all duration-300"
          >
            Contact
          </a>
        </div>

        {/* Signature */}
        <div className="text-xs text-zinc-600">
          Design and developed with <span className="text-red-600">{"<3"}</span> by Youb Mahmoud Nader
        </div>
      </div>
    </footer>
  );
}
