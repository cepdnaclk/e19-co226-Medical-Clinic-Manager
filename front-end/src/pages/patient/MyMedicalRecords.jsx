import React, { useState, useEffect } from "react";
import MyMedicationsService from "../../services/MyMedicationsService";
import MyMedicalRecordsService from "../../services/MyMedicalRecordsService";

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
          <td>Treatment Plan</td>
          <td> : </td>
          <td>{detail.treatmentPlan}</td>
        </tr>
        <tr>
          <td>Medical Condition</td>
          <td> : </td>
          <td>{detail.medicalCondition}</td>
        </tr>
        <tr>
          <td>Medical Professional</td>
          <td> : </td>
          <td>
            {detail.medicalProfessional.fname}
            <br />
            {detail.medicalProfessional.nic}
          </td>
        </tr>
      </table>
    </div>
  );
};

const MyMedicalRecords = () => {
  const [details, setUsers] = useState([]);

  useEffect(() => {
    try {
      MyMedicalRecordsService.getMedicalRecordDetails().then((response) => {
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

export default MyMedicalRecords;
