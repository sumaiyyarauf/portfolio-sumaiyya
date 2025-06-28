import React from 'react';
import { Github, Linkedin, Mail, ArrowUp } from 'lucide-react';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className=" py-12 px-4 md:px-10 bg-black text-white">
      <div className="container-section">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-2">Sumaiyya Abdul Rauf</h3>
            <p className="text-dark-300 max-w-xs">
              Frontend Developer crafting beautiful and functional user interfaces for the web.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#home" className="text-dark-300 hover:text-primary-400 transition-colors">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#about" className="text-dark-300 hover:text-primary-400 transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#qualifications" className="text-dark-300 hover:text-primary-400 transition-colors">
                    Qualifications
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-dark-300 hover:text-primary-400 transition-colors">
                    Projects
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-dark-300 hover:text-primary-400 transition-colors">
                    Contact
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <ul className="space-y-2">
                <li className="flex items-center text-dark-300">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:hello@johndoe.com" className="hover:text-primary-400 transition-colors">
                    sumaiyasheikh088@gmail.com
                  </a>
                </li>
                <li className="flex items-center text-dark-300 mt-4">
                  <span>Warud, Maharashtra, India</span>
                </li>
              </ul>

              <div className="flex space-x-4 mt-6">
                <a
                   href="https://github.com/sumaiyyarauf"
                   target="_blank"
                   rel="noopener noreferrer"
                   aria-label="GitHub"
                   className="text-gray-400 hover:text-white transition">
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
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-dark-700 flex flex-col md:flex-row justify-between items-center">
          <p className="text-dark-400 text-sm">
            © {new Date().getFullYear()} Sumaiyya Abdul Rauf. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="mt-6 md:mt-0 bg-primary-500 hover:bg-primary-600 text-white p-3 rounded-full transition-colors"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
