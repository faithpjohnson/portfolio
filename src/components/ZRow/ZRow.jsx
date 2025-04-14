import React from 'react'
import './ZRow.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

/**
 * ZRow component for displaying project information in an alternating layout
 * 
 * @param {Object} props - Component props
 * @param {Object} props.project - Project data object
 * @param {string} props.project.title - Title of the project
 * @param {string} props.project.description - Description of the project
 * @param {string[]} props.project.techstack - Technologies used in the project
 * @param {string} props.project.imageSource - URL of the project screenshot
 * @param {string} props.imageAlign - Alignment of the image ('left' or 'right')
 * @returns {JSX.Element} - The ZRow component
 */
export default function ZRow ({ project, imageAlign }) {
  const { title, description, techstack, imageSource } = project

  const calculateImgColumn = () => {
    return imageAlign === 'left' ? { order: 1 } : { order: 2 }
  }

  const calculateContentColumn = () => {
    return imageAlign === 'left' ? { order: 2 } : { order: 1 }
  }

  const handleImageError = (e) => {
    e.target.src = '/images/projects/placeholder.jpg'
  }

  return (
    <Container>
      <Row className='z-row mb-5'>
        <Col md={6} {...calculateImgColumn()}>
          <div className='project-image-container'>
            <img 
              src={imageSource} 
              alt={title} 
              className='project-image'
              onError={handleImageError}
            />
          </div>
        </Col>
        <Col md={6} {...calculateContentColumn()}>
          <div className='project-content'>
            <h3 className='project-title'>{title}</h3>
            <p className='project-description'>{description}</p>
            <div className='tech-stack'>
              <h4>Technologies Used:</h4>
              <div className='tech-tags'>
                {techstack.map((tech, index) => (
                  <span key={index} className='tech-tag'>{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  )
}
