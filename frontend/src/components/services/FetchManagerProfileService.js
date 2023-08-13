import axios from "axios";

class FetchPatientProfileService {
    handleProfileData = async () => {
        try {
            const userJSON = sessionStorage.getItem('user');
            // console.log('userJSON:', userJSON); // Add this line to check the value
            const user = JSON.parse(userJSON);
            const token = user.accessToken;
            console.log(user.id);
            const response = await axios.get("http://localhost:8080/api/v1/manager/findbyuserid/" + user.id, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            return response;
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    };
    
};

export default FetchPatientProfileService;