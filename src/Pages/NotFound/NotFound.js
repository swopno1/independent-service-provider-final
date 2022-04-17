import React from 'react';

const NotFound = () => {
  return (
    <div className='container mx-auto'>
      <img
        className='rounded-lg w-3/4 mx-auto my-6'
        src='https://i.ibb.co/HpCT5mW/notfound.jpg'
        alt='404 Page Not Found'
      />
      <h2 className='text-center font-extrabold text-4xl text-orange-500 my-6'>
        Page Not Found
      </h2>
      <p className='text-center text-xl'>Please check the link again!</p>
    </div>
  );
};

export default NotFound;
