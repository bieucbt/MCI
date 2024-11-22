import React, { useState } from 'react'
import { FaSortDown } from 'react-icons/fa'
import SubMenu from './SubMenu'
import SubmenuMobile from './SubmenuMobile'

const LiMobile = ({item}) => {
  const [submenu, setSubmenu] = useState(false)

  return (
    <li onClick={(e) => {
      e.stopPropagation()
      setSubmenu(!submenu)}}
      className='text-black font-bold text-primaryColor cursor-pointer border-b-[1px] 
      border-b-gray-200 pb-1 mt-2 duration-500 ease-linear transition-all'>
      <div className='flex items-center justify-between'>
        <span>{item.title || item}</span>
        <span className='pb-[5px]'> {item.subMenu && <FaSortDown />}</span>
      </div>
      {submenu && item.subMenu && <SubmenuMobile data={item.subMenu} />}
    </li>
  )
}

export default LiMobile