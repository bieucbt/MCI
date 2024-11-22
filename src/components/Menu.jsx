import React from 'react'
import { menu } from '../data/menu';
import Li from './Li';

const Menu = () => {
  return (
    <ul className='menu flex items-center max-lg:hidden '>
      {
        menu.map((item, i) => <Li key={i} item={item} /> )
      }
    </ul>
  )
}

export default Menu