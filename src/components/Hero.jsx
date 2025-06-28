import React, { useContext, useEffect, useRef } from 'react';
import { Github, Linkedin, ChevronDown } from 'lucide-react';
import gsap from 'gsap';
import { ThemeContext } from '../context/ThemeContext'; 

const Hero = () => {
  const tunnelRef = useRef(null);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const boxes = gsap.utils.toArray('.box');

      gsap.fromTo(
        boxes,
        { scale: 0.5, opacity: 0 },
        {
          scale: 1.3,
          opacity: 0.7,
          stagger: {
            each: 0.2,
            repeat: -1,
            yoyo: true,
          },
          duration: 3,
          ease: 'power2.inOut',
        }
      );
    }, tunnelRef);

    return () => ctx.revert(); 
  }, []);

  return (
    <section
      id="home"
      className={`relative min-h-screen ${
        darkMode ? 'bg-black text-white' : 'bg-white text-black'
      } px-4 md:px-10 flex items-center overflow-hidden`}
    >

      <h1 className="absolute text-[18vw] md:text-[14vw] lg:text-[12vw] font-extrabold opacity-10 select-none left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        PORTFOLIO
      </h1>

      <div className="w-full z-10 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-10">
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Sumaiyya Abdul Rauf
            </h1>
            <h2 className="text-2xl md:text-3xl font-medium text-gray-400 mb-6">
              Frontend Developer
            </h2>
            <p className="text-gray-500 dark:text-gray-300 mb-6 max-w-xl mx-auto md:mx-0">
              I create responsive, modern websites that turn ideas into digital reality.
            </p>

           

            <div className="flex flex-wrap justify-center md:justify-start gap-2 mb-3">
              <a
                href="#contact"
                className="bg-black dark:bg-white text-white dark:text-black px-6 py-2 rounded-md font-semibold hover:opacity-80 transition"
              >
                Contact Me
              </a>
              <a
                href="#projects"
                className="border border-current px-6 py-2 rounded-md font-semibold hover:opacity-80 transition"
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
                className="text-gray-500 hover:text-current transition"
              >
                <Github size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/sumaiyya-abdul-rauf/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-gray-500 hover:text-current transition"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://vercel.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Vercel"
                className="text-gray-500 hover:text-current transition"
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
            </div>
          </div>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 transform -translate-x-1/2 text-gray-400 hover:text-current transition-colors animate-bounce"
        aria-label="Scroll down"
      >
        <ChevronDown size={32} />
      </a>

    </section>
  );
};

export default Hero;
