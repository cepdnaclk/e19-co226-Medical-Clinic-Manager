import axios from "axios";

const MEDICATION_API_BASE_URL = "http://localhost:8082/api/v1/medications/";

class MyMedicationsService {
  getMedicationDetails() {
    let userData = JSON.parse(localStorage.getItem("patient"));
    localStorage.setItem("patient", JSON.stringify(userData));
    return axios.get(MEDICATION_API_BASE_URL + userData.patientId);
  }
}

export default new MyMedicationsService();
