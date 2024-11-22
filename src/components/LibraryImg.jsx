import React from 'react'
import { square1, square2, rectangle1, rectangle2 } from '../assets'
import Heading from './Heading'

const LibraryImg = () => {
  return (
    <section className='bg-[#F0F0F0] p-9'>
      <div className='flex justify-center'>
        <Heading>Thư viện ảnh</Heading>
      </div>
      <div className='grid grid-cols-3 mt-5 max-lg:grid-cols-2'>
        <img src={rectangle1} alt="img" className='col-span-2 rounded-md' />
        <img src={square1} alt="img" />
        <img src={square2} alt="img" />
        <img src={rectangle2} alt="img" className='col-span-2 rounded-md' />
      </div>
    </section>
  )
}

export default LibraryImg