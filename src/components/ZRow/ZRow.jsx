import React from 'react'
import './ZRow.scss'

export default function ZRow ({ project, imageAlign }) {
  function calculateImageClass (classes) {
    if (imageAlign === 'right') {
      return `${classes} order-last`
    }

    return `${classes} order-first`
  }

  return (
    <div className='project container row'>
      <div className='content-column col-md-6'>
        <h3 className='title'>{project.title}</h3>
        <p className='description'>{project.description}</p>
        <p className='techstack'>{project.techstack}</p>
        <a
          href={project.deployLink}
          target='_blank'
          className='btn btn-default project'
        >
          View {project.title}
        </a>
        <a
          href={project.githubLink}
          target='_blank'
          className='btn btn-default'
          type='button'
        >
          View GitHub Repo
        </a>
      </div>
      <div className={calculateImageClass('col-md-6')} id='project-img'>
        <img src={project.imageSource} className='img-fluid' />
      </div>
    </div>
  )
}
