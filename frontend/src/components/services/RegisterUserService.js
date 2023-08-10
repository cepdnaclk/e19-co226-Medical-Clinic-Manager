import axios from "axios";

class RegisterUserService {
    handleRegisterUser = async (data, token) => {
        const response = axios.post("http://localhost:8080/api/v1/patient/save", data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        });
        localStorage.setItem('patient', JSON.stringify(response.data));
    }
}

export default RegisterUserService;