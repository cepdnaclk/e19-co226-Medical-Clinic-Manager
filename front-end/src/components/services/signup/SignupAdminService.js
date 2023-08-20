import axios from "axios";

class SignupAdminService {
    handleSignup = async (data, token) => {
        const respond = await axios.post("https://lifecare-5z1q.onrender.com/api/v1/auth/admin/signup", data, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        
    }
}

export default SignupAdminService;