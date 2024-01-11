import React from 'react';
import Resume from '../Assests/Resume.pdf';
import './HomeScreen.css'; // Import your external CSS file for styling

const HomeScreen = () => {
  return (
    <div className="home-container">
      <h1 className="greetings-header">Greetings, Explorer!</h1>
      <div className="welcome-message">
        🚀 Welcome aboard! I'm Jazib Ahmad, a passionate third-year computer science student at Dalhousie University.
      </div>
      <div className="journey-description">
        My journey revolves around the realms of Web & Application Development and the fascinating world of Cloud Computing.
        Join me as I traverse through the digital landscapes, creating innovative solutions and exploring cutting-edge technologies.
      </div>
      <a href={Resume} download="Jazib_Ahmad_Resume" target="_blank" rel="noopener noreferrer">
        <button className="download-button">Download Resume file</button>
      </a>
    </div>
  );
};

export default HomeScreen;
