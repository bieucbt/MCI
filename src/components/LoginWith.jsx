import React from 'react'
import { FaFacebookF, FaGoogle  } from "react-icons/fa";

const LoginWith = ({title}) => {
  return (
    <div className='p-4'>
      <p className='mb-4 text-center text-[#333]'>{title}</p>
      <div>
        <div className='border-s-[#3b5999] border flex items-center
        h-[47px] rounded-md  cursor-pointer'>
          <FaFacebookF className='text-[#3b5999]' size={25}/> 
          <div className='text-[#3b5999] text-center flex-1'>Facebook</div>
        </div>
        <div className='border-s-[#4688f1] flex items-center
        h-[47px] rounded-md border-gray-200 border cursor-pointer mt-5'>
          <FaGoogle className='text-[#4688f1]' size={25}/> 
          <div className='text-[#4688f1] text-center flex-1'>Google</div>
        </div>
      </div>
    </div>
  )
}

export default LoginWith