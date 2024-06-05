import React from 'react';
import './ItemCard.css';

const ItemCard = (props) => {
  return (
    <div className="card w-96 bg-base-100 product-card rounded-xl">
        <figure><img src={props.Img} alt="Shoes" className='card-image'/></figure>
        <div className="card-body content">
            <h2 className="card-title text-base font-medium">{props.name}</h2>
              <div className='flex gap-4 items-center'>
                <p className='text-lg font-medium text-[#01d449] w-fit'>₹{props.newPrice}/-</p>
                <p className='text-sm font-medium line-through w-fit'>₹{props.oldPrice}/-</p>
              </div>
              
        </div>
    </div>
  )
}

export default ItemCard