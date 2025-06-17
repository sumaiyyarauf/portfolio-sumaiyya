import React from "react";

const projects = [
  {
    id: 1,
    title: "Business Card Design",
    description: "Clean and minimal business cards with sharp edges.",
    image: "https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg",
    link: "https://example.com/project1",
  },
  {
    id: 2,
    title: "Box Packaging",
    description: "Elegant packaging for modern product presentation.",
    image: "https://images.pexels.com/photos/6632630/pexels-photo-6632630.jpeg",
    link: "https://example.com/project2",
  },
  {
    id: 3,
    title: "Sticker Roll",
    description: "High-quality custom printed sticker rolls.",
    image: "https://images.pexels.com/photos/7437491/pexels-photo-7437491.jpeg",
    link: "https://example.com/project3",
  },
  {
    id: 4,
    title: "CD Artwork",
    description: "Creative CD packaging and label design.",
    image: "https://images.pexels.com/photos/4872033/pexels-photo-4872033.jpeg",
    link: "https://example.com/project4",
  },
  {
    id: 5,
    title: "Typewriter Sheet",
    description: "Vintage document layouts for creative print.",
    image: "https://images.pexels.com/photos/8133807/pexels-photo-8133807.jpeg",
    link: "https://example.com/project5",
  },
  {
    id: 6,
    title: "Luxury Bag",
    description: "Premium shopping bag design for brands.",
    image: "https://images.pexels.com/photos/7437491/pexels-photo-7437491.jpeg",
    link: "https://example.com/project6",
  },
];

const Projects = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
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
            {/* Hover Overlay */}
            <div className="absolute inset-0 bg-black bg-opacity-70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center px-4">
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
