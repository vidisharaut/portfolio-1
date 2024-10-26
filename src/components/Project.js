import React from 'react'

const Project = ({title, description, technologies, link, img}) => {
  return (
    <div className='project'>
        <img className='project-img' src={img}/>
          <div className='card-body'>
          <h3>{title}</h3>
          {/* <p>{description}</p> */}
          {/* <p><strong> Technologies Used:</strong> {technologies}</p> */}
          <a href={link} target="_blank" rel="noopener noreferrer" className="project-link">View Project</a>
        </div>
    </div>
  )
}

export default Project