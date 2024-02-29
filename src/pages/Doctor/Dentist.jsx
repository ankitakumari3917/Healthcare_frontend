import React from "react";
import { Link } from "react-router-dom";

function Dentist({show}) {
  return (
    <>
      <div className="bg-gray-300 m-0 p-0 w-full h-full">
        {show && <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
              <Link to="/home">Home</Link>
            </span>
            <h4 className="text-gray-400">~Dentist</h4>
          </div>
        </div>}
        <div className="flex align-middle items-center justify-center p-10 bg-blue-200">
          <h1 className="text-3xl font-bold text-blue-700">
            Best Dentists In India
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
                <a href="">Dr Ritika Malhotra</a>
              </div>
              <p>Position: Consultant │ Dental Sciences</p>
              <p>Experience: 13 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │MDS (Periodontics)
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
                <a href="">Dr Ateksha Bhardwaj Khanna</a>
              </div>
              <p> Position: Consultant │ Dental Sciences</p>
              <p>Experience: 11 Years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MJDF │ MFDS
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
                <a href="">Dr Sarika Chaudhry Solanki</a>
              </div>
              <p> Position: Director & HOD │ Dental Care</p>
              <p>Experience: 17 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS (Endodontics & Conservative Dentistry) │ MD
                (Dental Lasers) │ Diploma (Health Care)
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
                <a href=""> Dr Rajesh Koppikar</a>
              </div>
              <p>Position: Consultant │ Dental Surgery</p>
              <p>Experience: 28 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS
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
                <a href=""> Dr Uday Mukherjee</a>
              </div>
              <p> Position: Consultant of Oral & Maxillofacial Surgery</p>
              <p>Experience: 27 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS │ FDSRCS
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
                <a href=""> Dr Aman Ahuja</a>
              </div>
              <p>Position: Director</p>
              <p>Experience: 8 Years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ Masters (Immediate Loading Implants) │ Digital
                Smile Design
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
                <a href="">Dr Himanshu Dadlani</a>
              </div>
              <p> Position: Senior Consultant │ Dental Sciences</p>
              <p>Experience: 12 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS (Periodontics)
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
                <a href="">Dr Neeraj Verma</a>
              </div>
              <p>Position: Clinical Director</p>
              <p>Experience: 39 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS
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
                <a href="">Dr Ritu Sharma</a>
              </div>
              <p> Position: Consultant │ Dental Sciences</p>
              <p>Experience: 15 Years</p>
              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS │ Micro-endodontics │ Certification
                Training (Periodontology)
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
                <a href="">Dr Neeraj Verma</a>
              </div>
              <p>Position: Clinical Director</p>
              <p>Experience: 39 years</p>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {" "}
                Education: BDS │ MDS
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

export default Dentist;