import React from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { id: 1, name: 'Home', ref: '/home' },
  { id: 2, name: 'About Me', ref: '/about' },
  { id: 3, name: 'Services', ref: '/services' },
  { id: 4, name: 'Blog', ref: '/blog' },
  { id: 5, name: 'Contact Me', ref: '/contact' },
];

const Nav = () => {
  return (
    <nav className='container mx-auto bg-transparent'>
      <ul className='flex justify-center text-white'>
        {navItems.map((item) => (
          <li className='py-3 px-10' key={item.id}>
            <Link to={item.ref}>{item.name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;
