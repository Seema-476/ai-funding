import React from 'react'
import {PLATFORM_DATA} from '../common/Helper'

const Platform = () => {
    return (
        <div className='bg-dusk-black lg:pt-12 lg:pb-14 py-[60px] mt-[-2px]'>
            <div>
                <p className='font-medium text-sm leading-custom-2xl text-white text-center md:hidden pb-8'>MAIN SUPPORTED PLATFORM</p>
                <div className='max-w-[739px] mx-auto flex gap-[52px] flex-wrap items-center justify-center'>
                    <p className='font-medium text-sm leading-custom-2xl text-white md:block hidden'>MAIN SUPPORTED PLATFORM</p>
                    {PLATFORM_DATA.map((obj, index) => (
                        <a href={obj.link} target='blank' key={index}><img width={obj.maxWidth} src={obj.logoimage} alt="logo" /></a>
                    ))}
                </div>
           </div>
        </div>
    )
}

export default Platform