import React from 'react'
import Slider from "./Slider";
import Themetoggle from "./Themetoggle";


import {BsFillMoonStarsFill} from 'react-icons/bs';
import {RiStarSmileFill} from 'react-icons/ri';

const Sliderbar = () => {
  return (
    <div className='slidernav fixed w-full h-[80px] bottom-0 flex justify-between items-center px-4 bg-slate-100 text-gray-600'>
    <BsFillMoonStarsFill />
    <Slider />
    <Themetoggle />
    <RiStarSmileFill />
    </div>
  )
}

export default Sliderbar
