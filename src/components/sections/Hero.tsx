"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden animated-grid"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-6"
      >
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold leading-tight tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Salut, je suis <span className="text-red-500">Youb Nader</span>
        </motion.h1>

        <motion.p className="text-lg md:text-2xl text-gray-400 max-w-2xl mx-auto">
          <Typewriter
            words={[
              "Développeur passionné.",
              "Créatif du web.",
              "Technophile en mission.",
            ]}
            loop={true}
            cursor
            cursorStyle="_"
            typeSpeed={50}
            deleteSpeed={30}
            delaySpeed={1500}
          />
        </motion.p>

        <motion.div
          className="mt-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <a
            href="#about"
            className="inline-block px-6 py-3 text-sm md:text-base bg-red-500 text-white font-semibold rounded-full hover:scale-105 hover:shadow-red-500/40 hover:shadow-lg transition duration-300 relative z-10"
          >
            Voir mes projets
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
