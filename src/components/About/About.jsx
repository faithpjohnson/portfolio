import React from 'react'
import './About.scss'

export default function About () {
  return (
    <div id='about'>
      <div className='about container row'>
        <div class='col headshot'>
          <h5 class='section-header about-title'>ABOUT</h5>
          <h4>Who is Faith?</h4>
          <img class='profile-pic' src='https://i.imgur.com/6dzYup4.jpg' />
        </div>
        <div class='col'>
          <h4 class='headline'>
            I'm an eager Junior Developer looking to grow my skills!
          </h4>
          <p class='about-info'>
            My coding journey began with a course at{' '}
            <a href='https://www.shecodes.io/' target='_blank'>
              SheCodes
            </a>{' '}
            that left me wanting to learn more. After more self study, I
            participated in a Software Engineering Immersive at{' '}
            <a href='https://generalassemb.ly/' target='_blank'>
              General Assembly
            </a>
            . Through this process I was able to refine my skills in problem
            solving, time management, and creativity. I discovered my passion
            for bringing both the technical and visual aspects of applications
            to life. User experience and writing clean code are important to me.
            Details matter!
          </p>
          <p>
            I'm looking currently looking for role where I can apply my
            knowledge and continue to advance my skills.
            <br />
             <a
              href='https://docs.google.com/document/d/1TDgr439dOiAjreppirh6r8nAOYsbaNqIvg4f9ltneWM/export?format=pdf'
              target='_blank'
            >
              Download Resume
            </a>
          </p>
          <p>
            When I’m not coding, I enjoy learning about plants, mountain biking,
            playing with dogs, and cookin!
          </p>
          <a
            href='mailto:faithpjohnson@gmail.com?subject=MessageToFaith'
            target='_blank'
            class='btn'
          >
            Get in touch
          </a>
        </div>
      </div>
    </div>
  )
}
