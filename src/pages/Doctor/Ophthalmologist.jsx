import React from 'react'
import { Link } from "react-router-dom";
function Ophthalmologist({show}) {
  return (
    <>
      <div className="bg-gray-300 m-0 p-0 w-full h-full">
       {show && <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
              <Link to="/home">Home</Link>
            </span>
            <h4 className="text-gray-400">~Ophthalmologist</h4>
          </div>
        </div>}
        <div className="flex align-middle items-center justify-center p-10 bg-blue-200">
          <h1 className="text-3xl font-bold text-blue-700">
            Best Ophthalmologists In India
          </h1>
        </div>
        <div className="md:m-10 flex flex-col md:flex-row  gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start border-2 border-gray-200 hover:border-blue-600 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href=""> Dr. Suresh Joshi</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 38+ Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MS, MCh, FACS, FICS, FCCP
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
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. T S Kler</a>
              </div>
              <p> Speciality: Interventional Cardiologist</p>
              <p>Experience: 30+ Years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MD, DM
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:m-10 flex flex-col md:flex-row   gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Devi Prasad Shetty</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 35+ Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MS, FRCS (Royal College of Surgeons of
                England)
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
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href=""> Dr. Naresh Trehan</a>
              </div>
              <p>
                Qualification: MBBS, Diploma in cardiothoracic surgery in the
                USA
              </p>
              <p>Experience: 40 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MD, DM
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:m-10 flex flex-col md:flex-row  gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href=""> Dr. Ramakant Panda</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 35+ Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, Fellowship in cardiovascular and thoracic
                surgery, M.Ch in cardiovascular and thoracic surgery
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
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href=""> Dr. K.K Talwar</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 41 Years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: M.B.B.S, M.D, D.M
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:m-10 flex flex-col md:flex-row   gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Purushottamlal</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 38 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: M.B.B.S, M.D AB, FRCP, FACM, FICC, FACC, FSCI
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
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Praveen Chandra</a>
              </div>
              <p>Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 31 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualifications- MBBS, MD, DM, FACC, FESC, FSCAI, FAPSIC
              </p>
              <Link to="/appoint">
                <button className="bg-blue-600 p-10 py-3  text-white font-serif rounded-lg">
                  Get Appointment
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="md:m-10 flex flex-col md:flex-row   gap-10">
          <div className="flex flex-col md:flex-row md:w-[50%] justify-start  border-2  hover:border-blue-600 border-gray-200 rounded-lg shadow bg-white hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class=" md:w-[25%] flex items-center justify-center">
              <img
                class="object-cover w-full  h-96 md:h-auto md:w-[100px] md:rounded-full flex items-center justify-center"
                src="../src/assets/doctoricon.png"
                alt=""
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Ajay Kaul</a>
              </div>
              <p> Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 38 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, MS, M.Ch, Fellowship (Germany)
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
                // class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
                // src="../src/assets/doctoricon.png"
                // alt=""
              />
            </div>
            <div class="flex flex-col justify-between p-4 leading-normal">
              <div class="uppercase tracking-wide text-xl text-indigo-500 font-semibold">
                <a href="">Dr. Tejas Patel</a>
              </div>
              <p>Speciality: Pediatric Cardiac Surgeon</p>
              <p>Experience: 38 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Qualification: MBBS, M.D, D.M
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
  )
}

export default Ophthalmologist