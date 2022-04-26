import React from 'react'
import './Home.scss'
import Card from 'react-bootstrap/Card'

export default function Home () {
  return (
    <div id='home'>
      <Card className='text-center' id='banner'>
        <Card.Body>
          <Card.Title id='header-title'>Hi, I'm Faith!</Card.Title>
          <Card.Title id='role'>A Junior Web Developer.</Card.Title>
          <img
            src='https://i.imgur.com/ZFwJSSc.png'
            alt='flower'
            className='flower'
          />
        </Card.Body>
      </Card>
    </div>
  )
}
