import React, { useState } from 'react'
import { FaTimes } from "react-icons/fa";
import Login from './Login';
import Register from './Register';

const FromLogin = ({setLoginForm}) => {
  const [login, setLogin] = useState(true)
  const [activeLogin, setActiveLogin] = useState(true)
  const [activeRegister, setActiveRegister] = useState(false)
  return (
    <div className='absolute top-[50%] left-[50%] w-[75%] bg-white 
    text-black z-[1000] translate-x-[-50%] rounded-lg'>
      <div className='flex items-center border-b-[1px] border-b-gray-300
      p-4'>
        <div className='flex items-center flex-1 bg-primaryColor rounded-lg
        shadow-xl p-2'>
          <div className={`flex-1 ${activeLogin && 'bg-white'} rounded-lg px-4
          py-2 cursor-pointer`}
          onClick={() => {
            setActiveLogin(true)
            setActiveRegister(false)
          }}>Đăng nhập</div>
          <div className={`flex-1 ${activeRegister && 'bg-white'} rounded-lg px-4
          py-2 cursor-pointer`}
          onClick={() => {
            setActiveLogin(false)
            setActiveRegister(true)
          }}>Đăng ký</div>
        </div>
        <div onClick={() => setLoginForm(false)}
          className='cursor-pointer'>
         <FaTimes /> 
        </div>
      </div>
      <div>
        {login ? <Login /> : <Register />}
      </div>
    </div>
  )
}

export default FromLogin