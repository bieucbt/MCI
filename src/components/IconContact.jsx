import React from 'react'
import { mess, tel, zalo } from '../assets'
import Contact from './Contact'

const IconContact = () => {
  return (
    <div className='flex flex-col gap-3 items-center
    fixed top-[50%] right-0 bottom-0'>
      <Contact><img src={mess} alt='icon' className='w-full h-full' /></Contact>
      <Contact><img src={tel} alt='icon' /></Contact>
      <Contact><img src={zalo} alt='icon' /></Contact>
    </div>
  )
}

export default IconContact