import React from 'react'

const CommonParagraph = ({ text, className}) => {
  return (
      <p className={`font-medium lg:text-custom-xl text-lg lg:leading-custom-3xl text-white ${className}`}>{text}
      </p>
  )
}

export default CommonParagraph