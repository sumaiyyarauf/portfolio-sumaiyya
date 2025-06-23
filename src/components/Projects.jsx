import React from "react";
import Project1 from "../assets/project1.png"
import Project2 from "../assets/project2.png"
import Project3 from "../assets/project3.png"
import Project4 from "../assets/project4.png"
import Project5 from "../assets/project5.png"
import Project6 from "../assets/project6.png"


const projects = [
  {
    id: 1,
    title: "Business Card Design",
    description: "Clean and minimal business cards with sharp edges.",
    image: Project1,
    link: "https://day1-steel-five.vercel.app/",
  },
  {
    id: 2,
    title: "Box Packaging",
    description: "Elegant packaging for modern product presentation.",
    image: Project2,
    link: "https://portfolio-theta-seven-23.vercel.app/",
  },
  {
    id: 3,
    title: "Sticker Roll",
    description: "High-quality custom printed sticker rolls.",
    image: Project3,
    link: "https://nykaa-clone-inky.vercel.app/",
  },
  {
    id: 4,
    title: "CD Artwork",
    description: "Creative CD packaging and label design.",
    image: Project4,
    link: "https://project-1-three-nu.vercel.app/",
  },
  {
    id: 5,
    title: "Typewriter Sheet",
    description: "Vintage document layouts for creative print.",
    image: Project5,
    link: "https://my-website-ashen-sigma-45.vercel.app/",
  },
  {
    id: 6,
    title: "Luxury Bag",
    description: "Premium shopping bag design for brands.",
    image: Project6,
    link: "https://nilah.vercel.app/",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="bg-black text-white py-12 px-6">
      <h2 className="text-4xl font-bold text-center mb-10">PROJECTS</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative group overflow-hidden rounded-lg shadow-lg"
          >
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            />
            
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-sm mb-4">{project.description}</p>
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-white text-black font-semibold rounded hover:bg-gray-200 transition"
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
