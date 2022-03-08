import React from 'react'
import { HashLink } from 'react-router-hash-link';

import './nav.scss'

export default function Nav () {
  return (
    <nav class='navbar navbar-expand-md navbar-dark bg-dark'>
      <div class='container-fluid'>
        <div class='mx-auto order-0'>
          <a class='navbar-brand mx-auto' href='#'>
            Faith P Johnson
          </a>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='.dual-collapse2'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
        </div>
        <div class='navbar-collapse collapse w-100 order-3 dual-collapse2'>
          <ul class='navbar-nav ms-auto'>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Home
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                About
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Skills
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Work
              </a>
            </li>
            <li class='nav-item'>
              <a class='nav-link' href='#'>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
