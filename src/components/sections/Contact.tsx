"use client";

import { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const token = await recaptchaRef.current?.executeAsync();
    recaptchaRef.current?.reset();

    if (!token) {
      toast.error("Veuillez valider le reCAPTCHA.");
      return;
    }

    const formData = new FormData(formRef.current!);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      message: formData.get("message"),
      token,
    };

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      toast.success("Message envoyé !");
      formRef.current?.reset();
    } else {
      toast.error("Erreur lors de l'envoi du message.");
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4 text-white overflow-hidden">
      <Toaster />

      <h2 className="relative z-10 text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-5xl font-extrabold mb-12">
        Contactez moi
      </h2>

      <div
        id="contact-form"
        className="relative z-10 max-w-3xl mx-auto bg-gradient-to-br from-black/50 to-zinc-900/60 border border-red-700 backdrop-blur-md rounded-xl p-10 shadow-[0_0_30px_rgba(255,0,0,0.2)]"
      >
        <form onSubmit={handleSubmit} ref={formRef} className="space-y-8">
          <div className="flex flex-col space-y-2">
            <label htmlFor="name" className="text-red-400 text-sm font-medium">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="w-full px-4 py-3 border border-red-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="email" className="text-red-400 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="w-full px-4 py-3 border border-red-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300"
            />
          </div>

          <div className="flex flex-col space-y-2">
            <label htmlFor="message" className="text-red-400 text-sm font-medium">
              Message
            </label>
            <textarea
              name="message"
              id="message"
              rows={6}
              required
              className="w-full px-4 py-3 border border-red-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-red-600 transition duration-300 resize-none"
            ></textarea>
          </div>

          {/* reCAPTCHA invisible */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcT6B0rAAAAACIAVxIWfPfhf_LMMZdFKaVGYiH7"
            size="invisible"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              className="w-full py-3 px-6 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold text-lg transition duration-300 shadow-md hover:shadow-red-700/70 hover:shadow-[0_0_20px] focus:outline-none"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
