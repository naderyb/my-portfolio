"use client";

import { useRef, useEffect } from "react";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    gsap.from("#contact-form", {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power3.out",
      scrollTrigger: {
        trigger: "#contact-form",
        start: "top 80%",
      },
    });
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent!");
    formRef.current?.reset();
  };

  return (
    <section id="contact" className="relative py-24 px-4 text-white overflow-hidden">
      <Toaster />

      {/* Foreground */}
      <h2 className="relative z-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-5xl font-extrabold mb-12">
        Contact Me
      </h2>

      <div
        id="contact-form"
        className="relative z-10 max-w-3xl mx-auto bg-black/40 border border-red-700 backdrop-blur-md rounded-xl p-8 shadow-lg"
      >
        <form onSubmit={handleSubmit} ref={formRef} className="space-y-10 relative">
          <div className="relative">
            <input
              type="text"
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-zinc-900 border border-red-700 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <label className="absolute left-3 top-2 text-sm text-red-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
              Name
            </label>
          </div>

          <div className="relative">
            <input
              type="email"
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-zinc-900 border border-red-700 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
            />
            <label className="absolute left-3 top-2 text-sm text-red-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
              Email
            </label>
          </div>

          <div className="relative">
            <textarea
              rows={6}
              placeholder=" "
              required
              className="peer w-full px-4 py-3 bg-zinc-900 border border-red-700 rounded-md text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-red-600"
            ></textarea>
            <label className="absolute left-3 top-2 text-sm text-red-400 transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-500 peer-focus:top-2 peer-focus:text-sm peer-focus:text-red-500">
              Message
            </label>
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-md font-bold transition-colors duration-300"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
