import React from 'react';
import {
  Code,
  Layout,
  Globe,
  Database,
  Server,
  Palette,
} from 'lucide-react';

const skills = [
  { name: 'HTML/CSS', icon: <Layout size={20} />, level: 90 },
  { name: 'JavaScript', icon: <Code size={20} />, level: 85 },
  { name: 'React', icon: <Globe size={20} />, level: 80 },
  { name: 'Node.js', icon: <Server size={20} />, level: 75 },
  { name: 'UI/UX Design', icon: <Palette size={20} />, level: 70 },
  { name: 'Databases', icon: <Database size={20} />, level: 65 },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative bg-black text-white py-24 px-6 md:px-20 overflow-hidden"
    >

      <div className="flex justify-center mb-10">
        <div className="w-full md:w-2/3 h-56 overflow-hidden rounded-lg">
          <img
            src="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg"
            alt="about-banner"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-5xl font-extrabold text-[#F4EBD0] mb-6 tracking-tight">
          INTRODUCTION
        </h2>
       <p className="text-gray-300 mb-12 leading-relaxed">
          I'm a passionate Frontend Developer with a strong focus on building responsive and user-friendly interfaces using React.js and modern web technologies.
          <br />
          <br />
            After completing my graduation, I pursued a Web Development course where I gained hands-on experience in frontend technologies. I then completed an internship as a React Developer, which helped me sharpen my skills in building dynamic and scalable web applications.
          <br />
          <br />
            Currently, I'm exploring full-stack development and interning as a Full Stack Developer at Code Linear. This journey has broadened my understanding of backend technologies and how they integrate with frontend systems.
          <br />
          <br />
            Outside of development, I enjoy exploring new tools, learning emerging technologies, and maintaining a balanced lifestyle through outdoor activities.
        </p>


        <a
          href="#contact"
          className="inline-block bg-white text-black px-8 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Contact Me
        </a>
      </div>

      <div className="mt-24 max-w-4xl mx-auto">
        <h3 className="text-3xl font-semibold text-white mb-10 text-center">
          My Skills
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md transition hover:shadow-lg"
            >
              <div className="flex items-center space-x-3 mb-2 text-white">
                {skill.icon}
                <span className="font-medium">{skill.name}</span>
              </div>
              <div className="w-full bg-gray-700 rounded-full h-2.5">
                <div
                  className="bg-[#F4EBD0] h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default About;
