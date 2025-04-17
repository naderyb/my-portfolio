"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {

  return (
    <section
      id="about"
      className="relative min-h-screen px-6 py-20 text-white flex items-center justify-center overflow-hidden"
    >

      {/* Content */}
      <motion.div
        className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-12 z-10"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          <div className="rounded-full">
            <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-red-500 shadow-lg shadow-red-500/30 transition duration-500">
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

        <motion.div className="flex-1 text-center md:text-left space-y-6">
          <h2 className="glitch cursor-pointer" data-text="À propos de moi">
            À propos de moi
          </h2>
          <p className="text-gray-300 text-lg leading-relaxed">
            Je suis un développeur passionné basé en Algérie 🇩🇿, avec un amour
            profond pour le
            <span className="text-red-500 font-semibold"> web design</span>, les{" "}
            <span className="text-red-500 font-semibold">
              interfaces dynamiques
            </span>{" "}
            et les expériences{" "}
            <span className="text-red-500 font-semibold">immersives</span>.
          </p>
          <p className="text-gray-400 text-md leading-relaxed">
            Toujours curieux, je me forme en continu en
            <span className="text-red-400 font-medium"> design interactif</span>
            ,<span className="text-red-400 font-medium"> animation web</span> et
            <span className="text-red-400 font-medium"> cybersécurité</span>.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
}
