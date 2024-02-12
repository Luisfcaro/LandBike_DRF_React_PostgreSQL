import api from "./Api";


const AuthService = {
    Register: async (data) => {
        try {
            const response = await api().post("rest/register/", data);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    Login: async (data) => {
        try {
            const response = await api().post("rest/login/", data);
            return response;
        } catch (error) {
            console.error(error);
        }
    }, 

    GetActualUser: async () => {
        try {
            const response = await api().get("rest/user/");
            return response;
        } catch (error) {
            console.error(error);
        }
    },

};


export default AuthService;