"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef } from "react";

export default function About() {
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      const x = (clientX / window.innerWidth - 0.5) * 70; // Increased effect range
      const y = (clientY / window.innerHeight - 0.5) * 70; // Increased effect range

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${x}px, ${y}px)`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-24 text-white flex flex-col items-center justify-center overflow-hidden"
    >
      {/* TOP TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center space-y-8 z-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-red-500 tracking-tight">
          À propos de moi
        </h2>

        <p className="text-lg md:text-xl text-gray-300 leading-relaxed">
          Je m&apos;appelle{" "}
          <span className="text-red-500 font-semibold">Mahmoud Nader Youb</span>
          , passionné par la
          <span className="text-red-500 font-semibold">cybersécurité</span>. Mon
          domaine d&apos;expertise se situe à l&apos;intersection de la
          cybersécurité et de la technologie. Curieux de nature, je cherche
          toujours des réponse a des &apos;pourquoi&apos; récurants.
        </p>
      </motion.div>

      {/* IMAGE BETWEEN TEXT */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        viewport={{ once: true }}
        className="mt-12 mb-12 flex justify-center"
      >
        <div
          ref={imageRef}
          className="transition-transform duration-200 ease-out will-change-transform"
        >
          <div className="w-64 h-64 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-red-500 shadow-xl shadow-red-500/30">
            <Image
              src="/me.jpg"
              alt="Youb Nader"
              width={300}
              height={300}
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </motion.div>

      {/* BOTTOM TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center mt-12 space-y-6 text-gray-400 text-md leading-relaxed"
      >
        <p>Mon objectif est de devenir un expert en cybersécurité.</p>
        <p>
          Si vous recherchez un passionné de cybersécurité prêt à relever les
          défis complexes, vous êtes au bon endroit. Ce domaine exigeant rend
          chaque réussite encore plus gratifiante.
        </p>
      </motion.div>
    </section>
  );
}
