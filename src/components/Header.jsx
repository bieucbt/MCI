import React, { useState } from 'react'
import { IoIosMenu } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { logo } from '../assets'
import Menu from './Menu';
import './header.css'
import MenuMobile from './MenuMobile';
import { Link } from 'react-router-dom';
import FromLogin from './FromLogin';

const Header = () => {
  const [showSearch, setShowSearch] = useState(false)
  const [menuMobile, setMenuMobile] = useState(false)
  const [loginForm, setLoginForm] = useState(false)
  return (
    <header className='flex items-center justify-between p-[10px] bg-main
    text-white sticky z-50 top-0'>
      {loginForm && <FromLogin setLoginForm={setLoginForm} />}
      <div className='flex items-center'>
        <Link to='/'><img src={logo} alt="logo" width={200} height={90} className='logo' /></Link>
        <nav className='relative'>
          <Menu />
          <IoIosMenu className='xl:hidden cursor-pointer' size={37}
          onClick={() => setMenuMobile(true)}  />
          {
            menuMobile && <MenuMobile menuMobile={menuMobile} setMenuMobile={setMenuMobile} />
          }
        </nav>
      </div>
      <div className='flex items-center gap-4'>
        <div className='flex items-center gap-2'>
          <FaSearch size={25} 
          className='cursor-pointer'
          onClick={() => setShowSearch(!showSearch)} />
          {
            showSearch && <input type="text" placeholder='Tìm kiếm Blog, Sách, Khóa học...'
            className='w-[250px] h-10 rounded-[20px] text-black pl-2'  />
          }
        </div>
        <button className='px-6 py-[6px] bg-white text-black rounded-2xl
        hover:bg-[#E87500] hover:translate-y-[-10px] duration-300 ease-linear
        hover:text-inherit border-none '
        style={{boxShadow: '5px 5px 8px rgba(0,0,0,0.4)'}}
        onClick={() => setLoginForm(true)} >Đăng nhập</button>
      </div>
    </header>
  )
}

export default Header