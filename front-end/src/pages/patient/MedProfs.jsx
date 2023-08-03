import React, { useState, useEffect } from "react";
import MedProfService from "../../services/MedProfService";

const UserCard = ({ user }) => {
  return (
    <div className="card mx-3">
      <div className="card-header">
        <b>
          {user.fname} {user.lname}
        </b>
      </div>
      <div className="card-body">
        <table>
          <tr>
            <td>nic</td>
            <td> : </td>
            <td>{user.nic}</td>
          </tr>
          <tr>
            <td>Address</td>
            <td> : </td>
            <td>{user.address}</td>
          </tr>
          <tr>
            <td>Phone</td>
            <td> : </td>
            <td>{user.contact}</td>
          </tr>
          <tr>
            <td>Date of Birth</td>
            <td> : </td>
            <td>{user.dob}</td>
          </tr>
          <tr>
            <td>Speciality</td>
            <td> : </td>
            <td>{user.speciality}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const MedProfs = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    MedProfService.getMedProfs()
      .then((response) => {
        setUsers(response.data);
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <div>
      <div className="row">
        {users.map((user, index) => (
          <div className="col-md-4 mt-2" key={user.patientId}>
            <UserCard user={user} key={index} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MedProfs;
