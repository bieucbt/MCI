import React, { useEffect, useState } from 'react'
import { FaTimes } from "react-icons/fa";
import Login from './Login';
import Register from './Register';

const FromLogin = ({setLoginForm, loginForm}) => {
  const [activeLogin, setActiveLogin] = useState(true)
  const [activeRegister, setActiveRegister] = useState(false)
  return (
    <div className='absolute w-full h-full'>
      <div className='fixed inset-0'></div>
      <div className={`relative z-[1999] absolute top-[-200px] left-[50%] w-[75%] bg-white 
    text-black z-[1000] translate-x-[-50%] rounded-lg opacity-0  
    ${loginForm ? 'animation-show-FromLogin' : 'animation-hidden-FromLogin'}`}>
        <div className='flex items-center border-b-[1px] border-b-gray-300
        p-4'>
          <div className='flex items-center flex-1 bg-primaryColor rounded-lg
          shadow-xl p-2'>
            <div className={`flex-1 ${activeLogin && 'bg-white'} rounded-lg px-4
            py-2 cursor-pointer hover:border-white hover:border`}
            onClick={() => {
              setActiveLogin(true)
              setActiveRegister(false)
            }}>Đăng nhập</div>
            <div className={`flex-1 ${activeRegister && 'bg-white'} rounded-lg px-4
            py-2 cursor-pointer hover:border-white hover:border`}
            onClick={() => {
              setActiveLogin(false)
              setActiveRegister(true)
            }}>Đăng ký</div>
          </div>
          <div onClick={() => setLoginForm(false)}
            className='cursor-pointer px-[6px] py-3 border-s-gray-200 border
            hover:bg-[#212529] rounded-md hover:text-white duration-200 ease-linear'>
          <FaTimes /> 
          </div>
        </div>
        <div>
          {activeLogin && <Login /> || activeRegister && <Register />}
        </div>
      </div>
    </div>
  )
}

export default FromLogin