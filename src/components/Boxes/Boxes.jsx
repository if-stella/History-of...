import React from 'react'
import './Boxes.scss'

const Boxes = () => {
  return (
    <div className="boxes">
    <div className="content-box">
      <div className="cbox-image cbi-I"></div>
      <span><h3>Content I</h3></span>
      <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
    </div>
    <div className="content-box">
      <div className="cbox-image cbi-II"></div>
      <span><h3>Content II</h3></span>
      <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
    </div>
    <div className="content-box">
      <div className="cbox-image cbi-III"></div>
      <span><h3>Content III</h3></span>
      <span><p>I'm just a small paragraph, to check if everything is working properly...</p></span>
    </div>
  </div>
  )
}

export default Boxes
