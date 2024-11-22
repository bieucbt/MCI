import React from 'react'
import { FaFacebookF, FaGoogle  } from "react-icons/fa";

const LoginWith = ({title}) => {
  return (
    <div>
      <p>{title}</p>
      <div>
        <div className='border-s-[#3b5999]'>
          <FaFacebookF className='text-[#3b5999]'/> 
          <span className='text-[#3b5999]'>Facebook</span>
        </div>
        <div><FaGoogle /> <span>Google</span></div>
      </div>
    </div>
  )
}

export default LoginWith