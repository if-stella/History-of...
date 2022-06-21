import React from 'react'
import Themetoggle from "./Themetoggle";


import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiStarSmileFill} from 'react-icons/ri';

const Sliderbar = () => {
  return (
    <div className='slidernav'>
    <BsFillMoonStarsFill />
    <Themetoggle />
    <BsFillMoonStarsFill />
    </div>
  )
}

export default Sliderbar
