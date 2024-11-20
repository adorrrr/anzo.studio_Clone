import React, { useRef, useState, useEffect } from 'react';
import TiltText from '../components/TiltText'
import { gsap } from 'gsap';
import { useGSAP } from '@gsap/react';



const Page1 = () => {
  const tiltRef = useRef(null);
  const [xVal, setXVal] = useState(0);
  const [yVal, setYVal] = useState(0);

  const mouseMoving = (e) => {
    const tiltRect = tiltRef.current.getBoundingClientRect();
    setXVal((e.clientX - (tiltRect.x + tiltRect.width / 2)) / 70);
    setYVal((e.clientY - (tiltRect.y + tiltRect.height / 2)) / 20);
  };

  useGSAP(() => {
    if (tiltRef.current) {
      gsap.to(tiltRef.current, {
        transform: `rotateX(${yVal}deg) rotateY(${xVal}deg)`,
        duration: 3,
        ease: 'power4.out',
      });
    }
  }, [xVal, yVal]);

  return (
    <div onMouseMove={(e)=>{
        mouseMoving(e)
    }} className='h-screen p-5 relative bg-white'>
        <div id='page1-in' className='relative shadow-xl px-24 py-16 shadow-gray-700 h-full w-full bg-cover rounded-[50px] bg-[url(https://static.wixstatic.com/media/f1c650_678c0ceab5194893872c60fa3be4bcdc~mv2.jpg/v1/fill/w_3730,h_1746,fp_0.69_0.64,q_90,usm_0.66_1.00_0.01,enc_auto/ANZO.jpg)]'>
            <img className='' src="https://static.wixstatic.com/media/f1c650_35a00b1fe6ce403eb237970ec8d34f79~mv2.png/v1/fill/w_99,h_99,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Frame%2053.png" alt="" />
            <TiltText abc={tiltRef}/>
        </div>
    </div>
  )
}

export default Page1