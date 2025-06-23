"use client";

import { useRef, useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import toast, { Toaster } from "react-hot-toast";
import ReCAPTCHA from "react-google-recaptcha";

gsap.registerPlugin(ScrollTrigger);

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const [loading, setLoading] = useState(false);

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
    setLoading(true);

    try {
      const token = recaptchaRef.current?.getValue();
      recaptchaRef.current?.reset();

      if (!token) {
        toast.error("Veuillez valider le reCAPTCHA.");
        setLoading(false);
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
        toast.success("✅ Message envoyé !");
        formRef.current?.reset();
      } else {
        const errorText = await response.text();
        console.error("Erreur API :", response.status, errorText);
        toast.error("❌ Erreur lors de l'envoi du message.");
      }
    } catch (error) {
      console.error("Erreur inattendue :", error);
      toast.error("❌ Erreur inattendue lors de l'envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="relative py-24 px-4 text-white overflow-hidden"
    >
      <Toaster />

      {/* Overlay loading */}
      {loading && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-70 flex flex-col items-center justify-center">
          <svg
            className="animate-spin h-12 w-12 text-red-500 mb-4"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8v8z"
            />
          </svg>
          <p className="text-white text-lg font-semibold">Envoi en cours...</p>
        </div>
      )}

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

          {/* reCAPTCHA */}
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey="6LcT6B0rAAAAACIAVxIWfPfhf_LMMZdFKaVGYiH7"
            size="normal"
          />

          <div className="text-center pt-4">
            <button
              type="submit"
              disabled={loading}
              className={`w-full py-3 px-6 flex justify-center items-center gap-2 bg-red-600 hover:bg-red-700 rounded-md text-white font-semibold text-lg transition duration-300 shadow-md hover:shadow-red-700/70 hover:shadow-[0_0_20px] focus:outline-none ${
                loading ? "cursor-not-allowed opacity-80" : ""
              }`}
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
