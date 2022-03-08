import React from 'react'

// export default function ({ title, description, siteLink, repoLink }) {
export default function ZRow({ project, imageAlign }) {

  function calculateImageClass() {
    if (imageAlign === "right") {
      return "order-3"
    }

    return "order-1"
  }

  return (
    <>
      <div className='order-2'>
        <p className='description'>{project.title}</p>
        <p className='description'>{project.description}</p>
        <button type='button' class='btn btn-primary'>
          View {project.title}
        </button>
        <button type='button' class='btn btn-primary'>
          View GitHub Repo
        </button>
      </div>

      <div className={calculateImageClass()}>Image</div>
    </>
  )
}
