import React from 'react'
import './ZRow.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function ZRow ({ project, imageAlign }) {
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
          <img src={project.imageSource} className='img-fluid' />
        </Col>

        <Col md={6}>
          <h3 className='title'>{project.title}</h3>
          <p className='description'>{project.description}</p>
          <p className='techstack'>{project.techstack}</p>
          <Button className='button-style' href={project.deployLink} target='_blank'>
            Launch {project.title}
          </Button>
          <Button className='button-style' href={project.githubLink} target='_blank'>
            View GitHub Repo
          </Button>
        </Col>
      </Row>
    </Container>
  )
}
