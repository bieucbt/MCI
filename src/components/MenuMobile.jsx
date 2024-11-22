import React, { useState } from 'react'
import { menu } from '../data/menu'
import Heading from './Heading'
import { FaSortDown, FaTimes } from "react-icons/fa";
import SubMenu from './SubMenu';
import Li from './Li';
import LiMobile from './LiMobile';

const MenuMobile = ({menuMobile,setMenuMobile}) => {
  return (
    <div className={`fixed top-[-50%] left-0 right-0 bg-white
    duration-500 ease-linear `}
    style={{top: menuMobile && '0'}}>
      <div className='flex items-center justify-between p-4'>
        <Heading>Trang chủ</Heading>
        <FaTimes size={30} className='text-gray-400 cursor-pointer'
        onClick={() => setMenuMobile(false)} />
      </div>
      <ul className='menuMobile p-4'>
        {
          menu.map((item, i) => <LiMobile key={i} item={item} />)
        }
      </ul>
    </div>
  )
}

export default MenuMobile