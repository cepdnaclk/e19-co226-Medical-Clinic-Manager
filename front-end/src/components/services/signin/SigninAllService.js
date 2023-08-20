import axios from "axios";

class SigninAllService {
    handleSignin = async (data) => {
        const response = await axios.post("https://lifecare-5z1q.onrender.com/api/v1/auth/all/signin", data);
        sessionStorage.setItem('user', JSON.stringify(response.data));
        // localStorage.setItem('user', JSON.stringify(response.data));
        return response;
        // console.log(response);
    }
}

export default SigninAllService;