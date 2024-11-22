import React from 'react'
import LiMobile from './LiMobile'

const SubmenuMobile = ({data}) => {
  return (
    <ul className=' bg-white w-full '>
      {
        data.map((item, i) => <LiMobile key={i} item={item} />)
      }
    </ul>
  )
}

export default SubmenuMobile