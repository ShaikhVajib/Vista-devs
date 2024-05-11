import React from 'react'
import '../../index.css';
import './Footer.css';
import logo from "../../assets/logo.svg";
import { NavLink } from 'react-router-dom';


function Footer() {
  return (
    <>
      <footer className="shadow">
        <div className="max-w-screen-xl flex flex-wrap gap-x-5 max-xl:gap-12 m-auto justify-between py-16 px-5">
          <div className="logo-section w-2/5 max-xl:w-2/5 max-sm:w-full max-sm:flex max-sm:flex-col max-sm:justify-center max-sm:text-center">
            <img src={logo} className="h-8 header-logo mb-5 max-sm:justify-center" alt="Logo" />
            <p className="text-white pr-20 max-xl:pr-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur quas et facere sed adipisci eos.
            </p>
          </div>
          <div className="navigation max-sm:text-center w-1/4 max-xl:w-2/5  max-sm:w-full">
            <ul>            <li>
              <NavLink
                to="/"
                className=" ${isActive ? '' : ''} block py-3 px-3 text-white rounded md:bg-transparent  md:p-0 "
                aria-current="page"
              >
                Home
              </NavLink>
            </li>
              <li>
                <NavLink
                  to="/about"
                  className="${isActive ? '' : ''} block py-3 px-3 rounded text-white md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  About
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/services"
                  className="${isActive ? '' : ''} block py-3 px-3 rounded text-white md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  Services
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/contact"
                  className="${isActive ? '' : ''} block py-3 px-3 rounded text-white md:hover:bg-transparent md:border-0 md:p-0 "
                >
                  Contact
                </NavLink>
              </li>
            </ul>

          </div>
          <div className="contact-details-section w-1/4 max-xl:w-2/5 max-sm:text-center max-sm:w-full">
            <h3 className="text-white mb-3 text-3xl" >Get in touch</h3>
            <ul className='text-white'>
              <li className='mb-3'>Location xyz...</li>
              <li>12 3465 7890</li>
            </ul>
          </div>
        </div>
        <div className="copyright-section border-t border-gray-600 w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between max-sm:text-center">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="/" className="hover:underline">Vista™</a>. All Rights Reserved.
          </span>
          <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0 max-sm:justify-center">
            <li>
              <a href="#" className="hover:underline me-4 md:me-6">Privacy Policy</a>
            </li>
            <li>
              <a href="#" className="hover:underline">Contact</a>
            </li>
          </ul>
        </div>
      </footer>

    </>
  );
}

export default Footer
