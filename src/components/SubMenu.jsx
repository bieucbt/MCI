import React from 'react'
import Li from './Li'

const SubMenu = ({data}) => {
  
  return (
    <ul className='submenu absolute top-full left-0 bg-white w-max 
    min-w-[200px] h-max rounded-lg '>
      {
        data.map((item, i) => <Li key={i} item={item} />)
      }
    </ul>
  )
}

export default SubMenu