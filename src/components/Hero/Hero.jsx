import React from 'react';
import './Hero.css';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
      <div className='hero-section'>
          <div className='flex flex-col justify-center items-center my-auto mx-auto h-full'>
              <p className='text-3xl text-center italic w-1/2 mb-4'>Fashion is like eating, you shouldn't stick to the same menu.</p>
              <div><Link to='/offers'>
                  <button className='btn btn-primary rounded-full font-medium text-base'>Explore Offers</button>
              </Link></div>
          </div>

      </div>
  )
}

export default Hero