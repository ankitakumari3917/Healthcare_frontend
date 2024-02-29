import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Hospital from "../pages/Hospital/Hospital";
import Header from "../Components/Header/Header";
import Login from "../pages/Login";

import Register from "../pages/Register";
import About from "../Components/About/About";

import Findandbook from "../Components/Book/Findandbook";

import Doctor from "../pages/Doctor/Doctor";
import Dietcian from "../pages/Doctor/Dietcian";
import Physician from "../pages/Doctor/Physician";
import Surgeon from "../pages/Doctor/Surgeon";
import Cardio from "../pages/Doctor/Cardio";
import Services from "../pages/Doctor/Services";
import Sections from "../pages/Doctor/Sections";
import Dentist from "../pages/Doctor/Dentist";
import Categories from "../pages/Doctor/Categories";
import Dermatologist from "../pages/Doctor/Dermatologist";
import Gynecologist from "../pages/Doctor/Gynecologist";
import Neurologist from "../pages/Doctor/Neurologist";
import Ophthalmologist from "../pages/Doctor/Ophthalmologist";
import Pediatrician from "../pages/Doctor/Pediatrician";
import Psychiatrist from "../pages/Doctor/Psychiatrist";
import Otolaryngologist from "../pages/Doctor/Otolaryngologist";
import Hospital_Categories from "../pages/Hospital/Hospital_Categories";
import Aiims from "../pages/Hospital/Aiims";
import Appointments from "../pages/Appointments";
import Igims from "../pages/Hospital/Igims";
import Paras from "../pages/Hospital/Paras";
import Jagdish from "../pages/Hospital/Jagdish";
import Medanta from "../pages/Hospital/Medanta";
import Ford from "../pages/Hospital/Ford";
import Appoint from "../pages/Appoint";


function Routers() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home" element={<Home />} />
      <Route path="/appointments" element={<Appointments />} />

      <Route path="/header" element={<Header />} />
      <Route path="/login" element={<Login />} />
      <Route path="/about" element={<About />} />
      <Route path="/register" element={<Register />} />
      <Route path="/hospital" element={<Hospital />} />
      <Route path="/book" element={<Findandbook />} />

      <Route path="/doctor" element={<Doctor />} />
      <Route path="/sections" element={<Sections />} />
      <Route path="/services" element={<Services />} />

      <Route path="/cardio" element={<Cardio show={true} />} />
      <Route path="/physician" element={<Physician show={true} />} />
      <Route path="/dietcian" element={<Dietcian show={true} />} />
      <Route path="/surgeon" element={<Surgeon show={true} />} />
      <Route path="/dentist" element={<Dentist show={true} />} />
      <Route path="/psychiatrist" element={<Psychiatrist show={true} />} />
      <Route path="/pediatrician" element={<Pediatrician show={true} />} />
      <Route
        path="/ophthalmologist"
        element={<Ophthalmologist show={true} />}
      />
      <Route path="/neurologist" element={<Neurologist show={true} />} />
      <Route path="/gynecologist" element={<Gynecologist show={true} />} />
      <Route path="/dermatologist" element={<Dermatologist show={true} />} />
      <Route path="/categories" element={<Categories />} />
      <Route
        path="/otolaryngologist"
        element={<Otolaryngologist show={true} />}
      />
      <Route path="/hospital_categorie" element={<Hospital_Categories />} />
      <Route path="/appoint" element={<Appoint />} />

      <Route path="/paras" element={<Paras />} />
      <Route path="/igims" element={<Igims />} />
      <Route path="/aiims" element={<Aiims />} />
      <Route path="/jagdish" element={<Jagdish />} />
      <Route path="/medanta" element={<Medanta />} />
      <Route path="/ford" element={<Ford />} />
      <Route path="/section" element={<Sections />} />
    


   


    </Routes>
  );
}

export default Routers;
