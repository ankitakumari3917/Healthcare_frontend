import Slider from "react-slick";
import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { Link } from "react-router-dom";

function Hospital_Categories() {
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
      <div className="w-3/4 m-auto mb-20">
      <h1 className="text-[50px] flex flex-col justify-center  items-center text-center text-black font-bold mt-10">
               Our Hospital Partners
              </h1>{" "}
              <p className="font-extrabold text-2xl text-center text-gray-500">
              We offer complete healthcare solutions for your health concerns
                  </p>
        <div className="mt-20">
          <Slider {...settings}>
            {data.map((d) => (
              <div>
                <div className=" rounded-xl h-50 w-50 bg-white h-auto group flex flex-col py-10  hover:bg-neon-blue">
                  <div className=" bg-white flex justify-center items-center rounded-xl group-hover:bg-neon-blue">
                    {" "}
                    <div className="  flex justify-center items-center rounded-full w-[200px] ">
                      <img
                        src={d.img}
                        alt=""
                        className="w-[100px] p-1 group-hover:bg-white bg-blue-100 text-blue-500 rounded-full "
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
    name: "AIIMS",
    img: `../src/assets/hospitalicon.png`,
    but: (
      <Link to="/aiims">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: "FORD",
    img: `../src/assets/hospitalicon.png`,
    but: (
      <Link to="/ford">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: "JAGDISH",
    img: `../src/assets/hospitalicon.png`,
    but: (
      <Link to="/jagdish">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: "IGIMS",
    img: ` ../src/assets/hospitalicon.png`,
    but: (
      <Link to="/igims">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: "MEDANTA",
    img: `../src/assets/hospitalicon.png `,
    but: (
      <Link to="/medanta">
        <button>Book Appointment</button>
      </Link>
    ),
  },
  {
    name: "PARAS",
    img: ` ../src/assets/hospitalicon.png`,
    but: (
      <Link to="/paras">
        <button>Book Appointment</button>
      </Link>
    ),
  },
];

export default Hospital_Categories;