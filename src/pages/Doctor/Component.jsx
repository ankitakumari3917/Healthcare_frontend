import React from "react";
import { Link } from "react-router-dom";

function Component() {
  return (
    <div className="bg-[#000038]">
      <div>
        <p className="text-3xl text-center text-white font-bold pt-10">OUR DOCTOR'S</p>
      </div>
      <div className="flex">
        <div className="px-[100px] pt-[60px]">
          <img
            src="../src/assets/d1.jpg"
            className="h-[400px] w-[300px] rounded-xl"
          ></img>
        </div>
        <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 pt-[100px]">
          <p className="text-xl text-white font-semibold">
            Dr. Sandeep Vaishya EXECUTIVE DIRECTOR & HOD NEURO SURGERY | Fortis
            Gurgaon Neurosurgery | Neurosurgery education Education MBBS, MS
            (General Surgery), MCh (Neurosurgery), Sundt Fellowship (USA)
          </p>
          <p className="text-l text-white mt-10">
            Dr. Sandeep Vaishya is renowned Neurosurgeon in India with more than
            22 years of experience in the field having worked with some of the
            top institution and hospitals of India. He is an awardee of the
            Sundt Fellowship at Mayo Clinic, USA. He has worked as a faculty in
            the neurosurgery Department at AIIMS.
          </p>
          <p className="text-l text-white">
            He also specialises in Minimal Invasive and Image Guided
            Neurosurgery, Intracranial Tumour Surgery including skull base
            tumours, Functional Neurosurgery , Spinal Surgery, Brachial plexus &
            Peripheral Nerve Surgery.
          </p>
        </div>
      </div>
      <div className="flex">
      <div className="px-[100px] pt-[30px]">
        <img
          src="../src/assets/dd1.jpg"
          className="h-[400px] w-[300px] rounded-xl"
        ></img>
      </div>
      <div className="w-full lg:w-1/2 xl:w-[670px] order-1 lg:order-2 pt-[50px] ">
        <p className="text-xl text-white font-semibold">
          Dr. Y K Mishra is a cardiac surgeon and vascular surgeon in New Delhi,
          India. He is the Director of Max Super Speciality Hospital in Saket,
          New Delhi.
        </p>
        <p className="text-l text-white mt-10">
          Dr. Mishra is known for his heart treatments and is considered one of
          India's top 10 cardiologists. He has over 32 years of experience and
          has performed more than 14,000 open heart procedures and 500 robotic
          surgeries. Dr. Mishra was born in 1954 and completed his MBBS and MS
          at S.S Medical College in MP. He has a Ph.D. in cardiovascular surgery
          from Bakulev Institute of Cardiovascular Surgery in Moscow, Russia. He
          is also a Fellow in cardiothoracic surgery at the Thoracic Centre of
          University Hospital in Uppsala, Sweden.
        </p>
        <p className="text-l text-white">
          Dr. Mishra has received the Lifetime Achievement Award from Dr. A. P.
          J. Abdul Kalam and an Honoris Causa Doctorate (Doctor of Science) from
          the Governor of Madhya Pradesh and Chancellor of Rani Durgavati
          Vishwavidyalaya
        </p>
        <Link to="/doctor">
          <button className="bg-[#31fae9] text-xl border-4 border-black  p-3 m-8 font-semibold rounded-2xl hover:border-white hover:bg-[#000038] hover:text-white hover:border-4">
            See More...
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
}

export default Component;