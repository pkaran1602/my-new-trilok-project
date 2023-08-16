import axios from "axios";
import API_URL from "../api_url/API_URL";

const login = async (username, password) => {
    return axios.post(API_URL + "api/admin_login", {
        email: username, password: password
    }).then((response) => {
        if (response.data.success === true) {
            localStorage.setItem("user", JSON.stringify(response.data.data));
        }
        return response.data;
    });
};
const logout = () => {
    localStorage.removeItem("user");
};
export default {
    login,
    logout,
};