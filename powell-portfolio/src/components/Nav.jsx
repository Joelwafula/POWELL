import {HashLink as Link} from "react-router-hash-link"

import { useState} from 'react';

const Nav = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };


  return (
    <header >
      <nav className=" flex flew-row justify-between sm:items-center sm:flex sm:flex-row sm:space-y-10 md:flex-row lg:flex-row  mb-10">
        <img
          src="https://i.pinimg.com/736x/27/09/e4/2709e4b355bbf61eca23449264939e12.jpg"
          className="h-16 w-16 rounded-xl mr-10"
          alt="Logo"
        />
        {/* Show dropdown button only on small devices */}
        <div className="sm:hidden mt-4 ">
          <button
            onClick={toggleDropdown}
            className="border border-black h-10 w-15 p-3"
          >
            Click 
          </button>
          {isDropdownOpen && (
            <div className="absolute top-10 right-0 mt-2 w-40 bg-white border border-gray-300 rounded shadow-md">
              <ul>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#services">Services</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#mission">Mission</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#vision">Vision</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#contacts">Contact</Link>
          </li>
        </ul>
            </div>
          )}
        </div>
        {/* Hide dropdown button on medium and large devices */}
        <div className="hidden sm:flex ">
        <ul className="flex space-x-10">
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#services">Services</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#mission">Mission</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#vision">Vision</Link>
          </li>
          <li className="px-4 py-2 hover:bg-gray-100">
            <Link smooth to="#contacts">Contact</Link>
          </li>
        </ul>
          {/* <div  ">
            <text>About me</text>
            <text>Services</text>
            <text>Contacts</text>
            <text>Project</text>
          </div> */}
        </div>
      </nav>
      <hr className="border-b border-gray-300" />
    </header>
  );
};

export default Nav;
