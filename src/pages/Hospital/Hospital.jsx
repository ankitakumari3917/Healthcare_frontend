import Slider from "react-slick";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from "react-router-dom";


import Hospital_Categorie from "./Hospital_Categories";

function Hospital() {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    swipeToSlide: true,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };
  return (
    <>
      <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
        <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
          <span className=" text-white">
            <Link to="/home">Home</Link>
          </span>
          <h4 className="text-gray-400">~Hospitals</h4>
        </div>
      </div>
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
              <select name="State" className="h-10 ">
                <option value>State</option>
                <option value="B"> Bihar</option>
                <option value="D">Delhi</option>
                <option value="UP">Uttar Pradesh</option>
                <option value="WB">West Bengal</option>
                <option value="J">Jharkhand</option>
                <option value="R">Rajsthan</option>
                <option value="MP">Madhya Pradesh</option>
                <option value="AP"></option>
                <option value="AP"></option>
                <option value="AP"></option>
                <option value="AP"></option>
              </select>
            </div>
            <div className="rounded-xl border-solid border-4 border-[#f3f3f7]">
              <input
                placeholder="Doctor/specialization"
                type="text"
                className="h-10 "
              ></input>
              <button className="bg-[#59faf5] h-10 rounded-l ">Search</button>
            </div>
          </div>
        </div>  
        <div className="flex mx-auto ">
          <div className=" w-[200px] h-[200px] p-5 gap-10 flex-row hidden ">
            <img src="../src/assets/c2.jpg" alt="" className="rounded-xl border-solid border-4 border-[#f3f3f7]" />
            <img src="../src/assets/c3.jpg" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]"/>
            <img src="../src/assets/c4.webp" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]"/>
            <img src="../src/assets/c1.avif" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]"/>
            <img src="../src/assets/c5.jpg" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]" />
            <img src="../src/assets/c6.avif" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]"/>
            <img src="../src/assets/c7.avif" alt=""  className="rounded-xl border-solid border-4 border-[#f3f3f7]"/>
                
          </div>
        </div>

        {/* second */}
      </div>
      <div>
        <Hospital_Categorie />
      </div>
    </>
  );
}

export default Hospital;
