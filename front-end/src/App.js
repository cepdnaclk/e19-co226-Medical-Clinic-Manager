import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React, { useState } from "react";

import Home from "./pages/Home";
import Login from "./pages/Login";
import AddAppointment from "./pages/patient/AddAppointment";
import MedProfs from "./pages/patient/MedProfs";
import MyAppointments from "./pages/patient/MyAppointments";
import MyMedicalRecords from "./pages/patient/MyMedicalRecords";
import MyMedications from "./pages/patient/MyMedications";
import Managers from "./pages/patient_and_med_prof/Managers";
import DashboardNav from "./pages/patient/DashboardNav";
import Register from "./pages/patient/Register";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Initialize to false as the user is not logged in initially

  // Logic to set isLoggedIn to true upon successful login
  // For example, you might have a login function that does this
  const handleLogin = () => {
    // Perform login logic, and if successful:
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        {/* Use ternary operator to conditionally render DashboardNav */}
        {isLoggedIn ? (
          <Route path="/" element={<DashboardNav />}>
            <Route index element={<Home />} />
            <Route path="home" element={<Home />} />
            <Route path="my_appointments" element={<MyAppointments />} />
            <Route path="add_appointment" element={<AddAppointment />} />
            <Route path="my_medications" element={<MyMedications />} />
            <Route path="my_medical_records" element={<MyMedicalRecords />} />
            <Route path="medical_professionals" element={<MedProfs />} />
            <Route path="managers" element={<Managers />} />
          </Route>
        ) : (
          <>
            <Route path="/" element={<Login onLogin={handleLogin} />} /> //
            Render the login page if not logged in
            <Route path="register" element={<Register />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
