import React from 'react'
import './skills.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

import DevIcon from 'devicon-react-svg'

export default function Skills (props) {
  const iconList = [
    'html5',
    'css3',
    'javascript',
    'react',
    'git',
    'github_badge',
    'bootstrap',
    'materializecss',
    'sass',
    'python',
    'django',
    'mysql',
    'postgresql',
    'nodejs',
    'mongodb',
    'terminal',
    'visualstudio',
    'aws',
    'heroku',
    'trello'
  ]

  const devIconStyle = {
    height: '50px',
    width: '50px'
  }

  return (
    <div id='skills'>
      <Container>
        <Row className='py-5'>
          <Col lg={true}>
            <h5 className='section-header skills-title'>SKILLS</h5>
            <p>
              These are the skills and technologies I use to bring projects to
              life:
            </p>

            {iconList.map(iconName => {
              return (
                <>
                  <DevIcon icon={iconName} style={devIconStyle} />
                </>
              )
            })}
          </Col>
        </Row>
      </Container>
    </div>
  )
}
