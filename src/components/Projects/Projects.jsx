import React from 'react'
import ZRow from '../ZRow/ZRow'
import './projects.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
        <Row className='mb-5'>
          <Col lg={8}>
            <p className='projects-intro'>
              Below are some of my recent projects showcasing my expertise in data-driven solutions, 
              workflow automation, and cybersecurity. These projects demonstrate my ability to leverage 
              platforms like Palantir Foundry, Microsoft Power Platform, and Atlassian tools to deliver 
              innovative solutions that address complex challenges.
            </p>
          </Col>
        </Row>
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
