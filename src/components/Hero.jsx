import React from 'react';
import { Github, Linkedin,  ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-screen bg-black text-white px-4 md:px-10 flex items-center overflow-hidden"
    >
      <h1 className="absolute text-[18vw] md:text-[14vw] lg:text-[12vw] font-extrabold text-white opacity-10 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        PORTFOLIO
      </h1>

      <div className="w-full z-10">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Sumaiyya Abdul Rauf</h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-400 mb-6 max-w-xl mx-auto md:mx-0">
              I create responsive, modern websites that turn ideas into digital reality.
            </p>
            <div className="flex flex-wrap justify-center md:justify-start gap-4 mb-6">
              <a
                href="#contact"
                className="bg-white text-black px-6 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-white text-white px-6 py-2 rounded-md font-semibold hover:bg-white hover:text-black transition"
              >
                View Projects
              </a>
            </div>
            <div className="flex justify-center md:justify-start items-center space-x-4">
              <a
                href="https://github.com/sumaiyyarauf"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-gray-400 hover:text-white transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumaiyya-abdul-rauf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-400 hover:text-white transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vercel"
                className="text-gray-400 hover:text-white transition"
                >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 256 256"
                fill="currentColor"
                >
                 <path d="M128 32L256 224H0L128 32z" />
                </svg>
               </a>

              {/* <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
                className="text-gray-400 hover:text-white transition"
              >
                <Twitter size={24} />
              </a> */}
            </div>
          </div>

          {/* <div className="w-full md:w-1/2 flex justify-center">
            <div className="relative w-72 h-72 md:w-96 md:h-96">
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-pink-500 to-yellow-400 opacity-20 blur-3xl"></div>
              <img
                src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Sumaiyya Abdul Rauf"
                className="relative z-10 object-cover rounded-full w-full h-full border-4 border-white shadow-xl"
              />
            </div>
          </div> */}
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-white transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>
    </section>
  );
};

export default Hero;
