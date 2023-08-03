import React, { useState, useEffect } from "react";
import AppointmentService from "../../services/AddAppointmentService";

const today = new Date().toISOString().split("T")[0];

const AddAppointment = () => {
  const [Appointment, setAppointment] = useState({
    dueDate: "",
    date: "",
    reason: "",
    patient: {},
    accept: false,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAppointment({
      ...Appointment,
      [name]: value,
    });
  };

  const saveAppointment = (e) => {
    e.preventDefault();
    let userData = JSON.parse(localStorage.getItem("patient"));
    // console.log(userData);
    Appointment.patient = userData;
    console.log(Appointment);
    AppointmentService.setAppointment(Appointment)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="flex max-w-xl mx-auto mt-2 shadow border-b">
      <div className="px-20 py-4">
        <div className="font-thin text-2xl tracking-wider">
          <h4>Add new Appointment</h4>
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Today
          </label>
          <input
            type="date"
            name="date"
            value={today}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
            disabled
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Due Date : The day You need to meet the doctor
          </label>
          <input
            type="date"
            name="dueDate"
            value={Appointment.dueDate}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Reason
          </label>
          <input
            type="text"
            name="reason"
            value={Appointment.reason}
            onChange={(e) => handleChange(e)}
            className="h-8 w-96 border mt-1 px-2"
          />
        </div>
        <div className="items-center justify-center h-14 w-full my-2">
          <label className="block text-grey-600 text-sm font-normal">
            Medical Professional
          </label>
        </div>
        <div className="items-center justify-center h-14 w-full my-2 space-x-4 pt-4">
          <button
            onClick={saveAppointment}
            className="rounded text-white font-semibold bg-green-500 hover:bg-green-800 px-6 py-2"
          >
            Save
          </button>
          <button className="rounded text-white font-semibold bg-red-500 hover:bg-red-800 px-6 py-2">
            Clear
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddAppointment;
