import Slider from "react-slick";
import React, { useState } from "react";
import { ReactTyped } from "react-typed";
import { Link, useNavigate } from "react-router-dom";
import icn from '../../assets/hos1.jpg';
import icn1 from '../../assets/hos2.jpg';
import icn2 from '../../assets/hos3.jpg';
import icn3 from '../../assets/hos4.jpg';
import icn4 from '../../assets/hos5.jpg';
import icn5 from '../../assets/hos6.jpg';


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
      <img src={icn} />
      </div>
      <div>
      <img src={icn1} />
      </div>
      <div>
      <img src={icn2} />
      </div>
      <div>
      <img src={icn3} />
      </div>
      <div>
      <img src={icn4} />
      </div>
      <div>
      <img src={icn5} />
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