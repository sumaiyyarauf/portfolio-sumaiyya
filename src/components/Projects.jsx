import React, { useContext } from "react";
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"
import Project5 from "../assets/project5.png"
import Project6 from "../assets/project6.png"

import { ThemeContext } from "../context/ThemeContext";

const projects = [
  {
    id: 1,
    title: "Figma to Code",
    description:
      "Converted Figma design to responsive HTML, CSS, and JavaScript website.",
    image: Project1,
    link: "https://day1-steel-five.vercel.app/",
  },
  {
    id: 2,
    title: "React Portfolio",
    description:
      "Personal portfolio built using React and Tailwind CSS with smooth animations.",
    image: Project2,
    link: "https://portfolio-theta-seven-23.vercel.app/",
  },
  {
    id: 3,
    title: "Nykaa Clone",
    description:
      "E-commerce website inspired by Nykaa, built using React and Tailwind CSS.",
    image: Project3,
    link: "https://nykaa-clone-inky.vercel.app/",
  },
  {
    id: 4,
    title: "Gym Website",
    description: "Static gym website created using HTML, CSS, and JavaScript.",
    image: Project4,
    link: "https://project-1-three-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Food Delivery Website",
    description: "Restaurant and food delivery website with modern layout and UI.",
    image: Project5,
    link: "https://my-website-ashen-sigma-45.vercel.app/",
  },
  {
    id: 6,
    title: "Figma to React Website",
    description:
      "Converted Figma design into a fully responsive React.js website.",
    image: Project6,
    link: "https://nilah.vercel.app/",
  },
];

const Projects = () => {
  const { darkMode } = useContext(ThemeContext);

  return (
    <section
      id="projects"
      className={`py-12 px-6 ${
        darkMode ? "bg-black text-white" : "bg-white text-black"
      }`}
    >
      <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className={`relative group overflow-hidden rounded-lg shadow-lg ${
              darkMode ? "bg-gray-900" : "bg-gray-100"
            }`}
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-52 object-cover transition-transform duration-500 group-hover:scale-105"
            />

            <div
              className={`absolute inset-0 flex flex-col items-center justify-center text-center px-4 transition-opacity duration-300 opacity-0 group-hover:opacity-90 ${
                darkMode
                  ? "bg-black bg-opacity-70 text-white"
                  : "bg-white bg-opacity-80 text-black"
              }`}
            >
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`px-4 py-2 rounded font-semibold transition ${
                  darkMode
                    ? "bg-white text-black hover:bg-gray-200"
                    : "bg-black text-white hover:bg-gray-800"
                }`}
              >
                View Project
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
