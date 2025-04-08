import React from 'react'
import './About.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

export default function About () {
  return (
    <div id='about'>
      <Container>
        <Row className='py-5'>
          <h5 className='about-title section-header'>ABOUT</h5>
          <Col md={4}>
            <img
              className='profile-pic'
              src='https://i.imgur.com/6dzYup4.jpg'
              alt='Faith'
            />
          </Col>

          <Col md={8}>
            <h4 className='headline'>
              Hi, I'm Faith Johnson, a technical professional skilled in delivering innovative, data-driven solutions.
            </h4>
            <p className='about-info'>
              I specialize in platforms like Palantir Foundry, Microsoft Power Platform, and Atlassian. My experience includes building custom applications, automating complex workflows, and collaborating closely with both civilian and military teams to turn intricate data challenges into actionable insights.
            </p>
            <p className='about-info'>
              Currently, I'm deepening my expertise by pursuing advanced education and certifications in cybersecurity. I'm passionate about combining my proven technical abilities with robust cybersecurity practices to ensure solutions are not only effective and efficient but also secure and resilient.
            </p>
            <p className='about-info'>
              I thrive on continuous learning, creative problem-solving, and leveraging technology to drive meaningful impact. Welcome to my portfolio!
            </p>

            <Button
              href='mailto:faithpjohnson@gmail.com?subject=MessageToFaith'
              target='_blank'
            >
              Get in Touch
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
