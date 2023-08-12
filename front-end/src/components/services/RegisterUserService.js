import axios from "axios";

class RegisterUserService {
    handleRegisterUser = async (data, token) => {
        console.log(token);
        const response = await axios.post("http://localhost:8080/api/v1/patient/save", data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
}

export default RegisterUserService;