import React from 'react'
import './ZRow.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

/**
 * ZRow component for displaying project information in an alternating layout
 * 
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.title - Title of the project
 * @param {string} props.project.description - Description of the project
 * @param {string} props.project.techstack - Technologies used in the project
 * @param {string} props.project.deployLink - Link to the deployed project
 * @param {string} props.project.githubLink - Link to the project's GitHub repository
 * @param {string} props.project.imageSource - URL of the project screenshot
 * @param {string} props.imageAlign - Alignment of the image ('left' or 'right')
 * @returns {JSX.Element} - The ZRow component
 */
export default function ZRow ({ project, imageAlign }) {
  /**
   * Calculate column settings based on image alignment
   * @returns {Object} Column configuration object
   */
  function calculateImgColumn () {
    const defaultSettings = {
      span: 6
    }

    if (imageAlign === 'right') {
      defaultSettings.order = 'last'
    } else {
      defaultSettings.order = 'first'
    }

    return defaultSettings
  }

  return (
    <Container>
      <Row className='py-5' id='project-img'>
        <Col md={calculateImgColumn()}>
          <img 
            src={project.imageSource} 
            className='img-fluid' 
            alt={`${project.title} project screenshot`} 
          />
        </Col>

        <Col md={6}>
          <h3 className='title'>{project.title}</h3>
          <p className='description'>{project.description}</p>
          <p className='techstack'>{project.techstack}</p>
          <div className="project-buttons">
            <Button 
              className='button-style me-3' 
              href={project.deployLink} 
              target='_blank'
              rel="noreferrer"
              aria-label={`Launch ${project.title} app`}
            >
              Launch {project.title}
            </Button>
            <Button 
              className='button-style' 
              href={project.githubLink} 
              target='_blank'
              rel="noreferrer"
              aria-label={`View ${project.title} GitHub repository`}
            >
              View GitHub Repo
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
