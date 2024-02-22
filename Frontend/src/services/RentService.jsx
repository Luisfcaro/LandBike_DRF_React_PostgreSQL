import api from "./Api";

const RentService = {

    getRents: async () => {
        try {
            const response = await api().get("rest/rents/");
            // console.log(response.data);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    getRent: async (id) => {
        try {
            const response = await api().get(`rest/rents/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    createRent: async (rent) => {
        try {
            const response = await api().post("rest/rent_bike/", rent);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateRent: async (rent) => {
        try {
            const response = await api().post(`rest/return_bike/`, rent)
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    deleteRent: async (id) => {
        try {
            const response = await api().delete(`rest/rents/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

}

export default RentService;