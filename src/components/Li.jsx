import React, { useState } from 'react'
import { FaSortDown } from "react-icons/fa";
import SubMenu from './SubMenu';
import { Link } from 'react-router-dom';


const Li = ({item}) => {
  return (
    <li
    className='flex items-center pl-4 cursor-pointer inline-block hover:text-black
    duration-500 ease-linear relative text-[16px] p-2 whitespace-nowrap'>
      {item.title || item} 
      <span className='pb-[5px]'> {item.subMenu && <FaSortDown />}</span>
      {
        item.subMenu && <SubMenu data={item.subMenu} />
      }
    </li>
  )
}

export default Li