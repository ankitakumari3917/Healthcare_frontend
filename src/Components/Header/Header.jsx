import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="flex-shrink-0 flex-row">
          <div className="gap-2 flex">
            {" "}
            <img className="w-12 h-12" src={logo}></img>
            <div className="text-3xl font-bold">Healthcare</div>
          </div>
        </div>
        <div className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a
                href="/"
                className="text-blue-900 hover:text-yellow-500  font-bold
                  capitalize
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-blue-600
                  before:via-blue-400
                  before:to-blue-500
                  hover:before:w-full
                  hover:before:opacity-100"
              >
                Home
              </a>
            </li>
            <li>
              <a href="/about" className="text-blue-900 hover:text-yellow-500 capitalize font-bold
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-blue-600
                  before:via-blue-400
                  before:to-blue-500
                  hover:before:w-full
                  hover:before:opacity-100">
                About
              </a>
            </li>
            <li>
              <a
                href="/services"
                className="text-blue-900 hover:text-yellow-500 capitalize font-bold
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                hover:before:w-full
                hover:before:opacity-100"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="/doctor"
                className="text-blue-900 hover:text-yellow-500 capitalize font-bold
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                hover:before:w-full
                hover:before:opacity-100"
              >
                Doctors
              </a>
            </li>
            <li>
              <a
                href="/appointments"
                className="text-blue-900 hover:text-yellow-500 capitalize font-bold
                relative
                cursor-pointer
                transition-all
                duration-500
                before:content-['']
                before:absolute
                before:-bottom-2
                before:left-1/2
                before:-translate-x-1/2
                before:w-0
                before:h-1
                before:rounded-full
                before:opacity-0
                before:transition-all
                before:duration-500
                before:bg-gradient-to-r
                before:from-blue-600
                before:via-blue-400
                before:to-blue-500
                hover:before:w-full
                hover:before:opacity-100"
              >
                Appointments
              </a>
            </li>
            <li>
              <a
                href="/hospital"
                className="text-blue-900 hover:text-yellow-500  font-bold
                  capitalize
                  relative
                  cursor-pointer
                  transition-all
                  duration-500
                  before:content-['']
                  before:absolute
                  before:-bottom-2
                  before:left-1/2
                  before:-translate-x-1/2
                  before:w-0
                  before:h-1
                  before:rounded-full
                  before:opacity-0
                  before:transition-all
                  before:duration-500
                  before:bg-gradient-to-r
                  before:from-blue-600
                  before:via-blue-400
                  before:to-blue-500
                  hover:before:w-full
                  hover:before:opacity-100"
              >
                Hospitals
              </a>
            </li>
            <li>
            <div>
                <Link to="/register">
                  <figure className="w-[45px] h-[50px] rounded-full   text-blue-900 hover:text-yellow-500">
                    <img
                      src="../src/assets/person.png"
                      alt=""
                      className="rounded-full cursor-pointer w-full"
                    ></img>
                  </figure>
                </Link>
              </div>
            </li>
          </ul>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleSidebar}>
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* Sidebar */}
      {isOpen && (
        <div className="bg-gray-800 md:hidden fixed inset-y-0 left-0 w-64 flex flex-col justify-between z-50">
          <div className="px-4 py-8">
            <ul className="flex flex-col space-y-4">
              <li>
                <a href="/" className="text-blue-900 hover:text-yellow-500">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about"
                  className="text-blue-900 hover:text-yellow-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/services"
                  className="text-blue-900 hover:text-yellow-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="/contact"
                  className="text-blue-900 hover:text-yellow-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
      {/* Overlay */}
      {isOpen && (
        <div
          className="md:hidden fixed inset-0 bg-gray-900 bg-opacity-50"
          onClick={toggleSidebar}
        ></div>
      )}
    </nav>
  );
}

export default Header;
