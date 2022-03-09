import React from 'react'
import './ZRow.scss'

// export default function ({ title, description, siteLink, repoLink }) {
export default function ZRow ({ project, imageAlign }) {
  function calculateImageClass (classes) {
    if (imageAlign === 'right') {
      return `${classes} order-last`
    }

    return `${classes} order-first`
  }

  return (
    <div className='project container row'>
      <div className='content-column col'>
        <h3 className='title'>{project.title}</h3>
        <p className='description'>{project.description}</p>
        <p>{imageAlign}</p>

        <a
          href={project.deployLink}
          target='_blank'
          class='btn btn-primary project'
        >
          View {project.title}
        </a>
        <a href={project.githubLink} target='_blank' class='btn btn-primary'>
          View GitHub Repo
        </a>
      </div>

      <div className={calculateImageClass('col')}>
        <h1>Image</h1>
      </div>
    </div>
  )
}
