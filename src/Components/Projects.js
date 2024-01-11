import React from 'react';
import './Projects.css';

function ProjectCard({ title, technologies, description, link }) {
  return (
    <div className="project-card">
      <h2>{title}</h2>
      <p className="technologies">{technologies}</p>
      <p>{description}</p>
      <a href={link} target="_blank" rel="noopener noreferrer">Link</a>
    </div>
  );
}

function Projects() {
  return (
    <div className="projects-container">
      <h1 className="header">Projects</h1>
      <div className="project-cards">
      <ProjectCard
          title="The Jumpsy"
          technologies="Unity, C#"
          description="Developed a 3d game to develope where player have to complete 2 levels. Player can kill or avoid enemy, collect game materials, 3d movement etc."
          link="https://github.com/jzahmad/Jumpsy"
        />
      <ProjectCard
          title="Cities Explorer"
          technologies="Kotlin, XML"
          description="Developed an application where user can explore differnet cities based on Continents."
          link="https://github.com/jzahmad/CitiesExplorer.git"
        />

        <ProjectCard
          title="Personal Portfolio"
          technologies="ReactJS, CSS"
          description="I have made a personal portfolio of myself where I can express my work and progress"
          link="https://github.com/jzahmad/portfolio"
        />
        <ProjectCard
          title="Blogging Website for Patients"
          technologies="HTML, CSS, JS, JQUERY, Bootstrap, MongoDB, NodeJS"
          description="Collaborated with a diverse team of 4 students to build a website helping patients write and publish their blogs. Identified assignment requirements, then completed the analysis, design, implementation, and testing. Successfully communicated the scope of the project by writing clear, accurate technical specifications and presenting the project summary."
          link="https://github.com/jzahmad/BforP"
        />
        <ProjectCard
          title="ROCK-PAPER-SCISSOR game"
          technologies="C, Unix, Socket Programming"
          description="Developed a client and server side where the client can play ROCK-PAPER-SCISSOR with the server. Developed the program with great efficiency and documentation."
          link="https://github.com/jzahmad/RPS-unix"
        />
        <ProjectCard
          title="Task Management Application (Trello)"
          technologies="ReactJS, SQL, Springboot, Git, CSS"
          description="Developed a Trello Clone using APIs, Front-end, and backend languages with a group of 5 classmates including em using software engineering principles. Worked specifically on the front end using ReactJS and helped in developing database entity diagrams. Also worked on the backend for development using Springboot."
          link="https://github.com/jzahmad/T-Clone"
        />
        <ProjectCard
          title="Line Follower & Obstacle Avoider"
          technologies="Java, Aseba"
          description="Developed a robotics program where a robot can follow a line and avoid all the obstacles that come in the way.I Made a report explaining all the codes and our future work."
          link="https://github.com/jzahmad/LineF-OjecA"
        />

      </div>

    </div>
  );
}

export default Projects;
