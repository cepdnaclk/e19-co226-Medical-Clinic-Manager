import axios from "axios";

class SignupUserService {
    handleSignup = async (data) => {
        const respond = await axios.post("http://localhost:8080/api/v1/auth/user/signup", data);
        
    }
}

export default SignupUserService;