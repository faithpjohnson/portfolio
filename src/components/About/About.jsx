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
          <Col md={6}>
            <h5 className='about-title section-header'>ABOUT</h5>
            <img
              className='profile-pic'
              src='https://i.imgur.com/6dzYup4.jpg'
              alt='picture of Faith'
            />
          </Col>

          <Col md={6}>
            <h4 className='headline'>
              I'm an eager Junior Developer with an analytical and driven
              mindset.
            </h4>
            <p className='about-info'>
              My coding journey began with a course at{' '}
              <a
                className='links'
                href='https://www.shecodes.io/'
                target='_blank'
              >
                SheCodes
              </a>{' '}
              that left me wanting to learn more. After further self-study, I
              participated in a Software Engineering Immersive at{' '}
              <a
                className='links'
                href='https://generalassemb.ly/'
                target='_blank'
              >
                General Assembly
              </a>
              . Through this process, I was able to refine my skills in problem
              solving, time management, and collaboration. I discovered my
              passion for bringing both technical and visual aspects of
              applications to life. User experience and writing clean code are
              important to me. <strong>Details matter!</strong>
            </p>
            <p>
              I'm currently looking for role where I can apply my knowledge and
              continue to advance my skills.
              <br />
              <a
                className='links'
                href='https://docs.google.com/document/d/1vltqiAg6vhZKSEsEgwpg5OMzu_3gFVQvUHAt6qdwojA/export?format=pdf'
                target='_blank'
              >
                Download Resume{' '}
              </a>
            </p>
            <p>
              When I’m not coding, I enjoy learning about plants, mountain
              biking, spending time with my pup, and trying new recipes!
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

