"use client";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center text-center px-6 overflow-hidden"
    >
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="space-y-8 max-w-3xl mx-auto z-10"
      >
        {/* Main Heading */}
        <motion.h1
          className="text-5xl md:text-7xl font-extrabold leading-tight text-white tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Salut, je suis <span className="text-red-500">Youb Nader</span>
        </motion.h1>

        {/* Typewriter Effect */}
        <motion.p
          className="text-lg md:text-2xl text-gray-300 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
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

        {/* Call to Action Button */}
        <motion.div
          className="mt-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
        </motion.div>
      </motion.div>
    </section>
  );
}
