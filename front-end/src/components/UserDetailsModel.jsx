import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import UserDetailsService from "../services/UserDetailsService";

const UserDetailsModal = ({ isOpen, onRequestClose }) => {
  const [details, setUsers] = useState([]);

  useEffect(() => {
    try {
      UserDetailsService.getUserDetails().then((response) => {
        setUsers(response.data);
      });
    } catch {
      console.log("error : myDetails not found");
    }
  }, []);

  // css ==========================
  const modalStyle = {
    content: {
      width: "300px",
      height: "270px",
      margin: "auto",
      borderRadius: "10px",
      borderColor: "black",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  };
  //===============================

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      contentLabel="User Details"
      style={modalStyle} //<----------------- css
    >
      <h2>User Details</h2>
      {details ? (
        <>
          <div>
            <table>
              <tr>
                <td>Name</td>
                <td> : </td>
                <td>
                  {details.fname} {details.lname}
                </td>
              </tr>
              <tr>
                <td>NIC</td>
                <td> : </td>
                <td>{details.nic}</td>
              </tr>
              <tr>
                <td>Address</td>
                <td> : </td>
                <td>{details.address}</td>
              </tr>
              <tr>
                <td>Phone</td>
                <td> : </td>
                <td>{details.contact}</td>
              </tr>
              <tr>
                <td>Date of Birth</td>
                <td> : </td>
                <td>{details.dob}</td>
              </tr>
              <tr>
                <td>Speciality</td>
                <td> : </td>
                <td>{details.insuranceDetails}</td>
              </tr>
              <tr>
                <td>ID</td>
                <td> : </td>
                <td>{details.patientId}</td>
              </tr>
            </table>
          </div>
        </>
      ) : (
        <p>Loading...</p>
      )}
      <button onClick={onRequestClose}>Close</button>
    </Modal>
  );
};

export default UserDetailsModal;
