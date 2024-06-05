import React from 'react';
import ItemCard from '../ItemCard/ItemCard';
import Img from '../../assets/product/001 product image.jpg';
import './Popular.css';

const Popular = (props) => {
  const n = Array.from({ length: 4 });
  return (
    <div>
      <div className='w-full p-4 py-8'>
        <p className='text-center text-3xl p-2 font-semibold border-b-2 w-fit mx-auto mb-8'>
          {
            props.type === 'women' ? 'Popular in Women' :
              props.type === 'men' ? 'Popular in Men' :
                'Best Sellers'
          }
        </p>
        <div className='flex w-full justify-evenly'>
          {
        n.map((_, index) => {
          return (
            <ItemCard key={index} Img={Img} name={'Mens Checkerd shirt Red'} oldPrice={1000} newPrice={800} />
          )
        })
      }
        </div>
      </div>
    </div>
  )
}

export default Popular