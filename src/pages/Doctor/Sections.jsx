import React from "react";
import { Link } from "react-router-dom";

function Sections() {
  return (
    <div>
      <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center">
        <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
          <span className=" text-white">
            <Link to="/home">Home</Link>
          </span>
          <h4 className="text-gray-400">~Sections</h4>
        </div>
      </div>
      <p className="text-3xl text-black text-center mt-10 font-bold">
        Specialist
      </p>

      <div className="mt-20 mx-5 flex justify-center gap-10 ">
      <Link to="/cardio">
        <div className="flex  border-black border-2 rounded-xl p-1 pr-[300px] bg-white hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
        
          <p className="text-xl font-semibold mx-5 my-2">Cardiologist</p>
        
        </div>
        </Link>
        <Link to="/neurologist">
        <div className="flex  border-black border-2 rounded-xl p-1 pr-[300px] bg-white hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
        
          <p className="text-xl font-semibold mx-5 my-2">Neurologist</p>
        
        </div>
        </Link>
      </div>
      <div className="mt-10 mx-5 flex justify-center gap-10 ">
      <Link to="/dietcian">
        <div className="flex  border-black border-2 rounded-xl p-1 bg-white pr-[230px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
         
          <p className="text-xl font-semibold mx-5 my-2">Dietetics & Nutrition</p>
      
        </div>
        </Link>
        <Link to="/physician">
        <div className="flex  border-black border-2 rounded-xl p-1 bg-white pr-[300px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
        
          <p className="text-xl font-semibold mx-5 my-2">Physician</p>
        
        </div>
        </Link>
      </div>
      <div className="mt-10 mx-5 flex justify-center gap-10 ">
      <Link to="/dentist">
        <div className="flex  border-black border-2 rounded-xl bg-white p-1 pr-[350px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
         
          <p className="text-xl font-semibold mx-5 my-2">Dentist     </p>
         
        </div>
        </Link>
        <Link to="/surgeon">
        <div className="flex  border-black border-2 rounded-xl bg-white p-1 pr-[300px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
        
          <p className="text-xl font-semibold mx-5 my-2">Surgeon</p>
          
        </div>
        </Link>
      </div>
      <div className="mt-10 mx-5 flex justify-center gap-10 ">
      <Link to="/gynecologist">
        <div className="flex  border-black border-2 rounded-xl bg-white p-1 pr-[300px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
        
          <p className="text-xl font-semibold mx-5 my-2">Gynecologist</p>
        </div>
        </Link>
<Link to="/psychiatrist">
        <div className="flex  border-black border-2 rounded-xl bg-white p-1 pr-[290px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
          <p className="text-xl font-semibold mx-5 my-2">Psychiatrist</p>
        </div>
        </Link>
      </div>


      <div className="mt-10 mx-5 flex justify-center gap-10 ">
        <Link to="/dermatologist">
        <div className="flex  border-black border-2 rounded-xl bg-white p-1 pr-[300px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
          <p className="text-xl font-semibold mx-5 my-2">Dermatology</p>
        </div>
        </Link>
        <Link to="/ophthalmologist">
        <div className="flex  border-black border-2 rounded-xl p-1 bg-white pr-[280px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
          <p className="text-xl font-semibold mx-5 my-2">Eye Specialist</p>
        </div>
        </Link>
      </div>

      <div className="mt-10 mx-5 flex justify-center gap-10 ">
        <Link to="/pediatrician">
        <div className="flex  border-black border-2 rounded-xl p-1 bg-white  pr-[300px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
          <p className="text-xl font-semibold mx-5 my-2">Pediatrician</p>
        </div>
        </Link>
        <Link to="/otolaryngologist">
        <div className="flex  border-black border-2 rounded-xl p-1 bg-white pr-[250px] hover:bg-[#00B9F2] hover:border-2 hover:text-white hover:border-white">
          <img src="../../src/assets/stethoscope.webp" className="h-14 w-14" />
          <p className="text-xl font-semibold mx-5 my-2">Otolaryngologist</p>
        </div>
        </Link>
      </div>


    </div>
  );
}

export default Sections;
