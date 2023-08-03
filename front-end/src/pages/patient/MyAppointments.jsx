import React, { useState, useEffect } from "react";
import MyAppointmentsService from "../../services/MyAppointmentsService";
import { Link } from "react-router-dom";

//--------------------------------
//| css not working find out why |
//--------------------------------
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

const DetailCard = ({ detail }) => {
  return (
    <div style={modalStyle}>
      <div>
        <b>{detail.date}</b>
      </div>
      <div>
        <table>
          <tr>
            <td>id</td>
            <td> : </td>
            <td>{detail.appointmentId}</td>
          </tr>
          <tr>
            <td>Due Date</td>
            <td> : </td>
            <td>{detail.dueDate}</td>
          </tr>
          <tr>
            <td>Reason</td>
            <td> : </td>
            <td>{detail.reason}</td>
          </tr>
          <tr>
            <td>Accepted</td>
            <td> : </td>
            <td>{MyAppointmentsService.isAccept(detail)}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

const MyAppointments = () => {
  const [details, setUsers] = useState([]);

  useEffect(() => {
    try {
      MyAppointmentsService.getMyAppointments().then((response) => {
        setUsers(response.data);
        console.log(response);
      });
    } catch {
      console.log("error : myDetails not found");
    }
  }, []);

  return (
    <>
      <nav>
        <Link to="/add_appointment">Add Appointment</Link>
      </nav>
      <div>
        <div className="row">
          {details.map((detail, index) => (
            <div className="col-md-4 mt-2" key={detail.appointmentId}>
              <DetailCard detail={detail} key={index} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default MyAppointments;
