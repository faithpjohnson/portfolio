import React from 'react'
import Nav from '../Nav/Nav'
import Footer from '../Footer/Footer'

export default function BasicPage ({ children }) {
  return (
    <>
      <Nav />
      {children}
      <Footer />
    </>
  )
}
