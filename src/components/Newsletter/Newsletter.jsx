import React from 'react';
import './Newsletter.css';


const Newsletter = () => {
  return (
      <div className='newsletter items-center justify-center px-4 py-8 md:px-12 md:py-16 gap-6 flex flex-col'>
          <h1 className='font-semibold text-3xl'>Get Notified about Exclusive offers through Email</h1>
          <p className='font-medium text-lg'>Subscribe to our newsletter to stay updated!</p>
          <div className='flex gap-4 w-full md:w-1/3 mx-auto justify-center relative'>
            <input type="email" className='input-md outline-none rounded-full w-full' placeholder='Your email ID' />
            <button className='btn btn-md px-8 btn-primary rounded-full w-fit font-normal text-base absolute right-0'>Subscribe</button>
          </div>
    </div>
  )
}

export default Newsletter