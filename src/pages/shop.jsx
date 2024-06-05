import React from 'react';
import Hero from '../components/Hero/Hero';
import Popular from '../components/Popular/Popular';
import Newsletter from '../components/Newsletter/Newsletter';


const shop = () => {
  return (
      <div>
      <Hero />
      <Popular type={'women'} />
      <Popular type={'men'} />
      <Popular type={'bestsellers'} />
      <Newsletter />
      </div>
  )
}

export default shop