import React from 'react'
import './nav.scss'

export default function Nav () {
  return (
    <nav className='navbar sticky-top navbar-expand-md'>
      <div className='container-fluid'>
        {/* <div className='mx-auto order-0'> */}
        <a className='navbar-brand mb-0 h1' href='#'>
          Faith P Johnson
        </a>
        {/* </div> */}
        <button
          type='button'
          data-bs-toggle='collapse'
          data-bs-target='#navbarNav'
          className='navbar-toggler'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='navbar-collapse collapse' id='navbarNav'>
          <ul className='navbar-nav ms-auto'>
            <li className='nav-item'>
              <a className='nav-link' href='#'>
                Home
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#about'>
                About
              </a>
            </li>

            <li className='nav-item'>
              <a className='nav-link' href='#skills'>
                Skills
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#work'>
                Projects
              </a>
            </li>

            <li class='nav-item'>
              <a class='nav-link' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
