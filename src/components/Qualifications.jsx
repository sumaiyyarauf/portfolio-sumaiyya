'use client';
import React, { useState } from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

const educationData = [
  {
    title: 'Bachelor of Science (CBZ)',
    place: 'Mahatma Fule Mahavidyalaya, Warud – SGBAU',
    date: '2019 – 2022',
    description: 'Graduated with 71.51% – major subjects: Chemistry, Botany, Zoology.',
  },
  {
    title: 'Full Stack Web Development Program',
    place: 'Parallel EduTech Pvt Ltd',
    date: 'Completed in 2024',
    description: 'Completed intensive frontend and backend training including React, Node, and databases.',
  },
];

const experienceData = [
  {
    title: 'Full Stack Developer Intern (Remote)',
    place: 'Codelinear Soft Solution Ltd, Bangalore',
    date: 'Feb 2025 – Present',
    description:
      'Working on full stack features, integrating backend APIs with frontend React components, and deploying projects.',
  },
  {
    title: 'React Developer Intern (Remote)',
    place: 'Codelinear Soft Solution Ltd, Bangalore',
    date: 'Nov 2024 – Jan 2025',
    description:
      'Developed and maintained responsive UI using React.js and Tailwind CSS. Integrated GSAP and Swiper for smooth animations.',
  },
];

const Qualifications = () => {
  const [activeTab, setActiveTab] = useState('experience');
  const data = activeTab === 'experience' ? experienceData : educationData;

  return (
    <section
      id="qualifications"
      className="py-16 bg-white dark:bg-black relative bg-cover bg-center"
      style={{
        backgroundImage: "url('https://images.pexels.com/photos/29279567/pexels-photo-29279567.jpeg')",
      }}
    >
      <div className="max-w-4xl mx-auto px-4 bg-black/40 backdrop-blur-md rounded-xl p-8">
        <h2 className="text-3xl font-bold text-center text-white mb-12">Resume</h2>

        <div className="flex justify-center mb-10">
          <div className="bg-gray-200 dark:bg-gray-800 p-1 rounded-lg inline-flex">
            <button
              onClick={() => setActiveTab('experience')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === 'experience'
                  ? 'bg-white dark:bg-black text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <Briefcase size={16} />
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={`flex items-center gap-2 px-4 py-2 rounded-md transition-all ${
                activeTab === 'education'
                  ? 'bg-white dark:bg-black text-black dark:text-white font-semibold'
                  : 'text-gray-600 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-700'
              }`}
            >
              <GraduationCap size={16} />
              Education
            </button>
          </div>
        </div>

        <div className="relative border-l border-gray-400 dark:border-gray-600 ml-4">
          {data.map((item, index) => (
            <div key={index} className="mb-12 pl-8 relative">
              <div className="absolute left-[-24px] top-1.5 w-5 h-5 bg-white dark:bg-black rotate-45"></div>

              <span className="text-xs uppercase text-gray-300 dark:text-gray-400">{item.date}</span>
              <h3 className="text-lg font-semibold text-white mt-1">{item.title}</h3>
              <p className="text-sm text-gray-300 font-medium mt-1">{item.place}</p>
              <p className="text-sm text-gray-300 mt-2">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Qualifications;
