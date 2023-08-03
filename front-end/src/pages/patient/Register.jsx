import React, { useState } from "react";
import PatientService from "../../services/PatientService";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const [Patient, setPatient] = useState({
    fname: "",
    lname: "",
    nic: "",
    address: "",
    contact: "",
    dob: "",
    insuranceDetails: "",
  });

  const handleChange = async (e) => {
    const value = e.target.value;
    setPatient({ ...Patient, [e.target.name]: value });
  };

  const savePatient = (e) => {
    e.preventDefault();
    setError("");
    try {
      const response = PatientService.setPatient(Patient);
      console.log(response);
      if (response.status === 200) {
        setError("Ok");
        localStorage.setItem("patient", JSON.stringify(response.data));
      } else {
        // setError("Username must be unique");
      }
    } catch (error) {
      // setError("Invalid Username -> Username must be unique");
    }
  };

  return (
    <div className="px-20 py-4">
      <form onSubmit={savePatient}>
        <div className="font-thin text-2xl tracking-wider">
          <h4>Register as Patient</h4>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            First Name
          </label>
          <input
            type="text"
            name="fname"
            value={Patient.firstName}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Last Name
          </label>
          <input
            type="text"
            name="lname"
            value={Patient.lastName}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">NIC</label>
          <input
            type="text"
            name="nic"
            value={Patient.nic}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Address
          </label>
          <input
            type="text"
            name="address"
            value={Patient.address}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Telephone Number
          </label>
          <input
            type="text"
            name="contact"
            value={Patient.contact}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Date of Birth
          </label>
          <input
            type="date"
            name="dob"
            value={Patient.dob}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Insurance Details
          </label>
          <input
            type="text"
            name="insuranceDetails"
            value={Patient.insuranceDetails}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            User Name
          </label>
          <input
            type="text"
            name="username"
            value={Patient.username}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Password
          </label>
          <input
            type="text"
            name="password"
            value={Patient.password}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          ></input>
        </div>
        <div className="items-center justify-center h-14 w-full my-2 space-x-4 pt-4">
          <button type="submit">Save</button>
        </div>
        {error && <div>{error}</div>}
      </form>
      <Link to="/">Back to Login</Link>
    </div>
  );
};

export default Register;
