import axios from "axios";

const MEDICAL_PROFESSIONAL_API_BASE_URL =
  "http://localhost:8082/api/v1/medicalProfessionals";
const APPOINTMENT_API_BASE_URL = "http://localhost:8082/api/v1/appointments";

class AppointmentService {
  async setAppointment(appointment) {
    try {
      // console.log(response.data.patientId);
      return axios.post(APPOINTMENT_API_BASE_URL, appointment);
    } catch (error) {
      // Handle the error here (e.g., log the error or show an error message)
      console.error("Error fetching patient data:", error);
      throw error; // You can choose to re-throw the error or handle it accordingly.
    }
  }

  async getMedicalProfessionals() {
    try {
      const response = await axios.get(MEDICAL_PROFESSIONAL_API_BASE_URL);
      // console.log("response data: " + response.data);
      return response.data;
    } catch (error) {
      console.log("Error while fetching medical professionals:", error);
      throw error;
    }
  }
}

export default new AppointmentService();
