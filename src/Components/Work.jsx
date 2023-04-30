import React from 'react'
import ResponsiveSlider from './Slider';

const Work = () => {
    const slides = [
        {
          image: 'https://via.placeholder.com/300',
          title: 'Slide 1',
          description: 'This is a brief description of slide 1.',
          link: 'https://example.com/slide-1',
        },
        {
          image: 'https://via.placeholder.com/300',
          title: 'Slide 2',
          description: 'This is a brief description of slide 2.',
          link: 'https://example.com/slide-2',
        },
        // Add more slides as needed
      ];
  return (
    <div className=' relative h-screen pt-12 w-full flex flex-col bg-primary-100 justify-center items-center'>
    <ResponsiveSlider slides={slides} />
    <button type="button" className="relative inline-flex items-center mt-6 px-3.5 py-2 border-2 border-secondary-100 bg-transparent text-sm text-secondary-100 font-medium">
        Github
      </button>
  </div>
  
  )
}

export default Work