import React from 'react'
import Header from './Header'
import CommonParagraph from '../common/CommonParagraph'
import CommonButton from '../common/CommonButton'
import graphImg from '../assets/images/webp/hero-graph.webp'
import forcastedImg from '../assets/images/webp/forecasted-revenue.webp'
import upcomingImg from '../assets/images/webp/upcoming-funds.webp'
import starImg from '../assets/images/svg/star.svg'
import shortGraphImg from '../assets/images/webp/short-graph.webp'
import fundsImg from '../assets/images/webp/funds.webp'

const Hero = () => {
    return (
        <div className='bg-hero-bg bg-cover bg-no-repeat bg-center'>
            <Header />
            <div className='pt-[263px] xl:pb-[224px] lg:pb-40 pb-16'>
                <div className='max-w-[1197px] ml-auto lg:mr-14 mr-auto px-3 flex justify-between max-lg:flex-wrap max-lg:flex-col-reverse max-lg:justify-center'>
                    <div className='max-lg:w-full mt-24 lg:mt-0 max-lg:flex max-lg:justify-center'>
                        <div>
                            <h1 className='font-abril font-bold lg:text-custom-6xl text-custom-4xl lg:leading-custom-6xl leading-custom-5xl text-white max-w-[478px] lg:pb-6 pb-3'>Get AI funding for your store</h1>
                            <CommonParagraph text="AI technology that predicts, plans, and protects your cash flow." className="lg:max-w-[408px] max-w-[340px] lg:pb-6 pb-3"></CommonParagraph>
                            <CommonButton text="Get funded"></CommonButton>
                        </div>
                    </div>
                    <div>
                        <div className='relative'>
                            <img src={graphImg} alt="graph" className='max-w-[247px] w-full lg:block hidden' />
                            <img src={shortGraphImg} alt="graph" className='lg:hidden block max-w-[160px] ml-auto -mr-3' />
                                <img src={fundsImg} alt="fund" className='w-[159px] absolute -bottom-3 right-11 lg:hidden' />
                            <div className='absolute -bottom-6 -right-9 lg:block hidden'>
                                <img src={forcastedImg} alt="forcaste" className='max-w-[147px]' />
                            </div>
                            <div className='absolute -top-10 -left-11 lg:block hidden'>
                                <img src={upcomingImg} alt="upcoming" className='max-w-[159px]' />
                            </div>
                        </div>
                        <div className='bg-sales-serge bg-center bg-cover bg-no-repeat lg:block hidden rounded-xl py-3 ps-3 pe-[15px] max-w-[280px] -translate-x-20 translate-y-7'>
                            <div className='flex gap-1'>
                                <div>
                                    <img src={starImg} alt="star" />
                                </div>
                                <p className='font-medium text-xs text-white pb-3'>SALES SURGE</p>
                            </div>
                            <p className='border-b-[1.5px] w-full gradient-border'></p>
                            <p className='font-normal text-sm leading-5 text-off-white pt-2'>Sales predictions have shifted up by 7% this month, time to re-evaluate.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero