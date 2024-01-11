import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home'
import Skills from './Components/Skills'
import Project from './Components/Projects'
import Contact from './Components/Contact'
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <Home />
    <Skills />
    <Project/>
    <Contact />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
