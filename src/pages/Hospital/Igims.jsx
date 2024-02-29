import Slider from "react-slick";
import React from "react";
import { Link } from "react-router-dom";


function Igims() {
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
      <div className="bg-blue-900 h-[100px] w-full m-10 flex align-middle justify-center items-center text-white">
          <h1 className="font-bold text-3xl">Our Doctors</h1>
        </div>
      <div>
        <div className="md:m-10 flex flex-col md:flex-row   gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Manoj Kumar</a>
              </div>
              <p> Speciality: General Surgeon</p>
              <p>Experience: 17 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MS, FRCS
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Utpal Anand</a>
              </div>
              <p>Speciality: Surgical Gastroenterologist, Patna</p>
              <p>Experience: 15 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification:MS (SURGERY), MCH (GASTRO SURGERY)
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="md:m-10 flex flex-col md:flex-row   gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Sony Sinha</a>
              </div>
              <p> Speciality:Ophthalmologist</p>
              <p>Experience: 17 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification:MBBS, MS (Ophthalmology)
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 ">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Ritesh Pandey</a>
              </div>
              <p>Speciality:Pediatric Orthopedic Surgeon</p>
              <p>Experience: 15 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification:MBBS, MS Ortho, Fellowship In Paed Ortho,
                Fellowship In Ilizarov And Deformity Correction
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
     
    </>
  );
}

export default Igims;
