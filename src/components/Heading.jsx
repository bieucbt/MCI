import React from 'react'

const Heading = ({children, className, cssHr}) => {
  return <div>
    <h3 className={`text-[27px] text-primaryColor 
      inline-block pb-3 ${className}`}>{children}
    <hr className={`w-[224px] h-[7px] bg-primaryColor rounded-lg ${cssHr}`} /> 
    </h3>
  </div>
}

export default Heading