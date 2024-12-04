import React from 'react'

const CommonHeading = ({text,className,content}) => {
  return (
    <h2 className={`font-abril font-semibold lg:text-custom-3xl text-custom-2xl leading-9 lg:leading-custom-4xl text-dusk-black text-center ${className}`}>{text}<span className='lg:block'>{ content}</span>
      </h2>
  )
}

export default CommonHeading