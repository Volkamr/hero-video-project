import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import Hero from './components/Hero/Hero'
import video from './assets/video.mp4'

function App() {

  return (
    <div className="">
      <div className="header">
        <NavBar/>
        <Hero/>
        <video src={video} autoPlay loop className='videoHero'></video>
      </div>
      <div className="content">

      </div>
    </div>
  )
}

export default App
