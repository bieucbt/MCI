import React from 'react'
import FooterLeft from './FooterLeft'
import FooterMain from './FooterMain'


const Footer = () => {
  return (
    <footer className='flex bg-[#3E3E3E] px-5 max-lg:flex-wrap 
    pt-9 mt-8'>
      <FooterLeft />
      <FooterMain />
    </footer>
  )
}

export default Footer