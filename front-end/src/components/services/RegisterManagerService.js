import axios from "axios";

class RegisterUserService {
    handleRegisterUser = async (data, token) => {
        console.log(token);
        const response = await axios.post("https://lifecare-5z1q.onrender.com/api/v1/manager/save", data, {
            headers: {
              Authorization: `Bearer ${token}`
            }
        });
        return response;
    }
}

export default RegisterUserService;