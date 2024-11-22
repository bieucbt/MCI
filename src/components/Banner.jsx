import React, { useEffect, useState } from 'react'
import { banner, bannerMobile } from '../assets'

const Banner = () => {
  const [winResize, setWinResize] = useState(0)
  useEffect(() => {
    window.addEventListener('resize', (e) => {
      setWinResize(e.target.innerWidth)
    })
  }, [])
  return (
    <div>
      {
        winResize <= 1080 ? 
        <img src={bannerMobile}  alt="banner" className='w-full' /> :
        <img src={banner} alt="banner" className='w-full' />
      }
    </div>
  )
}

export default Banner