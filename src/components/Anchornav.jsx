import React, { useState } from 'react';
import {FaBars,FaTimes} from 'react-icons/fa';
import {BsFillMoonStarsFill} from 'react-icons/bs';
import { Link } from 'react-scroll';

const Anchornav = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <BsFillMoonStarsFill />

      {/* menu */}
      <ul className='hidden sm:flex'>
        <li>
          <Link to='1990' smooth={true} duration={500}>
            1990
          </Link>
        </li>
        <li>
          <Link to='2000' smooth={true} duration={500}>
            2000
          </Link>
        </li>
        <li>
          <Link to='2022' smooth={true} duration={500}>
            2022
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className='sm:hidden z-10'>
        {!nav ? <FaBars /> : <FaTimes />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? 'hidden'
            : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center z-9'
        }
      >
        <li className='py-6 text-2xl'>
          <Link onClick={handleClick} to='1990' smooth={true} duration={500}>
            1990
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='2000' smooth={true} duration={500}>
            2000
          </Link>
        </li>
        <li className='py-6 text-2xl'>
          {' '}
          <Link onClick={handleClick} to='2022' smooth={true} duration={500}>
            2022
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Anchornav;
