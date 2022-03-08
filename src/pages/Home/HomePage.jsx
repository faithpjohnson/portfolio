import React from 'react'
import BasicPage from '../../components/BasicPage/BasicPage'
import Home from '../../components/Home/Home'
import About from '../../components/About/About'
import Skills from '../../components/Skills/Skills'
import Work from '../../components/Work/Work'

export default function HomePage (props) {
  return (
    <BasicPage>
      <Home />
      <About />
      <Skills />
      <Work />
    </BasicPage>
  )
}
