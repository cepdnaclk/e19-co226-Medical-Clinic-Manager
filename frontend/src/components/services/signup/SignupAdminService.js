import axios from "axios";

class SignupAdminService {
    handleSignup = async (data, token) => {
        const respond = await axios.post("http://localhost:8080/api/v1/auth/admin/signup", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
    }
}

export default SignupAdminService;