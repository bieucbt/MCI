import React from 'react'
import LoginWith from './LoginWith'

const Register = () => {
  const cssInput = `w-full p-1 text-black outline-none border border-s-[#bdbdbd]
            text-[#bdbdbd] px-[15px] rounded-[3px] h-[47px]`
  const cssLabel = `text-[#212529]`
  
  return (
    <div className='flex p-5'>
      <div className='flex-[2] p-4'>
        <p className='mb-4 text-center text-[#333]'>Tạo tài khoản MCI <br />
        Để sử dụng đầy đủ tính năng học lập trình, phân tích dữ liệu và tham gia 
        cộng đồng hơn 500,000 thành viên</p>
        <form className='flex flex-col gap-5'>
          <div>
            <label htmlFor="name"
            className={cssLabel}>UserName:</label><br></br>
            <input id='name' type="text"  
            className={cssInput} required />
          </div>
          <div>
            <label htmlFor="firstname"
            className={cssLabel}>First name:</label><br></br>
            <input id='firstname' type="text"  
            className={cssInput} required />
          </div>
          <div>
            <label htmlFor="lastname"
            className={cssLabel}>Last name:</label><br></br>
            <input id='lastname' type="text"  
            className={cssInput} required />
          </div>
          <div>
            <label htmlFor="email"
            className={cssLabel}>Email:</label><br></br>
            <input id='email' type="email"  
            className={cssInput} required />
          </div>
          <div>
            <label htmlFor="pass"
            className={cssLabel}>Password:</label><br></br>
            <input id='pass' type="password"  
            className={cssInput} required />
          </div>
          <button type='submit'
          className='bg-[#0d6efd] text-white px-[6px]
          py-3 rounded-md hover:bg-blue-500'>Đăng ký</button>
        </form>
      </div>
      <div className='flex-1'>
        <LoginWith title='Tạo tài khoản với' />
      </div>
    </div>
  )
}

export default Register