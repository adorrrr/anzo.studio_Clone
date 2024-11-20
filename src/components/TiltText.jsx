import React from 'react'

const TiltText = (props) => {
  return (
    <div id='tiltDiv' ref={props.abc} className='mt-52 '>
          <h1 className='text-white text-[4.3vw] leading-[4vw] font-[anzo4]'> I AM <samp className='font-[anzo4] text-black'>DARK MODE</samp>™</h1>
          <h1 className='text-[8.3vw] font-[anzo2] leading-[7vw] text-white'>DESIGNER</h1>
          <h1 className='text-white text-[4.3vw] leading-[4vw] font-[anzo2]'> TO HIRE</h1>
      </div>
  )
}

export default TiltText