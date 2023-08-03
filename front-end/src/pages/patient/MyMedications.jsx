import React, { useState, useEffect } from "react";
import MyAppointmentsService from "../../services/MyAppointmentsService";
import { Link } from "react-router-dom";
import MyMedicationsService from "../../services/MyMedicationsService";

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
      <table>
        <tr>
          <td>Name</td>
          <td> : </td>
          <td>{detail.name}</td>
        </tr>
        <tr>
          <td>Dosage</td>
          <td> : </td>
          <td>{detail.dosage}</td>
        </tr>
        <tr>
          <td>Start Date</td>
          <td> : </td>
          <td>{detail.startDate}</td>
        </tr>
        <tr>
          <td>End Date</td>
          <td> : </td>
          <td>{detail.endDate}</td>
        </tr>
      </table>
    </div>
  );
};

const MyMedications = () => {
  const [details, setUsers] = useState([]);

  useEffect(() => {
    try {
      MyMedicationsService.getMedicationDetails().then((response) => {
        setUsers(response.data);
        console.log(response);
      });
    } catch {
      console.log("error : Medications not found");
    }
  }, []);

  return (
    <>
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

export default MyMedications;
