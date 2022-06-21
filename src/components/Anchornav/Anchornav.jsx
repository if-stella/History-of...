import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Link } from 'react-scroll';
import './Anchornav.scss'

const Anchornav = () => {

  return (
    <div className='menu w-full h-[64px] fixed flex justify-between items-center px-4 bg-[#0a192f] top-0 text-gray-300'>

      {/* menu */}
      <ul className='hidden sm:flex'>
        <li>
          1990
        </li>
        <li>
          2000
        </li>
        <li>
          2000
        </li>
      </ul>

      <BsFillMoonStarsFill />
    </div>
  );
};

export default Anchornav;
