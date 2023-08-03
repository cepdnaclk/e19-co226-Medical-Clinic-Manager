import axios from "axios";

const PATIENT_API_BASE_URL = "http://localhost:8082/api/v1/patients/";

class UserDetailsService {
  getUserDetails() {
    let userData = JSON.parse(localStorage.getItem("patient"));
    return axios.get(PATIENT_API_BASE_URL + userData.patientId);
  }
}

export default new UserDetailsService();
