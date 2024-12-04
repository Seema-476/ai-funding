import React, { useState } from 'react'
import { FREQUENTLY_ASK_QUESTIONS } from '../common/Helper'
import CommonHeading from '../common/CommonHeading';

const FrequentlyAskQuestions = () => {
    const [accoActive, setAccoActive] = useState(false);

    const toggleAccordion = (index) => {
        setAccoActive(accoActive === index ? false : index);
    };
    return (
        <div className='bg-creamy pt-[60px] pb-[70px]'>
            <div className='max-w-[1240px] mx-auto px-3'>
                <CommonHeading text="Learn more with FAQ" className="pb-7"></CommonHeading>
                <div className='max-w-[1240px] mx-auto px-3 duration-1000 ease-in-out pt-[60px]'>
                    {FREQUENTLY_ASK_QUESTIONS.map((obj, index) => (
                        <div key={index} onClick={() => toggleAccordion(index)} class={`border-b w-full border-silver-gray ${accoActive === index ? '' : ''}`}>
                            <div className='flex items-center justify-between'><p className='font-medium text-lg leading-6 text-dusk-black py-5 px-4 max-md:max-w-[235px]'>{obj.question}</p>
                                <span className={`after:absolute relative after:content-["+"] right-4 bottom-4 ${accoActive === index ? 'after:content-["-"] -top-2 right-4' : ''}`}></span>
                            </div>
                            {accoActive === index && (
                                <p className="font-normal text-lg leading-6 text-dusk-black py-2 px-4">{obj.answer}</p>
                            )}
                        </div>
                    ))}
                </div>
          </div>
       </div>
    )
}

export default FrequentlyAskQuestions