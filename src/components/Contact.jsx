import React from 'react'
import { training1 } from '../assets'

const Contact = ({className, children}) => {
  return (
    <div className={`w-[65px] h-[65px] rounded-full bg-transparent cursor-pointer
    ${ className} overflow-hidden animation-shake`}>
      {children}
    </div>
  )
}

export default Contact