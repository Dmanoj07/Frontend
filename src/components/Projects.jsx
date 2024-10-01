// import React from 'react';

// const ProjectCard = ({ title, description, technologies, link }) => (
//   <div className="bg-white bg-opacity-90 border-2 border-[#064e3b] p-6 rounded-lg shadow-md transition-transform transform hover:scale-105 hover:bg-opacity-100 hover:shadow-xl">
//     <h3 className="text-2xl font-bold mb-2">{title}</h3>
//     <p className="mb-4">{description}</p>
//     <p className="mb-2"><strong>Technologies:</strong> {technologies.join(', ')}</p>
//     <a href={link} target="_blank" rel="noopener noreferrer" className="text-[#064e3b] hover:underline">
//       View Project
//     </a>
//   </div>
// );

// const Projects = () => {
//   const projects = [
//     {
//       title: "Study Home",
//       description: "The project focuses on creating app that Provide a centralized system for class schedules, assignments, " +
//                    "and notes which enhance organizational efficiency for " +
//                    "both online and offline learning.",
//       technologies: ["React", "Next.js", "Tailwind", "express.js", "Postgres", "OpenAI API", "Google Auth"],
//       link: "https://prj-frontend.vercel.app/"
//     },
//     {
//       title: "Fragment Service",
//       description: "The project involves creating a highly scalable cloudbased microservice to manage and convert small" +
//                     "fragments of text and images, ensuring seamless"+ 
//                     "integration with existing manufacturing systems and"+ 
//                     "deployment to AWS",
//       technologies: ["AWS", "Docker","JavaScript", "Express.js"],
//       link: "https://github.com/Dmanoj07/Fragments"
//     },
//     {
//       title: "Weather API",
//       description: "Designed and developed websites displaying live weather"+ 
//                     "conditions by researching and integrating REST APIs",
//       technologies: ["Javascript","HTML","CSS"],
//       link: "https://dmanoj07.github.io/Weather_API/"
//     },
//     {
//       title: "BreakFast Resturant",
//       description: "Designed and developed websites displaying live weather"+ 
//                     "conditions by researching and integrating REST APIs",
//       technologies: ["JavaScript", "Express.js", "Handlebars", "MongoDB"],
//       link: "https://github.com/Dmanoj07/BreakFast-Restaurant"
//     },
//     {
//       title: "Museum of Art Work",
//       description: "This project is a web application for exploring artwork from the Metropolitan Museum of Art. It features user authentication, allowing registered users to search for artworks, save favorites, and maintain a search history.",
//       technologies: ["React", "Next.js", "MongoDB", "Jotai", "Express"],
//       link: "https://github.com/Dmanoj07/Museum-of-Art-Work"
//     },

//   ];

//   return (
//     <section id="projects" className="min-h-screen flex items-center justify-center bg-gray-0">
//       <div className="container mx-auto font-mono">
//         <h2 className="text-4xl font-bold mb-8 text-center">Projects</h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {projects.map((project, index) => (
//             <ProjectCard key={index} {...project} />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import React from 'react';

const ProjectCard = ({ title, description, technologies, link }) => (
  <div className="bg-gray-800 rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:scale-105 flex flex-col h-full">
    <div className="p-6 flex-grow">
      <h3 className="text-xl font-bold mb-2 text-white">{title}</h3>
      <p className="text-gray-300 text-sm mb-4">{description}</p>
    </div>
    <div className="px-6 pb-4">
      <div className="flex flex-wrap gap-2 mb-4">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-gray-700 text-gray-300 text-xs px-2 py-1 rounded">
            {tech}
          </span>
        ))}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="inline-block bg-[#064e3b] text-white py-2 px-4 rounded hover:bg-[#043d2d] transition-colors duration-300 text-sm"
      >
        View Project
      </a>
    </div>
  </div>
);

const Projects = () => {
  const projects = [
    {
            title: "Study Home",
            description: "A centralized app for managing class schedules, assignments, and notes, improving organizational efficiency for both online and offline learning environments.",
            technologies: ["React", "Next.js", "Tailwind", "express.js", "Postgres", "OpenAI API", "Google Auth"],
            link: "https://prj-frontend.vercel.app/"
          },
          {
            title: "Fragment Service",
            description: "A scalable cloud-based microservice for managing and converting text and image fragments, seamlessly integrating with existing manufacturing systems and deploying to AWS",
            technologies: ["AWS", "Docker","JavaScript", "Express.js"],
            link: "https://github.com/Dmanoj07/Fragments"
          },
          {
            title: "Weather API",
            description: "A website displaying live weather conditions by integrating REST APIs, offering real-time weather updates",
            technologies: ["Javascript","HTML5","CSS3","RESTful APIs"],
            link: "https://dmanoj07.github.io/Weather_API/"
          },
          {
            title: "BreakFast Resturant",
            description: "A website for a restaurant featuring dynamic menu displays and integration with a MongoDB database for real-time updates.",
            technologies: ["JavaScript", "Express.js", "Handlebars", "MongoDB"],
            link: "https://github.com/Dmanoj07/BreakFast-Restaurant"
          },
          {
            title: "Museum of Art Work",
            description: "A web app for exploring artworks from the Metropolitan Museum of Art, featuring user authentication, search, and favorite saving capabilities.",
            technologies: ["React", "Next.js", "MongoDB", "Jotai", "Express"],
            link: "https://github.com/Dmanoj07/Museum-of-Art-Work"
          },
    // Add more projects as needed
  ];

  return (
    <section id="projects" className="py-16 bg-black">
      <div className="container mx-auto px-4 font-mono">
        <h2 className="text-4xl font-bold mb-12 text-center text-[#064e3b]">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;