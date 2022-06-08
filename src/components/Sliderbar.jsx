import React from 'react'
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {GiAlienStare} from 'react-icons/gi';
import {RiStarSmileFill} from 'react-icons/ri';

const Sliderbar = () => {
  return (
    <div className='fixed w-full h-[80px] bottom-0 flex justify-between items-center px-4 bg-slate-100 text-gray-600'>
    <BsFillMoonStarsFill />
    <RiStarSmileFill />
    <GiAlienStare />
    </div>
  )
}

export default Sliderbar
