import React, { useState } from 'react'
import { IoSearchSharp } from 'react-icons/io5'

const Input = () => {
  const [text, setText] = useState('')
  const [focus, setFocus] = useState(false)

  return (
    <div className={`w-4/5 relative border border-s-gray-400
      rounded-3xl px-3 py-[6px] ${focus && 'afterInput border-blue-600'} bg-white
      mx-auto  mt-[30px] mb-[20px]`}>
        <div className='absolute left-0 top-[50%] translate-y-[-40%] 
        pl-2 '>
          {
            text.length <= 0 && 
         <label htmlFor='input' className='text-gray-400 select-none flex items-center gap-3' > 
          <IoSearchSharp className='text-gray-400 select-none'size={20} /> Tìm kiếm bài viết ...</label>
          }
        </div>
        <input id='input' type="text" className='w-full h-full bg-transparent outline-none'
        onChange={(e) => setText(e.target.value)}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}/>
      </div>
  )
}

export default Input