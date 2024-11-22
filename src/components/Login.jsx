import React from 'react'
import LoginWith from './LoginWith'

const Login = () => {
  return (
    <div className='flex '>
      <div>
        <p>Tạo tài khoản MCI <br />
        Để sử dụng đầy đủ tính năng học lập trình, phân tích dữ liệu và tham gia 
        cộng đồng hơn 500,000 thành viên</p>
        <form>
          <div>
            <label htmlFor="name">Tên Đăng nhập:</label><br></br>
            <input id='name' type="text"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <label htmlFor="name">Mật khẩu:</label><br></br>
            <input id='name' type="password"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <input id='name' type="checkbox"/>
            <label htmlFor="name">Remember</label>
          </div>
          <button type='submit'>Đăng nhập</button>
        </form>
      </div>
      <div>
        <LoginWith title='Đăng nhập với' />
      </div>
    </div>
  )
}

export default Login