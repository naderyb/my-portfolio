"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: "NRIVIZI",
    description: "nrivizi est une plateforme conçue pour simplifier le parcours académique des étudiants en fournissant un accès facile à diverses ressources pour rendre la recherche et l'accès aux matériaux d'étude simples et facile. ",
    image: "/nrivizi.png",
    github: "https://github.com/naderyb/nrivizi",
    live: "https://nrivizi.netlify.app/https://nrivizi.netlify.app/select_language",
  },
  {
    title: "Event-theta",
    description: "Une plateforme de gestion d'events pour le Nexus club, qui permet aux utilisateurs de checker les événements à venir et de s'inscrire facilement, via un formulaire interne, et un system de rappel par email.",
    image: "/events-theta.png",
    github: "https://github.com/naderyb/events_fe/tree/main/public",
    live: "https://events-fe-theta.vercel.app/",
  },
  {
    title: "news-detective",
    description: "Un jeu de trivia basé sur les actualités, où les utilisateurs peuvent tester leurs connaissances sur les événements et gagner des points.",
    image: "/news-detective.png",
    github: "https://github.com/naderyb/game1",
    live: "https://news-detective.vercel.app",
  },
];

export default function Projects() {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 3;

  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = projects.slice(indexOfFirstProject, indexOfLastProject);

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: "power2.out",
      }
    );
  }, [currentPage]);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const totalPages = Math.ceil(projects.length / projectsPerPage);

  return (
    <section id="projects" className="py-24 px-4 text-white">
      <h2 className="text-center text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-900 text-5xl font-extrabold mb-12">
        Projects
      </h2>

      <div className="border-2 border-red-700 rounded-2xl p-6 mx-auto max-w-6xl bg-black/40 backdrop-blur-md shadow-lg">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <div
              key={index}
              className="project-card bg-zinc-900 border border-red-700 rounded-xl p-4 hover:shadow-[0_0_20px_#ff0000] transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative w-full h-40 mb-4 overflow-hidden rounded-md">
                <Image
                  src={project.image}
                  alt={project.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-md transition-all duration-300 transform hover:scale-110"
                />
              </div>
              <h3 className="text-xl font-bold mb-2 text-red-500 hover:text-white transition-colors duration-200">
                {project.title}
              </h3>
              <p className="text-sm text-gray-300 mb-4">{project.description}</p>
              <div className="flex justify-between mt-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-red-700 text-white rounded-md text-sm font-medium hover:bg-red-800 transition duration-300"
                >
                  GitHub
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-transparent border border-red-700 text-red-500 rounded-md text-sm font-medium hover:bg-red-700 hover:text-white transition duration-300"
                >
                  Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-10 items-center space-x-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="bg-red-600 text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-red-700 transition-colors duration-300 disabled:bg-gray-500"
          >
            Previous
          </button>

          <div className="flex space-x-2">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                onClick={() => handlePageChange(index + 1)}
                className={`${
                  currentPage === index + 1
                    ? "bg-red-600 text-white"
                    : "bg-transparent text-red-600 border border-red-600"
                } px-4 py-2 rounded-md font-medium hover:bg-red-600 hover:text-white transition-colors duration-300`}
              >
                {index + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={indexOfLastProject >= projects.length}
            className="bg-red-600 text-white px-6 py-3 rounded-md font-medium text-lg hover:bg-red-700 transition-colors duration-300 disabled:bg-gray-500"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
}
