import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Qualifications from './components/Qualifications';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
// import Tunnel from './components/Tunnel';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-dark-900 transition-colors duration-300">
        <Navbar />
        <main>
          <Hero />
          {/* <Tunnel/> */}
          <About />
          <Qualifications />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;