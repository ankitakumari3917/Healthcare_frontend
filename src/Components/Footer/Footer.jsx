import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaHeart } from "react-icons/fa";
import { Link } from "react-router-dom";

const items = [
  { name: "Facebook", icon: FaFacebook, link: "https://www.facebook.com/" },
  { name: "Instagram", icon: FaInstagram, link: "https://www.instagram.com/" },

  { name: "Github", icon: FaGithub, link: "https://github.com/" },
];
const heart = [{ name: "Heart", icon: FaHeart }];

const Footer = () => {
  return (
    <div className="w-full   bg-gradient-to-r from-[#fefefe] from-10% via-[#f4f4f3] via-30% to-[#e2e7f9] to-90%text-l text-black py-y px-2 mt-10">
      <div className="max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8">
        <ul>
          <h1 className="text-blue-900 font-extrabold">SPECIALIZATION</h1>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/cardio">
              <button>Cardio</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/gynecologist">
              <button>Gynecologist</button>
            </Link>
          </li>
          <li className="hover:text-blue-700  text-gray-500 font-bold">
            {" "}
            <Link to="/surgeon">
              <button>Surgeon</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/dietitian">
              <button>Dietition</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/psychiatrist">
              <button>Psychiatrist</button>
            </Link>{" "}
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/dermatologist">
              <button>Dermatologist</button>
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="text-blue-900 font-extrabold">SPECIALIZATION</h1>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/physician">
              <button>Physician</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/ophthalmologist">
              <button>Ophthalmologist</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/neurologist"></Link> <button>Neurologist</button>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/pediatrician">
              <button>Pediatrician</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/dentist">
              <button>Dentist</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/otolaryngologist">
              <button>Otolaryngologist</button>
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="text-blue-900 font-extrabold">HOSPITAL</h1>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/aiims">
              <button>Aiims</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/ford">
              <button>Ford</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/igims">
              <button>Igims</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/jagdish">
              <button>Jagdish</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/medanta">
              <button>Medanta</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/paras">
              <button>Paras</button>
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="text-blue-900 font-extrabold">ABOUT US</h1>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/appoint">
              <button>Book Appointment</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/login">
              <button>Login</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/register">
              <button>Register</button>
            </Link>
          </li>
       
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/services">
              <button>Services</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            <Link to="/about">
              <button>About Us</button>
            </Link>
          </li>
        </ul>
        <ul>
          <h1 className="text-blue-900 font-extrabold">SECTIONS</h1>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/doctor">
              <button>Doctors</button>
            </Link>
          </li>
          <li className="hover:text-blue-700 text-gray-500 font-bold">
            {" "}
            <Link to="/hospital">
              <button>Hospitals</button>
            </Link>
          </li>
          <li className="hover:text-blue-700  text-gray-500 font-bold">
            {" "}
            <Link to="/section">
              <button>Categories</button>
            </Link>
          </li>
        </ul>
        <ul>
        <div className="col-span-2 pt-8 md:pt-2">
          <p className="font-bold uppercase text-2xl">CONNECT WITH US</p>
          <div className="flex gap-10 sm:w-[300px] pt-4 text-xl mx-0 px-0">
            {items.map((x, index) => {
              return <x.icon key={index} className="hover:text-blue-700" />;
            })}
          </div>
        </div>
        </ul>
      </div>

      <div className="flex flex-row px-2 py-1 mx-auto justify-center items-center sm:flex-row text-center text-black font-bold">
        <p className="py-4 flex-row">
          Copyright © 2024 |All rights reserved
          <div></div>
        </p>
      </div>
    </div>
  );
};

export default Footer;
