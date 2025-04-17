"use client";
import React from "react";
import Navbar from "@/components/Navbar";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Contact from "@/components/sections/Contact";
import Footer from '@/components/Footer';
import CustomCursor from "@/components/CustomCursor";
import ParticlesBackground from "@/components/ParticlesBackground"; // 👈 add this
import "./globals.css";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-black text-white relative`}>
        {/* 👇 global particles behind everything */}
        <ParticlesBackground />
        

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative z-10"
        >
          <Navbar />
          <CustomCursor />
          {children}
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </motion.div>
      </body>
    </html>
  );
}
