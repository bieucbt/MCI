import React from 'react'
import LoginWith from './LoginWith'

const Login = () => {
  return (
    <div className='flex p-5'>
      <div className='flex-[2] p-4'>
        <p className='mb-4 text-center text-[#333]'>Đăng nhập bằng tài khoản MCI của bạn</p>
        <form className='flex flex-col gap-5'>
          <div>
            <input id='name' type="text" placeholder='Tên đăng nhập' 
            className='w-full p-1 text-black outline-none border border-s-[#bdbdbd]
            text-[#bdbdbd] px-[15px] rounded-[3px] h-[47px]' required />
          </div>
          <div >
          <input id='name' type="text" placeholder='Mật khẩu' 
            className='w-full p-1 text-black outline-none border border-s-[#bdbdbd]
            text-[#bdbdbd] px-[15px] rounded-[3px] h-[47px]' required />
          </div>
          <div className='flex gap-1'>
            <input id='name' type="checkbox"
            className='accent-[#0d6efd]'/>
            <label htmlFor="name">Remember</label>
          </div>
          <button type='submit'
          className='bg-[#0d6efd] text-white px-[6px]
          py-3 rounded-md hover:bg-blue-500'>Đăng nhập</button>
          <p>Forgot password? <span className='text-primaryColor 
          cursor-pointer'>Click Here</span></p>
        </form>
      </div>
      <div className='flex-1'>
        <LoginWith title='Đăng nhập với' />
      </div>
    </div>
  )
}

export default Login