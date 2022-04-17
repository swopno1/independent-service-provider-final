import React from 'react';
import Nav from '../Nav/Nav';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

const Header = () => {
  return (
    <header className='w-full  bg-slate-800'>
      <div className='top-bar container mx-auto flex justify-between items-center border-b border-b-[rgba(255,255,255,0.5)] shadow'>
        <div className='main-logo w-1/5'>
          <h1 className='text-orange-400 text-2xl font-extrabold'>
            TravelGeeks<span className='text-white'>BD</span>
          </h1>
        </div>

        <div className='search-box w-3/5 text-center px-4 py-4'>
          <input
            className='px-4 py-1 rounded-full w-4/6'
            type='text'
            name='search-box'
            id='search-box'
            placeholder='Search Anything'
          />
        </div>
        <div className='social-icon text-right flex justify-end w-1/5 text-white'>
          <a className='pl-3 text-2xl' href='/'>
            <FaFacebook />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
          <a className='pl-3 text-2xl' href='/'>
            <FaInstagram />
          </a>
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
