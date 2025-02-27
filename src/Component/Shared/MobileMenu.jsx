import React from 'react'
import Logo from './Logo'
import { navItems } from '../db/DataVase'

function MobileMenu({toggleMenu}) {
  return (
    <div className='lg:hidden absolute top-0 left-0 w-full h-screen bg-white z-50 overflow-y-hidden p-6'>
      <div className='flex justify-between items-center pb-6'>
      <Logo/>
      <button onClick={toggleMenu} className='text-black text-2xl self-end' aria-label='Close Menu'>&times;</button>
      </div>
      <div className='space-y-4'>
        {navItems.map
        (({name,link},index)=>(
          <a key={index} href={link} className='block text-lg text-accent  hover:text-primary transition-colors duration-150'>{name}</a>
        ))}
      </div>
    </div>
  )
}

export default MobileMenu