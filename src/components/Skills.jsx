import React from 'react';
import { FaReact, FaNodeJs, FaPython, FaJava, FaAndroid, FaDatabase, FaAngular, FaAws, FaGitAlt, FaDocker, FaHtml5,FaCss3,FaBootstrap } from 'react-icons/fa';
import { SiCplusplus, SiCsharp, SiOracle,SiMysql, SiIonic,SiFirebase, 
  SiMongodb, SiJavascript, SiXamarin, SiLinux, SiFlutter, SiNextdotjs,SiPowerbi,SiFigma,
   SiPostgresql, SiVisualstudio,SiPowerapps
   } from 'react-icons/si';

import './Skills.css'; // Create and import a separate CSS file

const SkillCategory = ({ title, skills }) => (
  <div className="mb-6">
    <h3 className="text-xl font-semibold mb-2 text-green-400 font-mono">{title}</h3>
    <div className="flex flex-wrap space-x-4 space-y-4">
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center relative group">
          {skill.icon && <span className="text-3xl mr-2 text-green-300">{skill.icon}</span>}
          <span className="tooltip-text">{skill.name}</span> {/* Tooltip */}
        </div>
      ))}
    </div>
  </div>
);

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      skills: [
        { name: "C", icon: <FaDatabase /> },
        { name: "C++", icon: <SiCplusplus /> },
        { name: "C#", icon: <SiCsharp /> },
        { name: "Python", icon: <FaPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Dart", icon: null }, // Add appropriate icon or leave null
        { name: "Visual Basic", icon: null }, // Add appropriate icon or leave null
        { name: "Linux Shell Script", icon: <SiLinux /> }
      ]
    },
    {
      title: "Web and Application Development",
      skills: [
        { name: "HTML5", icon: <FaHtml5 /> },
        { name: "CSS3", icon: <FaCss3 /> },
        { name: "JavaScript", icon: <SiJavascript /> },
        { name: "Bootstrap", icon: <FaBootstrap /> },
        { name: "Node.js", icon: <FaNodeJs /> },
        { name: "Express.js", icon: null },
        { name: "React", icon: <FaReact /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "ASP.NET", icon: null }, // Add appropriate icon or leave null
        { name: "Angular", icon: <FaAngular /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Xamarin", icon: <SiXamarin /> },
        { name: "Ionic", icon: <SiIonic /> },
        { name: "Android Studio", icon: <FaAndroid /> }
      ]
    },
    {
      title: "Power Platform",
      skills: [
        { name: "PowerApps", icon: <SiPowerapps /> },
        { name: "PowerAI", icon: null }, // Add appropriate icon or leave null
        { name: "Power Automate", icon: null }, // Add appropriate icon or leave null
        { name: "Power BI", icon: <SiPowerbi /> },
        { name: "Dataverse", icon: null } // Add appropriate icon or leave null
      ]
    },
    {
      title: "Database Management",
      skills: [
        { name: "Oracle", icon: <SiOracle /> },
        { name: "MySQL", icon: <SiMysql /> },
        { name: "MongoDB", icon: <SiMongodb /> },
        { name: "Mongoose", icon: <SiMongodb /> }, // MongoDB and Mongoose share same icon
        { name: "Firebase", icon: <SiFirebase /> },
        { name: "Postgres", icon: <SiPostgresql/> } // Add appropriate icon or leave null
      ]
    },
    {
      title: "Design and IDE Tools",
      skills: [
        { name: "MS Office", icon: null }, // Add appropriate icon or leave null
        { name: "Visual Studio", icon: <SiVisualstudio /> },
        { name: "Visual Code", icon: null },
        { name: "Figma", icon: <SiFigma /> },
        { name: "Atom", icon: null }, // Add appropriate icon or leave null
        { name: "Visual Paradigm", icon: null } // Add appropriate icon or leave null
      ]
    },
    {
      title: "Cloud Platforms and Containerization",
      skills: [
        { name: "Microsoft Azure (VM, App Service, Cosmos DB)", icon: null },
        { name: "AWS (EC2, S3, Lambda, RDS)", icon: <FaAws /> },
        { name: "Docker", icon: <FaDocker /> }
      ]
    },
    {
      title: "Version Control",
      skills: [
        { name: "Git", icon: <FaGitAlt /> },
        { name: "GitHub", icon: <FaGitAlt /> } // Git and GitHub can use the same icon
      ]
    }
  ];

  return (
    <section id="skills" className="min-h-screen flex items-center justify-center bg-black py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-green-400 font-mono">Technical Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCategory key={index} title={category.title} skills={category.skills} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;