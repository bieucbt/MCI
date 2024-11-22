import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({data, cssImg, cssTitle}) => {
  const navigate = useNavigate()
  return (
    <div className=' '>
        <div className='hover:scale-110'><img src={data.img} alt="post img"
        className={`rounded-[10px] duration-700 ease-linear cursor-pointer ${cssImg}`} /></div>
        <div>
          <h3 className={`text-[20px] text-[#f1692f] font-bold ${cssTitle}`}>{data.title}</h3>
          <p className='text-[16px] text-[#212529]'>{data.content}</p>
        </div>
        <p className='text-primaryColor cursor-pointer text-right mt-2'
        onClick={() => navigate(`blog/${data.id}`,{state: data})}>xem thêm</p>
      </div>
  )
}

export default Card