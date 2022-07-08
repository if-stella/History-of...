import React from 'react'
import CountUp from 'react-countup';
import './Guestcounter.scss'

const Guestcounter = () => {
  return (
    <div className="guestCounter">
      <span>
      <CountUp end={1337} duration={9} prefix="You are visitor number " suffix="!!!"/>
      </span>
    </div>
  )
}

export default Guestcounter
