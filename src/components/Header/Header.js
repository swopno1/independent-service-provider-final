import React from 'react';
import Nav from '../Nav/Nav';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='w-full  bg-slate-800 shadow-lg'>
      <div className='top-bar container mx-auto flex justify-between items-center border-b border-b-[rgba(255,255,255,0.5)] shadow'>
        <div className='main-logo w-1/5'>
          <h1 className='text-orange-500 text-2xl font-extrabold '>
            <Link to='/'>
              TravelGeeks<span className='text-white'>BD</span>
            </Link>
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
        <div className='user-menu text-right flex justify-end w-1/5 text-white'>
          <Link to='/signin'>SignIn</Link>
          <Link className='ml-4' to='/register'>
            Register
          </Link>
        </div>
      </div>
      <Nav></Nav>
    </header>
  );
};

export default Header;
