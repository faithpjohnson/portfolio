import React, { useState } from 'react'
import ZRow from '../ZRow/ZRow'
import './work.scss'

export default function Projects () {
  const [projects, setProjects] = useState([
    {
      title: 'Plantopia',
      description:
        'For sharing plant sightings  with your community. This app includes the ability to create a profile, login as the user, comment on others sightings, and view, edit, and delete your own sightings. Upon logging in, you can add a sighting by uploading a photo, location, and adding a description.',
      techstack:
        'Technologies used: HTML, CSS, JS. React, Node, MongoDB, Express,  Semantic UI',
      deployLink: 'https://secure-falls-04384.herokuapp.com/login',
      githubLink: 'https://github.com/faypayjay/project-4',
      imageSource: 'https://i.imgur.com/aBnO3N7.png'
    },
    {
      title: 'Route Creator',
      description:
        'An app for creating your own custom-made running or biking routes, and displaying them for others to see. After a user creates an account and logs in, they can create routes, search for routes, add routes to favorites, leave comments, and edit/delete their personal routes. This app was created by a team of 4, using the mob programming approach.',
      techstack:
        'Technologies used: HTML, CSS, JS, Python, Django, PostgreSQL, AWS, Google Maps API, Materialize',
      deployLink: 'https://routefind.herokuapp.com/about/',
      githubLink: 'https://github.com/faypayjay/project3',
      imageSource: 'https://i.imgur.com/xFWDl0n.png'
    },
    {
      title: 'Herb Share',
      description:
        'A place to create and share your favorite herbal recipes. After logging in using Google Authentication, the user can create, share, and comment on recipes. If the recipe belongs to the user, they can edit and delete the recipe.',
      techstack:
        'Technologies used: HTML, CSS, JS, MongoDB, Express, Node, EJS,  Materialize, Google OAuth',
      deployLink: 'http://mighty-hollows-31782.herokuapp.com/',
      githubLink: 'https://github.com/faypayjay/Project-2',
      imageSource: 'https://i.imgur.com/HUrwD7f.png'
    },
    {
      title: 'Game of War',
      description:
        'A browser based game developed using JavaScript, HTML, CSS and MVC framework.',
      techstack: 'Technologies used: HTML, CSS, JS',
      deployLink: 'https://faypayjay.github.io/war-card-game/',
      githubLink: 'https://github.com/faypayjay/war-card-game',
      imageSource: 'https://i.imgur.com/muzVRJn.png'
    }
  ])

  return (
    <div id='work'>
      <div className='projects-section container py-5'>
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
