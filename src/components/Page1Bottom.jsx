import { useGSAP } from '@gsap/react';
import { gsap } from 'gsap';
import React, { useEffect } from 'react';

const Page1Bottom = () => {

  useGSAP(() => {
    gsap.to('#banner img', {
      rotate: 360,
      duration: 5,
      repeat: -1,
      ease: 'linear'
    });

  }); 

  return (
    <div className='absolute left-0 right-0 bottom-0 p-24 w-full flex items-end justify-between z-10'>
      <div className='pl-10'>
        <h4 className='text-white font-[anzo2] leading-4 text-[1.4vw]'>
          BRAND DESIGN | WEBSITE DESIGN
        </h4>
        <h5 className='text-gray-400 font-[anzo3] text-[1.4vw]'>
          BESPOKE FREELANCE
        </h5>
      </div>
      
      {/* Banner Images Fixed at the End */}
      <div id='banner' className='fixed bottom-0 right-0 p-20'>
        <img className='p-4 object-contain'
          src="https://static.wixstatic.com/media/f1c650_ed71078001ef401889b71537cca76dc4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/cssda-wotd-white.png"
          alt="Brand Logo" />
        <img className='p-4 object-contain'
          src="https://static.wixstatic.com/media/f1c650_64de2af00f41462e8aecc3d04537f9b4~mv2.png/v1/fill/w_101,h_101,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/EN_legend_large.png"
          alt="Legend" />
      </div>
    </div>
  );
  
  
};

export default Page1Bottom;
