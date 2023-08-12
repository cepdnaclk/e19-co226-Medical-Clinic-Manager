import axios from "axios";

class SignupModeratorService {
    handleSignup = async (data, token) => {
        const respond = await axios.post("http://localhost:8080/api/v1/auth/moderator/signup", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
    }
}

export default SignupModeratorService;