import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = ({ onLogin }) => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    
    try {
      const responseFromPatient = await axios.get(
        "http://localhost:8082/api/v1/patientsByUsername/" + username
      );
      //   const responseFromMedProf = await axios.get(
      //     "http://localhost:8082/api/v1/medicalProfessionalsByUsername/" +
      //       username
      //   );
      //   const responseFromManager = await axios.get(
      //     "http://localhost:8082/api/v1/managersByUsername/" + username
      //   );
      localStorage.setItem("patient", JSON.stringify(responseFromPatient.data));
      // Assuming the login API returns a success response
      // You can perform additional checks based on the response data
      console.log(responseFromPatient.password);
      if (
        responseFromPatient.status === 200 &&
        responseFromPatient.data.password === password
      ) {
        // Call the onLogin function to set the login status to true
        onLogin();
      } else {
        setError("Invalid username or password");
      }
    } catch (error) {
      setError("An error occurred during login");
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>User Name:</label>
          <input
            type="username"
            value={username}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div>
          <button type="submit">Login</button>
        </div>
        {error && <div>{error}</div>}
      </form>
      <Link to="/register">Register</Link>
    </div>
  );
};

export default Login;
