import axios from "axios";

class SigninAllService {
    handleSignin = async (data) => {
        const response = await axios.post("http://localhost:8080/api/v1/auth/all/signin", data);
        console.log(response);
    }
}

export default SigninAllService;