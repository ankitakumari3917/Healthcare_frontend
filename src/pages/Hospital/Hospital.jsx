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
      <div>
    <Slider {...settings}>
     
      <div>
      <img src="../src/assets/hos1.jpg" />
      </div>
      <div>
      <img src="../src/assets/hos2.jpg" />
      </div>
      <div>
      <img src="../src/assets/hos3.jpg" />
      </div>
      <div>
      <img src="../src/assets/hos4.jpg" />
      </div>
      <div>
      <img src="../src/assets/hos5.jpg" />
      </div>
      <div>
      <img src="../src/assets/hos6.jpg" />
      </div>
    </Slider>
  </div>
        

        {/* second */}
     
      <div>
        <Hospital_Categorie />
      </div>
    </>
  );
}

export default Hospital;