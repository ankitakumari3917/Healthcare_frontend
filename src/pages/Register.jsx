import { notifications } from "@mantine/notifications";
import React, { useState } from "react";
// import "./Login.jsx"

import { Link} from "react-router-dom";

function Register() {
  const registerUrl = "https://healthcare-backend-y3zn.onrender.com/register";
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [gender, setGender] = useState("male");
  const [category, setCategory] = useState("patient");
  //  const navigate=useNavigate()
  const Register = () => {
    console.log(name, phone, email, password, gender, category);
    const body = {
      name: name,
      password: password,
      email,
      phone,
      gender,
      category,
    };

    fetch(registerUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((json) => { 
        notifications.show({
          title:"Registratioon Successfull",
          message:json?.message
        })
        setMessage(json.message);
        // navigate("/login")
      })
      .catch((error) => {
        notifications.show({
          title:"Registration Successfull",
          message:error?.msg
        })
        setMessage(error.msg);
      });
  };
  const handleGenderChange = (e) => {
    setGender(e.target.value);
  };

  // const handleCategoryChange = (e) => {
  //   setCategory(e.target.value);
  // };
  const handleCategoryChange = (e) => {
    console.log("Selected category:", e.target.value);
    setCategory(e.target.value);
  };

  return (
    <div>
      <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
        <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
          <span className=" text-white">
            <Link to="/home">Home</Link>
          </span>
          <h4 className="text-gray-400">~Register</h4>
        </div>
      </div>
      <div className="bg-[#ffffff] flex items-center justify-center h-screen">
        <div className="max-w-[960px]  bg-[#000038] p-5 rounded-2xl grid grid-cols-2 gap-20">
          <div className="relative h-auto">
            <img src="src/assets/hospital.jpg" alt="" />
          </div>
          <div className="max-w-80">
            <h1 className="text-3xl  font-bold text-white">
              CREATE AN ACCOUNT
            </h1>
            <div className="space-y-6 mt-5 text-white">
              <p className="text-white text-xl">{message}</p>
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
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
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
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/gender.png"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>

                <select
                  value={gender}
                  onChange={handleGenderChange}
                  type="phone"
                 
                  placeholder="YOUR..GENDER"
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                >
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="others">Others</option>
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

               
                <select
                  value={category}
                  onChange={handleCategoryChange}
                  type="phone"
                  placeholder="ARE YOU A "
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                >
                  <option value="doctor">Doctor</option>
                  <option value="patient">Patient</option>
                </select>
              </div>
              <div className="relative">
                <div className="absolute top-1 left-1 bg-white-medium rounded-full p-1 flex items-center justify-center bg-blue-300">
                  <img
                    src="../src/assets/password.png"
                    alt=""
                    className="w-6 rounded-full"
                  ></img>
                </div>

                <input
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                  placeholder="YOUR..PASSWORD "
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
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
                  className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
                />
              </div>
              <button
                className="bg-neon-blue font-semibold rounded-full py-2 w-40"
                onClick={Register}
              >
                REGISTER
              </button>
            </div>
            <div className="text-medium-white pt-2 space-y-4 text-s">
              
              <p className="text-white">
                If you have an account then
                <a
                  className="text-neon-blue font-semibold cursor-pointer"
                  href="/Login"
                >
                  {" "}
                  Login
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
