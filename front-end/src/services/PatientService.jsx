import axios from "axios";

const PATIENT_API_BASE_URL = "http://localhost:8082/api/v1/patients";

class PatientService {
    async setPatient(patient) {
        return await axios.post(PATIENT_API_BASE_URL, patient);
    }
}

export default new PatientService();