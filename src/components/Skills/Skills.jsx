import React from 'react'
import './skills.scss'

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
      <div className='skills-section container py-5'>
        <h5 className='section-header skills-title'>SKILLS</h5>
        <p>
          These are the skills, tools and technologies I use to bring projects
          to life:
        </p>

        {iconList.map(iconName => {
          return (
            <>
              <DevIcon icon={iconName} style={devIconStyle} />
            </>
          )
        })}
      </div>
    </div>
  )
}
