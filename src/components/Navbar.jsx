import React, { useState, useEffect, useContext } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import { ThemeContext } from '../context/ThemeContext';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Qualifications', href: '#qualifications' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const menuVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);
  const { darkMode, toggleDarkMode } = useContext(ThemeContext);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id') || '';
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
          setActiveSection(sectionId);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/90 dark:bg-dark-900/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container-section py-4 md:py-5">
        <div className="flex items-center justify-between">
          <a href="#home" className="text-2xl font-bold text-primary-600 dark:text-primary-400">
            Portfolio
          </a>

          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className={`font-medium transition-colors duration-300 hover:text-primary-500 ${
                  activeSection === link.href.substring(1)
                    ? 'text-primary-500'
                    : 'text-dark-600 dark:text-dark-300'
                }`}
              >
                {link.name}
              </a>
            ))}
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-dark-600" />
              )}
            </button>
          </nav>

          <div className="flex items-center md:hidden">
            <button
              onClick={toggleDarkMode}
              className="p-2 mr-2 rounded-full hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
            >
              {darkMode ? (
                <Sun className="h-5 w-5 text-yellow-400" />
              ) : (
                <Moon className="h-5 w-5 text-dark-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg hover:bg-dark-200 dark:hover:bg-dark-700 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-6 w-6 text-dark-600 dark:text-dark-300" />
              ) : (
                <Menu className="h-6 w-6 text-dark-600 dark:text-dark-300" />
              )}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="md:hidden bg-white dark:bg-dark-800 shadow-lg"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={menuVariants}
          >
            <motion.nav
              className="flex flex-col px-4 py-4 space-y-4"
              variants={menuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              {navLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  onClick={closeMenu}
                  className={`font-medium px-4 py-2 rounded-lg transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'text-primary-500 bg-primary-50 dark:bg-dark-700'
                      : 'text-dark-600 dark:text-dark-300 hover:bg-dark-100 dark:hover:bg-dark-700'
                  }`}
                  variants={linkVariants}
                >
                  {link.name}
                </motion.a>
              ))}
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
