import React from 'react'
import 'remixicon/fonts/remixicon.css'

const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 py-24 px-16'>
        <button className='bg-black text-white text-[15px] border-4 px-10 py-2.5 hover:bg-gray-500 rounded-full'>
            Hire Me</button>
        <i className="ri-more-2-fill text-4xl ml-3 text-gray-500"></i>
    </div>
  )
}

export default Header