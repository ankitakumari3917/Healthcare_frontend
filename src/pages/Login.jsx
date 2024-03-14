import React,{useState} from "react";
import { notifications } from "@mantine/notifications";
import "./Register.jsx"
import { Link, useNavigate } from "react-router-dom";

function Login() {
 
  const loginUrl = "https://healthcare-backend-y3zn.onrender.com/login";
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate=useNavigate()
  const handleLogin = () => {
    
    const body = {
      email,
      password,
    };
    fetch(loginUrl, {
      method: "POST",
      body: JSON.stringify(body),
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then((response) => response.json())
      .then((json) => {
        notifications.show({
          title:"Login Successfull",
          message:json?.message
        })
    
        setMessage(json.message);
        if (json.isSuccess) {
          localStorage.setItem("token", json.token);
          navigate("/home");
        }
      })
      .catch((error) => {
        console.error("Error during login:", error);
        notifications.show({
          title:"Login Successfull",
          message:error?.msg
        })
        setMessage(error.msg);
        console.log("Full response:", error.response); // Log the full response object
      });
    }
  return (

<div>

    <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
          <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
            <span className=" text-white">
            <Link to="/home">
              Home
             </Link>
            </span>
            <h4 className="text-gray-400">~Login</h4>
          </div>
        </div>
    <div className=" bg-[#ffffff] flex items-center justify-center h-screen">
       
      <div className="max-w-[960px] bg-[#000038] p-5 rounded-2xl grid grid-cols-2 gap-20">
        <div className="relative">
          <img src="src/assets/hospital.jpg" alt="" />
        </div>
        <div className="max-w-80">
          <h1 className="text-2xl  font-bold text-white">LOGIN YOUR ACCOUNT </h1>
          <div className="space-y-6 mt-5 text-white">
          <p className="text-white text-xl" >{message}</p>
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
                type="phone"
                placeholder="YOUR..PHONE "
                className="w-80 bg-white-light py-2 px-12 rounded-full focus:bg-black-dark focus:outline-none focus:ring-2 focus:ring-neon-blue focus:drop-shadow-lg"
              />
            </div>
            <button className="bg-neon-blue font-semibold rounded-full py-2 w-40" onClick={handleLogin}> LOG IN</button>  
           
          </div>
          <div className="text-medium-white pt-2 space-y-4 text-s">
            <p className="text-white">
              Don't have an account? then <a className="text-neon-blue font-semibold cursor-pointer " href="./Register">Register</a>
            </p>
            <p className="text-white">
              Forgot password ? <a className="text-neon-blue font-semibold cursor-pointer">Reset password</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
export default Login;
