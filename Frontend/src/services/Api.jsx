import axios from "axios";
import secrets from "../../secrets";
import JWTService from "./JWTService";

const Axios = () => {

    let api = null

    if (JWTService.getToken()) {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${JWTService.getToken()}`
            }
        });
    } else if (localStorage.getItem('ref_token')) {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${localStorage.getItem('ref_token')}`
            }
        });
    } else {
        api = axios.create({
            baseURL: secrets.URL_DRF,
            headers: {
                "Content-type": "application/json",
            }
        });
    }

    api.interceptors.response.use(
        (response) => response,
        (error) => {
            if (error.response.status === 403) {
                JWTService.destroyToken();
                JWTService.destroyRefreshToken();
                window.location.reload();
            }
            return Promise.reject(error);
        }
    );

    return api;

}

export default Axios;
