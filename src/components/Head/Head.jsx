import React from 'react'
import './Head.scss'

const Head = () => {
  return (
    <div className="head-area">
      <div className="head-images">
        <div className="head-image"></div>
        <div className="head-image-II"></div>
        <div className="head-image-III"></div>
      </div>
      <div className="head-bg-image"></div>
      <div className="headlines styled-content">
        <h1>Stella's Portfolio</h1>
        <h2>EST <span className="varyear"></span></h2>
        <p className="headp">It's the year <span className="varyear"></span>. My name is Stella Raab, and I’m a passionate graphic-designer, based in Berlin, Germany. I draw and eat things. As often as possible I love to go to the gym, to throw around heavy things (including myself).</p>
      </div>
    </div>
  )
}

export default Head
