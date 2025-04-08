import React from 'react'
import './skills.scss'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function Skills () {
  const skillCategories = [
    {
      title: 'Platforms & Tools',
      skills: [
        'Palantir Foundry',
        'Microsoft Power Platform (Power BI, Power Automate, Power Apps)',
        'Atlassian (Jira, Confluence)',
        'Azure / Cloud Tools'
      ]
    },
    {
      title: 'Cybersecurity',
      skills: [
        'Security Fundamentals',
        'Risk Assessment & Management',
        'Vulnerability Analysis',
        'Secure Development Practices',
        'Compliance & Governance Frameworks (NIST, ISO, etc.)'
      ]
    },
    {
      title: 'Technical Skills',
      skills: [
        'Data Analysis & Visualization',
        'Workflow Automation',
        'Application Development',
        'API Integration',
        'Process Optimization'
      ]
    },
    {
      title: 'Professional Skills',
      skills: [
        'Cross-functional Collaboration',
        'Agile Methodologies',
        'Project Management',
        'Problem-solving',
        'Technical Documentation'
      ]
    }
  ]

  return (
    <div id='skills'>
      <Container>
        <Row className='py-5'>
          <Col lg={12}>
            <h5 className='section-header skills-title'>SKILLS</h5>
            <div className='skills-container'>
              {skillCategories.map((category, index) => (
                <div key={index} className='skill-category'>
                  <h3>{category.title}</h3>
                  <ul>
                    {category.skills.map((skill, skillIndex) => (
                      <li key={skillIndex}>{skill}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  )
}
