import React, { useState } from 'react'
import './skills.scss'
// import Icon from '../Icon/Icon'
import DevIcon from 'devicon-react-svg'

export default function Skills (props) {
  // const [icons, setIcons] = useState([
  //   {
  //     img: 'react',
  //     name: 'React'
  //   }
  // ])
  const devIconStyle = {
    height: '50px',
    width: '50px'
  }

  return (
    <div id='skills'>
      <div class='skills-section container'>
        <h5 class='section-header skills-title'>SKILLS</h5>
        <p>
          These are the skills, tools and technologies I use to bring projects
          to life:
        </p>

        <DevIcon icon='html5' style={devIconStyle} />
 

        <DevIcon icon='css3' style={devIconStyle} />
        <DevIcon icon='javascript' style={devIconStyle} />
        <DevIcon icon='react' style={devIconStyle} />
        <DevIcon icon='git' style={devIconStyle} />
        <DevIcon icon='github_badge' style={devIconStyle} />
        <DevIcon icon='bootstrap' style={devIconStyle} />
        <DevIcon icon='materializecss' style={devIconStyle} />
        <DevIcon icon='sass' style={devIconStyle} />
        <DevIcon icon='python' style={devIconStyle} />
        <DevIcon icon='django' style={devIconStyle} />

        {/* <br /> */}

        <DevIcon icon='mysql' style={devIconStyle} />
        <DevIcon icon='postgresql' style={devIconStyle} />
        <DevIcon icon='nodejs' style={devIconStyle} />
        <DevIcon icon='mongodb' style={devIconStyle} />
        <DevIcon icon='terminal' style={devIconStyle} />
        <DevIcon icon='visualstudio' style={devIconStyle} />
        <DevIcon icon='aws' style={devIconStyle} />
        <DevIcon icon='heroku' style={devIconStyle} />
        <DevIcon icon='trello' style={devIconStyle} />

        <h5>Currently working on:</h5>
      </div>
    </div>
  )
}
