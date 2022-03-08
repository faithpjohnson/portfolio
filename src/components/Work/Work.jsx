import React, { useState, useEffect } from 'react'
import ZRow from '../ZRow/ZRow'

export default function Projects () {
  const [projects, setProjects] = useState([
    {
      title: 'Plantopia',
      description: 'blah'
    },
    {
      title: 'Herb Share',
      description: 'blah'
    }
  ])

  return (
    <>
      <div className='projects container'>
        <h5 id='projects'>Projects</h5>

        {projects.map((project, index) => {
          console.log(index, project)
          const align = index % 2 == 1 ? 'left' : 'right'
          return <ZRow project={project} imageAlign={align} />
        })}

        <hr />
      </div>
    </>
  )
}
