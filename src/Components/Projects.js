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
          description="Developed an application where user can explore different cities based on Continents."
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
          description="Collaborated with a diverse team of 4 students to build a website helping patients write, edit and publish their blogs."
          link="https://github.com/jzahmad/BforP"
        />
        <ProjectCard
          title="ROCK-PAPER-SCISSOR game"
          technologies="C, Unix, Socket Programming"
          description="Developed a client and server side where the client can play ROCK-PAPER-SCISSOR with the server. Developed the program front-end and backend part"
          link="https://github.com/jzahmad/RPS-unix"
        />
        <ProjectCard
          title="Task Management Application (Trello)"
          technologies="ReactJS, SQL, Springboot, Git, CSS"
          description="Developed a Trello Clone using APIs, Front-end, and backend languages with a group of 5 classmates including em using software engineering principles. "
          link="https://github.com/jzahmad/T-Clone"
        />
        <ProjectCard
          title="Line Follower & Obstacle Avoider"
          technologies="Aseba"
          description="Developed a robotics program where a robot can follow a line and avoid all the obstacles that come in the way."
          link="https://github.com/jzahmad/LineF-OjecA"
        />
        <ProjectCard
          title="USCurrencyConverter"
          technologies="Kotlin, XML, SQLite, APIs"
          description="Developed a Android app that can covert US currency to other currencies. It takes an API, store it to database and and then display using xml and Kotlin's adapters"
          link="https://github.com/jzahmad/USCurrencyCoverter.git"
        />
      </div>

    </div>
  );
}

export default Projects;
