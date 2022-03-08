import React from 'react'
import './ZRow.scss'

// export default function ({ title, description, siteLink, repoLink }) {
export default function ZRow ({ project, imageAlign }) {
  function calculateImageClass () {
    if (imageAlign === 'right') {
      return 'order-3'
    }

    return 'order-1'
  }

  return (
    <>
      <div className='projects'>
        <div className='order-2'>
          <h3 className='description'>{project.title}</h3>
          <p className='description'>{project.description}</p>

          <a href={project.deployLink} target='_blank' class='btn btn-primary project'>
            View {project.title}
          </a>
          <a href={project.githubLink} target='_blank' class='btn btn-primary'>
            View GitHub Repo
          </a>
        </div>

        <div className={calculateImageClass()}>Image</div>
      </div>
    </>
  )
}
