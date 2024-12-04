import React from 'react'

const CommonButton = ({text,className}) => {
    return (
        <button className={`font-medium text-base text-white py-[10px] px-11 bg-blue rounded-3xl hover:scale-95 duration-700 ${className}`}>{text}</button>
  )
}

export default CommonButton