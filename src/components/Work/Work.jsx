import React, { useState, useEffect } from 'react'
import ZRow from '../ZRow/ZRow'
import './work.scss'

export default function Projects () {
  const [projects, setProjects] = useState([
    {
      title: 'Plantopia',
      description: 'blah',
      deployLink: 'https://secure-falls-04384.herokuapp.com/login', 
      githubLink: 'https://github.com/faypayjay/project-4'
    },
    {
      title: 'Herb Share',
      description: 'blah', 
      deployLink: 'http://mighty-hollows-31782.herokuapp.com/',
      githubLink: 'https://github.com/faypayjay/Project-2'
    },
    {
      title: 'Route Creator',
      description: 'blah', 
      deployLink: 'https://routefind.herokuapp.com/about/', 
      githubLink: 'https://github.com/faypayjay/project3'
    },
    {
      title: 'Game of War',
      description: 'blah', 
      deployLink: 'https://faypayjay.github.io/war-card-game/', 
      githubLink: 'https://github.com/faypayjay/war-card-game'
    }
  ])

  return (
    <>
      <div className="projects">
        <div className='container'>
          <h5 id='projects'>Projects</h5>

          {projects.map((project, index) => {
            console.log(index, project)
            const align = index % 2 == 1 ? 'left' : 'right'
            return <ZRow project={project} imageAlign={align} />
          })}

          <hr />
        </div>
      </div>
    </>
  )
}
