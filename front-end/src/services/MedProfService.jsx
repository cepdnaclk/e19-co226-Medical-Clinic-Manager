import axios from "axios";

const MED_PROF_API_BASE_URL =
  "http://localhost:8082/api/v1/medicalProfessionals";

class MedProfService {
  getMedProfs() {
    let userData = JSON.parse(localStorage.getItem("patient"));
    localStorage.setItem("patient", JSON.stringify(userData));
    return axios.get(MED_PROF_API_BASE_URL);
  }
}

export default new MedProfService();
