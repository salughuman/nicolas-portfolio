import React from 'react'
import { SlArrowDown } from 'react-icons/sl';
const Aboutme = () => {
  return (
    <div className="relative flex flex-col justify-center h-screen py-16 lg:pt-0  lg:pb-0 bg-primary-100">
    <div className="relative flex flex-col items-start  w-full px-4 md:px-0 lg:px-8 ">
      <div className="mb-16 md:mx-auto lg:my-40 lg:max-w-lg lg:pr-5">
        <h1 className="inline-block py-px mb-4 font-lato text-4xl font-bold tracking-wider text-secondary-100 uppercase rounded-full ">
          About me.  
        </h1>
        <p className="pr-5 mb-5 text-base text-primary-50 md:text-lg">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo. Sed ut perspiciatis unde omnis iste natus error sit voluptatem
          accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
          quae. explicabo.
          <hr className=' border-secondary-100 border-t-2 h-3 w-32 md:w-64 mt-4 ml-56'></hr>
        </p>
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

export default Aboutme