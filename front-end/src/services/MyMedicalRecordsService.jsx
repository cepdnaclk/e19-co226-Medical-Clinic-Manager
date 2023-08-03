import axios from "axios";

const MEDICAL_RECORD_API_BASE_URL =
  "http://localhost:8082/api/v1/medicalRecords/";

class MyMedicalRecordsService {
  getMedicalRecordDetails() {
    let userData = JSON.parse(localStorage.getItem("patient"));
    localStorage.setItem("patient", JSON.stringify(userData));
    console.log(userData.patientId);
    return axios.get(MEDICAL_RECORD_API_BASE_URL + userData.patientId);
  }
}

export default new MyMedicalRecordsService();
