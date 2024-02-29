import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

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
    img: ` ../src/assets/cardiologist.avif`,
    but: (
      <Link to="/cardio">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Gynecologist`,
    img: `../src/assets/gynecologist.avif`,
    but: (
      <Link to="/gynecologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Psychiatrist`,
    img: `../src/assets/psychiatrist.avif`,
    but: (
      <Link to="/psychiatrist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Dietitian`,
    img: `../src/assets/dietitian.jpg`,
    but: (
      <Link to="/dietitian">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Physician`,
    img: ` ../src/assets/physician.avif`,
    but: (
      <Link to="/physician">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Ophthalmologist`,
    img: `../src/assets/ophthalmologist.avif `,
    but: (
      <Link to="/ophthalmologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Surgeon`,
    img: ` ../src/assets/surgeon.avif`,
    but: (
      <Link to="/surgeon">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Otolaryngologist`,
    img: ` ../src/assets/otolaryngologist.avif`,
    but: (
      <Link to="/otolaryngologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `dermatologist`,
    img: ` ../src/assets/dermatologist.avif`,
    but: (
      <Link to="/dermatologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Pediatrician`,
    img: ` ../src/assets/pediatrician.jpg`,
    but: (
      <Link to="/pediatrician">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Dentist`,
    img: ` ../src/assets/dentist.avif`,
    but: (
      <Link to="/dentist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: `Neurologist`,
    img: ` ../src/assets/neurologist.avif`,
    but: (
      <Link to="/neurologist">
        <button>Book Appointment</button>
      </Link>
    ),
  },
];

export default Categories;
