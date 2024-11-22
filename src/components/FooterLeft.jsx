import React from 'react'
import Heading from './Heading'
import { bgFooter, logo } from '../assets'
import { IoMdPhonePortrait } from "react-icons/io";


const FooterLeft = () => {
  return (
    <div className='cursor-pointer max-lg:order-2 max-lg:mt-5'>
        <Heading className="text-white" cssHr={'bg-white'}>HỌC VIỆN CÔNG NGHỆ MCI</Heading>
        <div className='h-[200px] relative'>
          <a href="https://www.facebook.com/mcitrainingcenter?mibextid=LQQJ4d">
            <img src={bgFooter} alt="" 
            className='w-full h-full object-cover rounded-lg'/>
            <div className='absolute top-0 left-0 bottom-0 p-2 flex flex-col justify-between 
            flex-1'>
              <div className='flex items-center gap-2'>
                <div className='w-[55px] h-[55px] bg-primaryColor grid place-content-center
                border-2 border-white rounded-md'>
                  <img src={logo} alt="logo" className='logo' />
                </div>
                <div className='flowing rounded-lg px-1 py-2'>
                  <h3 className='text-[15px] text-white'>MCI Việt Nam</h3>
                  <p className='text-[12px] text-white'>95.7k người theo dõi</p>
                </div>
              </div>

              <div className='flex items-center bg-white rounded-[4px]  py-[2px] px-[10px]
              w-max'>
                <IoMdPhonePortrait />
                <span className='text-[12px]'>Theo dõi trang</span>
              </div>
            </div>
          </a>
        </div>
      </div>
  )
}

export default FooterLeft