import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import dietitianImage from "../../assets/dietitian.jpg";

import cardioI from '../../assets/cardiologist.avif';
import gyneI from "../../assets/gynecologist.avif";
import phyI from "../../assets/psychiatrist.avif";
import physI from "../../assets/physician.avif";
import opthI from "../../assets/ophthalmologist.avif";
import surI from "../../assets/surgeon.avif";
import otoI from "../../assets/otolaryngologist.avif";
import derI from "../../assets/dermatologist.avif";
import pediI from "../../assets/pediatrician.jpg";
import dentI from "../../assets/dentist.avif";
import neurI from "../../assets/neurologist.avif";


import { Link } from "react-router-dom";

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 100,
  };
  return (
    <>
      <div className="w-3/4 m-auto ">
        <h1 className="text-[50px] flex flex-col justify-center  items-center text-center text-black font-bold mt-10">
          Our Specialization
        </h1>{" "}
        <p className="font-extrabold text-2xl text-center text-gray-500">
          We offer complete healthcare solutions for your health concerns
        </p>
        <div className="mt-20 ">
          <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className=" rounded-xl h-50 w-50 bg-white h-auto group flex flex-col  pb-10 hover:bg-neon-blue">
                  <div className=" bg-white flex justify-center items-center  rounded-xl group-hover:bg-neon-blue">
                    {" "}
                    <div className="  flex justify-center items-center  h-[60%]">
                      <img
                        src={d.img}
                        alt=""
                        className=" group-hover:bg-white bg-blue-100 text-blue-500 "
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center  justify-center gap-4 p-4">
                    <p className="text-3xl  font-extrabold group-hover:text-white text-black">
                      {d.name}
                    </p>
                  </div>
                  <div className=" flex justify-center items-center">
                    <button className=" group-hover:text-white text-neon-blue border-2 border-neon-blue  group-hover:border-white text-lg px-6 py-4 rounded-xl">
                      {d.but}{" "}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </>
  );
}

const data = [
  {
    name: ` Cardiologist`,
    img: cardioI,
    but: (
      <Link to="/cardio">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Gynecologist`,
    img: gyneI,
    but: (
      <Link to="/gynecologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Psychiatrist`,
    img: phyI,
    but: (
      <Link to="/psychiatrist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Dietitian`,
    img:  dietitianImage  ,
    but: (
      <Link to="/dietitian">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Physician`,
    img: physI,
    but: (
      <Link to="/physician">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Ophthalmologist`,
    img: opthI,
    but: (
      <Link to="/ophthalmologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Surgeon`,
    img: surI,
    but: (
      <Link to="/surgeon">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Otolaryngologist`,
    img: otoI,
    but: (
      <Link to="/otolaryngologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `dermatologist`,
    img: derI,
    but: (
      <Link to="/dermatologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Pediatrician`,
    img: pediI,
    but: (
      <Link to="/pediatrician">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Dentist`,
    img: dentI,
    but: (
      <Link to="/dentist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Neurologist`,
    img: neurI,
    but: (
      <Link to="/neurologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
];

export default Categories;
