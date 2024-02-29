import React, { useState } from "react";

import { Link, useNavigate} from "react-router-dom";

function Findandbook() {
  const [patientType, setPatientType] = useState("Registered Patient");
  const [section, setSection] = useState("Cardiology");
  const navigate = useNavigate();
  function submit() {
    switch (patientType) {
      case "Registered Patient":
        navigate("/sections");
        break;

      case "New Patient":
        navigate("/register");
        break;
      default:
        break;
    }
  }
  function submitdoc() {
    switch (section) {
      case "Cardiology":
        navigate("/cardio");
        break;

      case "Neurology":
        navigate("/neurologist");
        break;

      case "Dietetics & Nutrition":
        navigate("/dietcian");
        break;

      case "Dental Servise":
        navigate("/dentist");
        break;

      case "Physician":
        navigate("/physician");
        break;

      case "Surgeon":
        navigate("/surgeon");
        break;

      case "Gynecologist":
        navigate("/gynecologist");
        break;

      case "Psychiatrist":
        navigate("/psychiatrist");
        break;

      case "Dermatologist":
        navigate("/dermatologist");
        break;

      case "Eye Specialist":
        navigate("/ophthalmologist");
        break;

      case "Pediatrician":
        navigate("/pediatrician");
        break;

      case "Otolaryngologist":
        navigate("/otolaryngologist");
        break;
      default:
        break;
    }
  }
  return (
    <div className="flex  justify-center">
      <div className="  bg-white rounded-xl m-10  border-2 border-black hover:bg-[#018ABE] hover:border-2 hover:text-white hover:border-white">
        <div className="m-10 flex flex-col ">
          <p className="text-center text-3xl font-bold mt-5">
            Book an Appointment
          </p>
          {/* <Select
            checkIconPosition="left"
            data={["Registered", "New"]}
            label="Patient Type"
            placeholder="Select Patient Type"
          
          dropdownOpened
          
          onChange={setPatientType}
          
          /> */}

          <select
            name="Registered Patient"
            className="h-10 rounded-xl border border-gray-600 my-10 py-2 px-5 text-black"
            onChange={(e) => setPatientType(e.target.value)}
          >
            <option value="Registered Patient">Registered Patient</option>
            <option value="New Patient">New Patient</option>
          </select>
          <button
            className="bg-[#47f8e0] border-2 border-black text-bold h-12 rounded-2xl text-xl  hover:border-white hover:border-4  hover:bg-[#000038] "
            onClick={submit}
          >
            Book Now
          </button>
        </div>
      </div>
      <div className="  bg-white rounded-xl m-10 border-black border-2 hover:bg-[#018ABE] hover:border-2 hover:text-white hover:border-white ">
        <div className="m-10 flex flex-col ">
          <p className="text-center text-3xl font-bold mt-5">Find A Doctor</p>
          <select
            name="Select Speciality"
            className="h-10 rounded-xl border border-gray-600 my-10 py-2 px-5 text-black"
            onChange={(e) => setSection(e.target.value)}
          >
            <option value="Select Speciality">Select Speciality</option>
            <option value="Cardiology">Cardiology</option>
            <option value="Neurology ">Neurology </option>
            <option value="Dietetics & Nutrition">Dietetics & Nutrition</option>
            <option value="Dental Servise ">Dental Servise</option>
            <option value="Physician">Physician</option>
            <option value="Surgeon">Surgeon</option>
            <option value="Gynecologist">Gynecologist</option>
            <option value="Psychiatrist">Psychiatrist</option>
            <option value="Dermatologist">Dermatology</option>
            <option value="Eye Specialist">Eye Specialist</option>
            <option value="Pediatrician">Pediatrician</option>
            <option value="Otolaryngologist">Otolaryngologist</option>
          </select>
          <div className="flex">
            <button
              className="bg-[#47f8e0] h-12 rounded-2xl text-xl mx-5 px-8  border-black border-2 text-bold  hover:border-white hover:border-2  hover:bg-[#000038] "
              onClick={submitdoc}
            >
              Search
            </button>
            <Link to="/doctor">
              <button className="bg-[#47f8e0] h-12 rounded-2xl text-xl mx-5 px-5  border-black border-2 text-bold  hover:border-white hover:border-2  hover:bg-[#000038]  ">
                All Doctor
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Findandbook;
