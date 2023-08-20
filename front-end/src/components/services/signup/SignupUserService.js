import axios from "axios";

class SignupUserService {
    handleSignup = async (data) => {
        try{
            const respond = await axios.post("https://lifecare-5z1q.onrender.com/api/v1/auth/user/signup", data);
        } catch (error) {
            console.error("Signup failed:", error.response.status === 400);
        }
    }
}

export default SignupUserService;