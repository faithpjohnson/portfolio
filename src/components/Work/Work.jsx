import React, { useState } from 'react'
import ZRow from '../ZRow/ZRow'
import './work.scss'

export default function Projects () {
  const [projects, setProjects] = useState([
    {
      title: 'Plantopia',
      description:
        'A Full Stack MERN application. A place where users can share locations of plant sightings.',
      deployLink: 'https://secure-falls-04384.herokuapp.com/login',
      githubLink: 'https://github.com/faypayjay/project-4',
      imageSource: 'https://i.imgur.com/aBnO3N7.png'
    },
    {
      title: 'Herb Share',
      description:
        'A Full Stack web MEN application. Allows users to create, share, and comment on recipes.',
      deployLink: 'http://mighty-hollows-31782.herokuapp.com/',
      githubLink: 'https://github.com/faypayjay/Project-2',
      imageSource: 'https://i.imgur.com/HUrwD7f.png'
    },
    {
      title: 'Route Creator',
      description:
        'A Full Stack web application made using Django. A place to create and share bike and foot routes. Created with a team of 4, using a mob programming approach.',
      deployLink: 'https://routefind.herokuapp.com/about/',
      githubLink: 'https://github.com/faypayjay/project3',
      imageSource: 'https://i.imgur.com/xFWDl0n.png'
    },
    {
      title: 'Game of War',
      description:
        'A browser based game developed using JavaScript, HTML, CSS and MVC framework.',
      deployLink: 'https://faypayjay.github.io/war-card-game/',
      githubLink: 'https://github.com/faypayjay/war-card-game',
      imageSource: 'https://i.imgur.com/muzVRJn.png'
    }
  ])

  return (
    <div id='work'>
      <div className='projects-section container'>
        <h5 className='section-header projects-title'>PROJECTS</h5>

        {projects.map((project, index) => {
          console.log(index, project)
          const align = index % 2 == 1 ? 'left' : 'right'

          return <ZRow project={project} imageAlign={align} />
        })}

        <hr />
      </div>
    </div>
  )
}
