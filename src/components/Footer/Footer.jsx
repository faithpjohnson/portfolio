import React from 'react'
import './footer.scss'

export default function Footer () {
  return (
    <div id="footer">
      <div className='footer container'>
        <a id='contact' href='mailto:faithpjohnson@gmail.com?subject=MessageToFaith' target='_blank'>
          Email Me!
        </a>
        <a id='contact' href='#'>
          GitHub
        </a>
        <a id='contact' href='#'>
          LinkedIn
        </a>
      </div>
    </div>
  )
}
