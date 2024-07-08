import React from 'react';
import { Link } from 'react-router-dom';
import logoImage from '../../assets/logo.png'; // Adjust the path as per your project structure
import   '../../App.css';

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
          <span className="ml-2 text-xl text-gray-600 font-bold"> <a>Amar Dokan</a></span>
        </Link>
      </div>
      <div className="navbar-center  hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Our Brand</a></li>
          <li>
            <details>
              <summary>Departments</summary>
              <ul className="p-2 bg-slate-300">
                <li><a>Food Iteams</a></li>
                <li><a>Cloth Iteams</a></li>
                <li><a>Electronics</a></li>
              </ul>
            </details>
          </li>
          <li><a>About</a></li>
        </ul>
      </div>
      <div className='w-[40%] ml-4 relative'>
      <label className="input h-[40px] w-[600px] border-[2px] rounded-md flex items-center">
          <input type="text" className="grow" placeholder="Search product......."  />
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
              className="h-4 w-4 opacity-70">
               <path
                fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
             clipRule="evenodd" />
         </svg>
     </label>
      </div>
      <div className="navbar-end md:px-4 py-3">
        <button className='button-hover'>
          <Link to="/login" className="">
            Login
          </Link>
        </button>
        <button className='button-hover'>
          <Link to="/sign-up" className="">
            Sign Up
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
