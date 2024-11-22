import React from 'react'

const Register = () => {
  return (
    <div className='flex'>
      <div>
        <p>Tạo tài khoản MCI <br />
        Để sử dụng đầy đủ tính năng học lập trình, phân tích dữ liệu và tham gia 
        cộng đồng hơn 500,000 thành viên</p>
        <form>
          <div>
            <label htmlFor="name">UserName:</label><br></br>
            <input id='name' type="text"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <label htmlFor="name">First name:</label><br></br>
            <input id='name' type="text"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <label htmlFor="name">Last name:</label><br></br>
            <input id='name' type="text"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <label htmlFor="name">Email:</label><br></br>
            <input id='name' type="email"  
            className='w-full p-1 text-black' required />
          </div>
          <div>
            <label htmlFor="name">Password:</label><br></br>
            <input id='name' type="password"  
            className='w-full p-1 text-black' required />
          </div>
          <button type='submit'>Đăng ký</button>
        </form>
      </div>
      <div>
        <LoginWith title='Tạo tài khoản với' />
      </div>
    </div>
  )
}

export default Register