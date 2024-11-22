import React from 'react'
import Heading from '../components/Heading'
import { useLocation, useParams } from 'react-router-dom'
import AsideBanerBlog from '../components/AsideBanerBlog'
import { IoMdMenu } from "react-icons/io";
import Input from '../components/Input'
import { menuBlog } from '../data/asideBlog'

const Blog = () => {
  const {id} = useParams()
  const location = useLocation()
  const post = location.state
  return (
    <div className='p-5'>
      <Input />
      <nav className='my-7'>
        <ul className='flex items-center justify-center'>
          {
            menuBlog.map((item, i) => <li key={i}
            className='border-r-primaryColor border-r-2 mx-2 pr-3
            text-primaryColor font-bold cursor-pointer'>{item}</li>)
          }
        </ul>
      </nav>
      <main>
        <div className='text-primaryColor text-[11px] bg-gray-200 py-3'>
          Trang chủ{'>'} Blog {'>'} Chia sẻ kinh nghiệm {'>'} {post.title}</div>
        <div className='grid grid-cols-4 gap-3 mt-8'>
          <article className='col-span-3'>
            <Heading>{post.title}</Heading>
            <p className='mt-8'>{post.content}</p>
            <div className='mt-4 bg-[#F5F5F5] rounded-[20px] p-5'>
              <div className='flex items-center'>
                <IoMdMenu className='text-primaryColor'size={40} />
                <Heading cssHr={'hidden'} className={'pb-0'}>Nội dung bài viết</Heading>
              </div>
              <ol> 
                <li>Nội dung bài viết</li>
                <li>Nội dung bài viết</li>
                <li>Nội dung bài viết</li>
                <li>Nội dung bài viết</li>
                <li>Nội dung bài viết</li>
              </ol>
            </div>
            <img src={post.img} alt="post" className='mt-5' />
            <p>{post.content}</p>
            <p>{post.content}</p>
          </article>
          <AsideBanerBlog />
        </div>
        
      </main>
    </div>
  )
}

export default Blog