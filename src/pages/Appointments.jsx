import { TextInput, Button } from "@mantine/core";
import React, { useEffect, useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import { Link } from "react-router-dom";

function Appointments() {

  const [email, setEmail] = useState();
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState();
  const getAppointments = () => {
    setLoading(true);
    try {
      fetch(`https://healthcare-backend-y3zn.onrender.com/get-appointments?email=${email}`)
        .then((response) => {
          return response.json();
        })
        .then((json) => {
          setData(json.appointments);
        })
        .catch((error) => {
          console.log(error);
        })
        .finally(() => {
          setLoading(false);
        });
    } catch (error) {}
  };
  return ( <>
    <div className="bg-blue-900 h-[40px] flex flex-row text-centre items-center  ">
            <div className=" text-sm flex flex-row text-centre items-center m-[200px]">
              <span className=" text-white">
                <Link to="/home">Home</Link>
              </span>
              <h4 className="text-gray-400">~Appointments</h4>
            </div>
          </div>
    <div className="h-screen flex flex-col items-center bg-white pt-20">
      <div className="flex ">
        <TextInput
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button onClick={getAppointments} variant="light">
          Find
        </Button>
      </div>
      <div className="m-10">
        {loading ? (
          <ClipLoader
            loading={loading}
            size={30}
            aria-label="Loading Spinner"
            data-testid="loader"
          />
        ) : (
          <div>
            {data &&
              (data.length === 0 ? (
                <p>No Appointments Available </p>
              ) : (
                <div>
                  {data.map((appoint, index) => {
                    return (
                      <div className="bg-blue-200 rounded-lg p-4 m-10">
                        <p>Patient Name : {appoint.name}</p>
                        <p>Patient Phone : {appoint.phone}</p>
                        <p>Patient Email : {appoint.email}</p>
                        <p>Patient DOB : {appoint.dob}</p>
                        <p>Patient Address : {appoint.address}</p>
                        <p>Appointment Time : {appoint.time}</p>
                        <p>Appointment Category : {appoint.category}</p>
                        <p>Appointment Description : {appoint.problem}</p>
                      </div>
                    );
                  })}
                </div>
              ))}
          </div>
        )}
      </div>
    </div>
</> );
}

export default Appointments;
