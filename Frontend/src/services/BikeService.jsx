import api from "./Api";

const BikeService = {
    getBikes: async () => {
        try {
            const response = await api().get("rest/bikes/");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    getBike: async (slug) => {
        try {
            const response = await api().get(`rest/bikes/${slug}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    createBike: async (bike) => {
        try {
            const response = await api().post("rest/bikes/", bike);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateBike: async (slug, bike) => {
        try {
            const response = await api().patch(`rest/bikes/${slug}/`, bike)
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    deleteBike: async (slug) => {
        try {
            const response = await api().delete(`rest/bikes/${slug}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

};

export default BikeService;