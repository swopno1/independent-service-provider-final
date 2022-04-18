import React from 'react';

const Card = ({ service }) => {
  const { name, img, description, price } = service;

  return (
    <div className='w-[370px] h-[517px] border rounded-md shadow-md'>
      <div className='image w-full h-[288px]'>
        <img className='p-0 rounded-md' src={img} alt='' />
      </div>
      <div className='p-4'>
        <h3 className='text-base font-bold pb-3'>{name}</h3>
        <p className='text-sm'>{description}</p>
        <div className='flex justify-between pt-2'>
          <h4>Price: ${price}</h4>
          <button>Book Your Trip</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
