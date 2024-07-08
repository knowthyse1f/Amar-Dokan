import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png'; // Adjust the path as per your project structure

const Navbar = () => {
  return (
    <div className="navbar md:px-16 px-4 py-0 bg-slate-300">
      <div className="navbar-start ">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
        </div>
        <Link to="/" className="items-center lg:flex rounded-md">
          <img src={logoImage} alt="Amar-Dokan Logo" style={{ width: '60px', height: 'auto' }} />
          <span className="ml-2 text-xl text-gray-600"> <a>Amar Dokan</a></span>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Item 1</a></li>
          <li>
            <details>
              <summary>Parent</summary>
              <ul className="p-2">
                <li><a>Submenu 1</a></li>
                <li><a>Submenu 2</a></li>
              </ul>
            </details>
          </li>
          <li><a>About</a></li>
        </ul>
      </div>
      <div className="navbar-end md:px-4 py-3">
        <button className='bg-black text-white px-2 py-2 rounded-md' style={{ marginRight: '9px' }}>
          <Link to="/login" className="">
            Login
          </Link>
        </button>
        <button className='bg-black text-white px-2 py-2 rounded-md'>
          <Link to="/sign-up" className="">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
