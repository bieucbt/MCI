import React from 'react'
import { blogDetailBanner } from '../assets'
import Heading from './Heading'
import { asideBlog, dataSelectForm } from '../data/asideBlog'

const AsideBanerBlog = () => {
  return (
    <aside>
      <img src={blogDetailBanner} alt="" />
      <div>
        <Heading cssHr={'w-[169px]'}>Các khóa học</Heading>
        <ul>
          {
            asideBlog.map((item, i) => <li key={i}
            className='border-dotted border-b-[2px] border-gray-400
            py-8'><span className='cursor-pointer font-bold'>{item}</span></li>)
          }
        </ul>
      </div>
      <form className='bg-primaryColor rounded-md p-3 text-white flex 
      flex-col gap-3'>
        <h3 className='text-[20px] font-bold  text-center'>ĐĂNG KÝ TƯ VẤN <br></br>
        KHÓA HỌC</h3>
        <div>
          <label htmlFor="name">Họ và tên*:</label><br></br>
          <input id='name' type="text"  
          className='w-full p-1 text-black'required />
        </div>
        <div>
          <label htmlFor="email">Email*:</label><br></br>
          <input id='email' type="email"  
          className='w-full p-1 text-black'required />
        </div>
        <div>
          <label htmlFor="phone">Số điện thoại*:</label><br></br>
          <input id='phone' type="text"  
          className='w-full p-1 text-black'required />
        </div>
        <div>
          <select name="course" className='w-full text-black'>
            {
              dataSelectForm.map((opt, i) => <option key={i}>{opt}</option>)
            }
          </select>
        </div>
        <button type='submit'
        className='bg-black text-white p-1 font-bold mt-3'>Đăng ký tư vấn</button>
      </form>
    </aside>
  )
}

export default AsideBanerBlog