import React from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import './Guestcounter.scss'

const Guestcounter = () => {
  return (
    <div className="guestCounter">
      <span>
      <CountUp end={1337} duration={9} prefix="You are visitor number " suffix="!!!">
        {({ countUpRef, start }) => (
            <VisibilitySensor onChange={start} delayedCall>
                <span ref={countUpRef} />
            </VisibilitySensor>
        )}
      </CountUp>
      </span>
    </div>
  )
}

export default Guestcounter
