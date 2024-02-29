
import React from "react";
import { Link } from "react-router-dom";

function About() {
  return (
    <div className=" my-0">
      <div
        className="h-[260px]  font-serif mb-0 pb-0 bg-[#000038]
      font-extrabold flex align-middle items-center justify-center text-5xl text-white"
      >
        ABOUT US
      </div>
      <div className="bg-[#000038]  flex align-middle items-center ">
        {" "}
        <div className="w-auto ml-20 bg-[#E36955] px-7 py-3 mb-0  space-x-3 text-xs font-bold text-white">
          <Link to="/home">
            <button>HOME</button>
          </Link>{" "}
          <Link>
            <button>/</button>
          </Link>
          <Link to="/about">
            <button>ABOUT US</button>
          </Link>
        </div>
      </div>
      <div className="p-20 bg-white flex-col  text-gray-500 font-sans-serif flex text-center font-mono text-pretty text-xl">
        <p className="">
          Welcome to Health Care, your premier destination for convenient doctor
          appointments. Our platform streamlines the process of finding and
          booking appointments with trusted healthcare professionals. We
          carefully curate our selection of doctors and specialists, ensuring
          each one meets our rigorous standards for expertise and patient care.
          With user-friendly features and detailed profiles, you can easily
          browse through our network and book appointments that fit your
          schedule. Say goodbye to long wait times and endless phone calls – at
          Health Care, scheduling healthcare has never been easier.
        </p>{" "}
        <p className="pt-10">
          We're committed to empowering individuals to take control of their
          health by providing a seamless and transparent booking experience.
          Thank you for choosing Health Care as your go-to resource for
          accessible and reliable healthcare services.
        </p>
      </div>
      <div className="flex md:flex-row flex-col bg-white ">
        <div className="md:w-[40%]">
          <img className="" src="../src/assets/c7.avif" alt="" />
        </div>
        <div className="md:w-[60%]">
          <div className=" mx-10 flex flex-col">
            <h1 className="text-5xl font-extrabold  text-gray-700 font-serif text-pretty">
              <img className="w-7" src="../src/assets/heart.png" alt="" />{" "}
              Explore Our Available Facilities for Your Healthcare Needs!
            </h1>
            <div className="text-xl text-gray-500 py-10">
              <ul>
                <li>Online appointment booking</li>
                <li>Search functionality to find doctors</li>
                <li>Doctor are there as for your needs or problem</li>
                <li>Specialization filters</li>
                <li>Appointment scheduling system</li>
                <li>Contact information and support</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center  text-pretty text-center bg-white py-20 px-40">
        <img className="w-7" src="../src/assets/heart.png" alt="" />
        <h1 className="text-5xl font-extrabold  text-gray-700 font-serif text-pretty">
          {" "}
          Book Your Appointment Now and Take Control of Your Health Journey!
        </h1>
        <p className="text-xl text-gray-500 pt-8">
          Are you experiencing health concerns and seeking professional
          guidance? Look no further! At Heath Care, we are dedicated to
          providing top-quality healthcare services tailored to meet your needs.{" "}
        </p>
        <p className="text-xl text-gray-500 pt-8">
          Whether you're dealing with a common cold, chronic condition, or
          simply need routine check-ups, our team of experienced and
          compassionate healthcare professionals is here to help. With our
          convenient online appointment booking system, you can easily schedule
          your visit from the comfort of your home.
        </p>{" "}
        <p className="text-xl text-gray-500 pt-8">
          Take charge of your health today and book your appointment now to
          address any health issue you are facing. We look forward to being your
          trusted healthcare partner on your journey to wellness.
        </p>
        <div>
          <div className="w-auto mt-10 bg-[#E36955] px-7 py-3 space-x-3 text-sm font-bold text-white">
            <Link to="/sections">
              <button>Book Appointment</button>
            </Link>
          </div>{" "}
        </div>
      </div>
    </div>
  );
}

export default About;