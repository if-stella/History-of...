import React from 'react'
import './Circles.scss'

const Circles = () => {
  return (
    <div className="circles">
             <div className="circle" id="circle-1">
              <div id="circle-1-cont" className="circle-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
            <div id="circle-2" className="circle">
              <div id="circle-2-cont" className="circle-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
            <div id="circle-3" className="circle">
              <div id="circle-3-cont" className="circle-cont"><span>I'm just a small paragraph, to check if everything is working properly...</span></div>
              <svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="500px" height="500px" viewBox="0 0 300 300" enable-background="new 0 0 300 300" xmlSpace="preserve">
                <defs>
                <path id="circlePath" d=" M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "/>
                </defs>
                <circle cx="150" cy="150" r="50" fill="none"/>
                <g>
                  <use xlinkHref="#circlePath" fill="none"/>
                  <text fill="var(--p-color)">
                  <textPath xlinkHref="#circlePath">Content Content Content Content Content</textPath>
                  </text>
                </g>
              </svg>
            </div>
    </div>
  )
}

export default Circles
