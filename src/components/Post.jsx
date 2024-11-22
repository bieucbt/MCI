import React, { useState } from 'react'
import { IoSearchSharp } from "react-icons/io5";
import Heading from './Heading';
import { posts } from '../data/postData';
import Card from './Card';
import Input from './Input';


const Post = () => {

  return (
    <div className='mt-5'>
      <Heading>Bài viết mới nhất</Heading>
      <Input />
      <div className=' grid grid-cols-4 gap-6 max-lg:grid-cols-2 max-md:grid-cols-1'>
        {
          posts.map((post, i) => <Card key={i} data={post} />)
        }
      </div>
    </div>
  )
}

export default Post