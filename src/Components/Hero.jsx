import React from 'react'
import { SlArrowDown } from 'react-icons/sl';
const Hero = () => {
  return (
    <div className="relative flex flex-col justify-center  h-screen py-6  lg:pt-0 lg:flex-col lg:pb-0 bg-primary-100">
    <div className="relative flex flex-col  items-start w-full max-w-xl px-4 mx-auto md:px-0 lg:px-8 lg:max-w-screen-xl">
      <div className="mb-16 md:mx-auto lg:my-40 lg:max-w-lg lg:pr-5">
        <p className="inline-block py-px mb-1 text-xs font-semibold tracking-wider text-secondary-100 uppercase rounded-full ">
          Hi, my name is  
        </p>
        <div className=' mt-3 mb-6'>
        <h2 className=" font-lato text-3xl font-bold tracking-widest text-white sm:text-4xl leading-10 ">
          Salman Ali
        </h2>
        <h2 className="font-sans text-3xl font-bold tracking-wide  leading-10 text-primary-50 sm:text-4xl " >
          I build thing for the web
          </h2>
        </div>
        
        <p className="pr-5 mb-5 text-base text-primary-50 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. <span className=' text-secondary-100'>explicabo.</span> 
        </p>
        <div className="flex items-center">
        <button type="button" className="relative inline-flex items-center px-3.5 py-2 border-2 border-[#01f5b4] bg-transparent text-sm text-[#01f5b4] font-medium">
        Checkout my work!
      </button>
        </div>
      </div>
    </div>
    <div
        className="absolute mx-auto bottom-8 left-1/2 transform -translate-x-1/2 "
      >
        <SlArrowDown className=' w-10 h-10 text-secondary-100' />
      </div>
  </div>
  )
}

export default Hero