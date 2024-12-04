import React from 'react'
import girlImg from '../assets/images/webp/girl.webp'
import CommonHeading from '../common/CommonHeading'
import CommonParagraph from '../common/CommonParagraph'
import CommonButton from '../common/CommonButton'
import revenueGraphImg from '../assets/images/webp/revenue-graph.webp'
import vectorOneImg from '../assets/images/svg/vector-one.svg'

const RevenueForcasting = () => {
  return (
      <div className='bg-creamy xl:py-[120px] md:py-24 pt-[60px] pb-14'>
          <div className='max-w-[944px] w-full mx-auto px-3'>
              <div className='flex justify-between max-xl:flex-col-reverse max-xl:items-center'>
                  <div>
                      <div className='relative xl:mt-0 mt-20'>
                          <img src={girlImg} alt="girl" className='lg:max-w-[480px] max-w-[387px] w-full' />
                          <div className='absolute -left-20 bottom-24'>
                              <img src={revenueGraphImg} alt="graph" className='lg:w-[218px] w-[175px]' />
                          </div>
                      </div>
                  </div>
                  <div className='max-w-[364px]'>
                          <img src={vectorOneImg} alt="vector" className='pb-[14px] max-xl:mx-auto' />
                          <CommonHeading text="Get an AI evaluation of your supply" content="chain needs" className="md:max-w-[364px] max-w-[296px] xl:text-start"></CommonHeading>
                          <CommonParagraph text="By analyzing your sales velocity and growth potential." className="!text-dusk-black lg:max-w-[333px] max-w-[320px] pt-1 pb-5 max-xl:text-center"></CommonParagraph>
                          <CommonButton text="Apply now" className="py-[6px] px-5 max-xl:flex mx-auto"></CommonButton>
                  </div>
                  </div>                     
              </div>
          </div>
  )
}

export default RevenueForcasting