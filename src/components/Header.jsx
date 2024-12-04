import React from 'react'
import aiLogoImg from '../assets/images/webp/ai-logo.webp'

const Header = () => {
  return (
      <div className=''>
          <div className='max-w-[1433px] mx-auto px-3'>
              <div className='flex items-center h-20'>
                  <a href="#"><img src={aiLogoImg} alt="logo" className='w-[50px]' /></a>
              </div>
         </div>
    </div>
  )
}

export default Header