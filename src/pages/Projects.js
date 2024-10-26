import React from 'react'
import Project from '../components/Project'
import assistantImg from '../assets/img/destktop-assistant.jpg'
import expenseImg from '../assets/img/expense-tracker.jpg'
import weatherImg from '../assets/img/cloudy.jpg'

const Projects = () => {
  const projects = [
    {
      title: 'Python Virtual Assistant',
      img: assistantImg,
      description: ' A virtual desktop assistant that assists users to perform various tasks through voice and text commands',
      // technologies: 'Python, Speech Recognition, Tkinter',
      link: 'https://github.com/vidisharaut/AVY-Virtual-Assistant',
    },
    {
      title: 'Expense Tracker App',
      img: expenseImg,
      description: 'A simple yet efficient expense tracking application allowing users to add, edit, and delete expenses for day to day expenses.',
      // technologies: 'React, JavaScript, CSS',
      link: 'https://vidisharaut.github.io/expense-tracker/',
    },
    {
      title: 'Weather App',
      img: weatherImg,
      description: 'A responsive weather application that provides real-time weather updates using OpenMapWeather API',
      // technologies: 'React, JavaScript, CSS',
      link: 'https://vidisharaut.github.io/weather-app/',
    },
    // Add more projects here
  ];
  return (
    <>
    <h2 className='project-heading'>Projects</h2>
    <div className='projects'>
    {projects.map((project, index) =>(
      <Project
      key={index}
      title={project.title}
      description={project.description}
      technologies={project.technologies}
      link={project.link}
      img={project.img}/>
    ))}  
    </div>

    </>
    
   
  )
}

export default Projects