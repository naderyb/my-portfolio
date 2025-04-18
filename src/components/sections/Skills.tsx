"use client";
import { useState } from "react";
import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaVuejs,
  FaNode,
  FaFigma,
  FaGithub,
  FaGit,
  FaPython,
  FaJava,
} from "react-icons/fa";
import { MdFunctions } from "react-icons/md";
import {
  SiTailwindcss,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiNextdotjs,
  SiCanva,
  SiC,
} from "react-icons/si";
import { GiTeamIdea } from "react-icons/gi";
import { BsLightningCharge, BsFillPeopleFill } from "react-icons/bs";
import { MdPsychology } from "react-icons/md";
import { TbBulbFilled } from "react-icons/tb";
import { motion, AnimatePresence } from "framer-motion";

type Group = "frontend" | "backend" | "uiux" | "programming" | "general";

interface Skill {
  name: string;
  icon: React.ReactElement;
}

const skills: Record<Group, Skill[]> = {
  frontend: [
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React", icon: <FaReact /> },
    { name: "Vue.js", icon: <FaVuejs /> },
    { name: "Next.js", icon: <SiNextdotjs /> },
    { name: "Tailwind CSS", icon: <SiTailwindcss /> },
  ],
  backend: [
    { name: "Node.js", icon: <FaNode /> },
    { name: "Express.js", icon: <SiExpress /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "MySQL", icon: <SiMysql /> },
  ],
  programming: [
    { name: "Assembly", icon: <span className="text-sm font-bold">ASM</span> },
    { name: "C", icon: <SiC /> },
    { name: "Python", icon: <FaPython /> },
    { name: "SQL", icon: <span className="text-sm font-bold text-yellow-500">SQL</span> },
    { name: "Java", icon: <FaJava /> },
    { name: "MATLAB", icon: <MdFunctions /> },
  ],
  uiux: [
    { name: "Figma", icon: <FaFigma /> },
    { name: "Canva", icon: <SiCanva /> },
  ],
  general: [
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Git", icon: <FaGit /> },
    { name: "Teamwork", icon: <BsFillPeopleFill /> },
    { name: "Problem Solving", icon: <MdPsychology /> },
    { name: "Critical Thinking", icon: <TbBulbFilled /> },
    { name: "Time Management", icon: <BsLightningCharge /> },
    { name: "Leadership", icon: <GiTeamIdea /> },
  ],
};

export default function Skills() {
  const [selectedGroup, setSelectedGroup] = useState<Group>("frontend");
  const [tappedSkill, setTappedSkill] = useState<string | null>(null);

  const handleTap = (name: string) => {
    setTappedSkill((prev) => (prev === name ? null : name));
  };

  return (
    <section id="skills" className="py-24 text-white">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-5xl font-extrabold mb-12">
        Skills
      </h2>

      {/* Category buttons */}
      <div className="flex justify-center flex-wrap gap-4 mb-10">
        {(
          ["frontend", "backend", "programming", "uiux", "general"] as Group[]
        ).map((group) => (
          <button
            key={group}
            onClick={() => setSelectedGroup(group)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 border border-red-600 ${
              selectedGroup === group
                ? "bg-red-600 text-white"
                : " text-gray-300 hover:bg-red-700 hover:text-white"
            }`}
          >
            {
              {
                frontend: "Frontend Dev",
                backend: "Backend Dev",
                programming: "Programming Languages",
                uiux: "UI/UX",
                general: "General Skills",
              }[group]
            }
          </button>
        ))}
      </div>

      {/* Animated Skills Grid */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedGroup}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
          className="flex flex-wrap justify-center gap-8 px-6 max-w-6xl mx-auto"
        >
          {skills[selectedGroup].map((skill, idx) => (
            <div
              key={skill.name}
              onClick={() => handleTap(skill.name)}
              className="relative group w-24 h-24 rounded-full flex items-center justify-center border border-red-600 bg-black/60 hover:shadow-[0_0_25px_#d90000] transition duration-300 cursor-pointer"
              style={{
                animation: "spin-slow 8s linear infinite",
                animationDelay: `${idx * 0.1}s`,
              }}
            >
              <div className="text-3xl text-red-500 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>
              <div
                className={`absolute bottom-[-1.5rem] text-center text-xs text-gray-300 transition-opacity duration-300 ${
                  tappedSkill === skill.name
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              >
                {skill.name}
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </section>
  );
}
