import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import About from "../Components/About/About";
import Findandbook from "../Components/Book/Findandbook";
import Component from "./Doctor/Component";

function Home() {
  const [searchInput, setIn] = useState();
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate(`/${searchInput}`);
  };
  return (
    <div className="">
      {/* first */}
      <div className=" bg-[#000038]  py-[100px] mx-auto">
        <div className="text-center">
          <h3 className="text-white font-bold text-5xl py-[20px]">
            BOOK N MEET A DOCTOR !
          </h3>
          <ReactTyped
            className="bg-white text-2xl font-bold"
            strings={[
              "Prevention of yesterday",
              "Awareness today",
              "healthier tomorrow",
            ]}
            typespeed={100}
            loop={true}
            backSpeed={100}
          />
          <p className="text-white py-[10px] font-semibold">
            India's best online appointement scheduling platform
          </p>
          <div className="flex gap-5 justify-center py-[30px]">
           
            <div className="rounded-xl border-solid border-4 border-[#f3f3f7]">
              <input
                placeholder="Doctor/specialization"
                type="text"
                className="h-10 "
                onChange={(e) => setIn(e.target.value)}
              ></input>
              <button onClick={handleNavigate} className="bg-[#59faf5] h-10 rounded-l ">Search</button>
            </div>
          </div>
        </div>
      
        {/* second */}
      </div>
      <div className="text-center py-[50px] bg-gray-200 mx-auto">
        <h2 className="font-extrabold text-2xl">
          PROVIDING THE BEST MEDICAL SERVICES
        </h2>
        <p className="text-l font-semibold">
          world-class care for everyone.Our health System offers
          unmatched,expert health care
        </p>
        <div className="flex py-[50px] gap-[100px] ">
         
         
         
          <div className="bg-white ml-20  rounded-lg m-3 h-[350px] w-[300px] ">
            <div className=" ">
              <img src="../src/assets/location.png" className=" h-[100px] w-[100px]  mr-auto ml-auto"></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7] mt-10">
              Find a Doctor
            </h3>
            <div>
              {" "}
              First class care for everyone. Our health System offers
              unmatched,expert health care . From the lab to clinic{" "}
            </div>
            <Link
              to="/sections"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>

          <div className="bg-white ml-20  rounded-lg m-3 h-[350px] w-[300px] ">
            <div>
              <img src="../src/assets/know.png " className=" h-[100px] w-[100px]  mr-auto ml-auto"></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7] mt-10">
              Know Your Doctors
            </h3>
            <div>
              {" "}
              Know your Doctor to book confirmed <br />
              doctor Appointment effortlessly
              <br /> with clinic details{" "}
            </div>
            <Link
              to="/doctor"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>
          <div className="bg-white ml-20  rounded-lg m-3  h-[350px] w-[300px] ">
            <div>
              <img src="../src/assets/appoint.png" className=" h-[100px] w-[100px]  mr-auto ml-auto"></img>
            </div>
            <h3 className="font-semibold text-xl text-[#3f89f7] mt-10">
              Book Appointment
            </h3>
            <div>
              {" "}
              Empowering with Google verified <br /> SMS & dynamic Email
              notifications
              <br />. Confirmed Doctor Appointment.
            </div>
            <Link
              to="/doctor"
              className="w-[44px] h-[44px] rounded-full border border-solid border-[#181A1E mt-[30px] mx-auto flex items-center justify-center group hover:bg-primaryColor hover:border-none"
            >
              <FaCircleArrowRight className=" group-hover:text-white w-6 h-5 " />
            </Link>
          </div>
        </div>
      </div>
      {/* third */}
      <div className="mx-auto">
      
      </div>
      <div>
        <Component/>
      </div>
      <div>
        <Findandbook />
      </div>
        
    </div>
  );
}

export default Home;
