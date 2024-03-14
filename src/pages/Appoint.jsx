import React, { useState } from "react";
import { notifications } from "@mantine/notifications";

function Appoint() {
  const appointUrl = "https://healthcare-backend-y3zn.onrender.com/appoint";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dob, setDob] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [time, setTime] = useState("");
  const [problem, setProblem] = useState("");
  const [message, setMessage] = useState("");
  const [category, setCategory] = useState("patient");
  //  const navigate=useNavigate()
  const Appointment = () => {
    console.log(name, phone, email, dob, time, category, address, problem);
    const body = {
      name: name,
      time,
      email,
      phone,
      dob,
      category,
      address,
      problem
    };

    fetch(appointUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => {

        notifications.show({
          title: json.status  === 1?   "Appointment Booked" : "Booking Failed",
          message: json?.message
        })
        setMessage(json.message);

      })
      .catch((error) => {
        notifications.show({
          title: "Appointment Booking Failed",
          message: error?.msg
        })
        setMessage(error.msg);
      });
  };



  const handleCategoryChange = (e) => {
    console.log("Selected category:", e.target.value);
    setCategory(e.target.value);
  };



  return (
    <div>
      <div className="bg-blue-900 h-[40px] flex  text-centre items-center  ">
        <div className=" text-sm flex  text-centre items-center m-[200px]">
          <span className=" text-white">
            <a href="../pages/Home">Home </a>{" "}
          </span>
          <h4 className="text-gray-400 ">~Appointment</h4>
        </div>
      </div>
      <div className=" bg-[#000038] flex items-center justify-center h-screen">
        <div className="md:max-w-[960px] w-auto bg-black-dark p-10 rounded-2xl justify-center align-middle items-center">
          <div className="flex flex-col gap-5">
            <div>
              {" "}
              <h1 className="md:text-3xl text-2xl flex align-middle justify-center items-center font-bold my-5 text-white">Book Appointment Now !</h1>
              <p className="text-white text-xl">{message}</p>
            </div>

            <div className="flex md:flex-row flex-col gap-5">

              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/person.png"
                    alt=""
                    className="w-6 rounded-full "
                  ></img>
                </div>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  type="text"
                  placeholder="YOUR..NAME"
                  className="w-80 bg-white-light text-white py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/email.png"
                    alt=""
                    className="w-6 rounded-full "
                  ></img>
                </div>
                <input
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  type="email"
                  placeholder="YOUR..EMAIL"
                  className="w-80 bg-white-light text-white py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5">
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/phone.jpg"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>

                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="phone"
                  placeholder="YOUR..PHONE "
                  className="w-80 bg-white-light text-white py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/time.jpg"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>
                <input
                  value={time}
                  onChange={(e) => setTime(e.target.value)}
                  type="time"
                  name="time"
                  className="form-input  text-white w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark   focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"

                />
              </div>
            </div>
            <div className="flex md:flex-row flex-col gap-5">

              <div className="relative">
                <div className="absolute top-1 left-1 text-white bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/category.jpg"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  name="State" className=" text-white w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark   focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg">
                  <option value="Categories">Categories</option>
                  <option value="Dentist">Dentist</option>
                  <option value="Dermatologist">Dermatologist</option>
                  <option value="Cardio">Cardio</option>
                  <option value="Dietition">Dietition</option>
                  <option value="Gynecologist">Gynecologist</option>
                  <option value="Neurologist">Neurologist</option>
                  <option value="Ophthalmologist">Ophthalmologist</option>
                  <option value="Otolaryngologist">Otolaryngologist</option>
                  <option value="Pediatrician">Pediatrician</option>
                  <option value="Physician">Physician</option>
                  <option value="Psychiatrist">Psychiatrist</option>
                  <option value="Surgeon">Surgeon</option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/dob.png"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>
                <input
                  value={dob}
                  onChange={(e) => setDob(e.target.value)}
                  type="date"
                  name="date"
                  className="form-input  w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark  text-white  focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"

                />
              </div>
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/problem.jpg"
                  alt=""
                  className="w-6 rounded-full"
                ></img>
              </div>
              <input
                value={problem}
                onChange={(e) => setProblem(e.target.value)}
                type="text"
                placeholder="Your Problem"
                className="form-input  w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark  text-white  focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"

              />
            </div>
            <div className="relative">
              <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                <img
                  src="../src/assets/address.jpg"
                  alt=""
                  className="w-6 rounded-full"
                ></img>
              </div>
              <input
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                type="text"
                placeholder="Your Address"
                className="form-input  w-full bg-white-light py-2 px-12 rounded-full focus:bg-black-dark  text-white  focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"

              />
            </div>
            <div className="flex items-center justify-center "> <button onClick={Appointment}
              className="bg-neon-blue font-bold rounded-full py-4 w-40  border-black hover:bg-orange-600"

            >
              Book Now
            </button></div>
          </div>

        </div>

      </div>
    </div>
  );
}

export default Appoint;