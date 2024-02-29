import React from "react";
import Cardio from "./Cardio";
import Dentist from "./Dentist";
import Surgeon from "./Surgeon";
import Gynecologist from "./Gynecologist";
import Dermatologist from "./Dermatologist";
import Physician from "./Physician";

import Neurologist from "./Neurologist";
import Pediatrician from "./Pediatrician";
import Otolaryngologist from "./Otolaryngologist";
import Psychiatrist from "./Psychiatrist";
import Ophthalmologist from "./Ophthalmologist";
import Dietcian from "./Dietcian";
import { Link } from "react-router-dom";
function Doctor() {
  return (
    <div>
       <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
        <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
          <span className=" text-white">
            <Link to="/home">Home</Link>
          </span>
          <h4 className="text-gray-400">~Doctors</h4>
        </div>
      </div>
      <Cardio />
      <Dietcian />
      <Surgeon />
      <Gynecologist />
      <Psychiatrist />
      <Dermatologist />
      <Physician />
      <Ophthalmologist />
      <Neurologist />
      <Pediatrician />
      <Dentist />
      <Otolaryngologist />
    </div>
  );
}

export default Doctor;
