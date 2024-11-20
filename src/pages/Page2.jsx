import { useGSAP } from '@gsap/react'
import { gsap } from 'gsap';
import React from 'react'

const Page2 = () => {

  useGSAP(() =>{
    gsap.from("#rotateText", {
      transform :'rotateX(220deg)',
      opacity: 0,
      duration: 1
    });
  }, []);
  
  return (
    <div id='section2' className=' text-center p-20 text-black'>
      <h3 className='text-gray-500 text-2xl font-[anzo3]'>©  anzo.studio 2024 | designed and developed</h3>
      
      <div id='rotateText' className='mt-28'>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>IMPACTFUL</h1>
      </div>
      <div>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>DESIGN</h1>
      </div>
      <div>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>IS THE</h1>
      </div>
      <div>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>DESIGN</h1>
      </div>
      <div>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>THAT</h1>
      </div>
      <div>
        <h1 className='text-[42vw] leading-[35vw] text-black font-[anzo1]'>WORKS!</h1>
      </div>
    </div>
    
  )
}

export default Page2