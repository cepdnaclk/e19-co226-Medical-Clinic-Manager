import axios from "axios";

const APPOINTMENT_API_BASE_URL = "http://localhost:8082/api/v1/appointments/";

class MyAppointmentService {
  getMyAppointments() {
    let userData = JSON.parse(localStorage.getItem("patient"));
    localStorage.setItem("patient", JSON.stringify(userData));
    return axios.get(APPOINTMENT_API_BASE_URL + userData.patientId);
  }

  isAccept(detail) {
    if (detail.accept === true) {
      return "true";
    } else {
      return "false";
    }
  }
}

export default new MyAppointmentService();
