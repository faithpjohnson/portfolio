import React from 'react'
import ZRow from '../ZRow/ZRow'
import './projects.scss'
import Container from 'react-bootstrap/Container'
import { projects } from '../../data/projects'

/**
 * Projects component that displays all portfolio projects
 * @returns {JSX.Element} The Projects component
 */
export default function Projects () {
  return (
    <div id='projects'>
      <Container className='py-5'>
        <h5 className='section-header projects-title'>PROJECTS</h5>
        {projects.map((project, index) => {
          const align = index % 2 === 1 ? 'left' : 'right'
          return (
            <ZRow 
              key={index} 
              project={project} 
              imageAlign={align} 
            />
          )
        })}
        <hr />
      </Container>
    </div>
  )
}
