import api from "./Api";

const StationService = {

    getStations: async () => {
        try {
            const response = await api().get("rest/stations/");
            return response.data;
        } catch (error) {
            console.error(error);
        }
    },

    getStation: async (id) => {
        try {
            const response = await api().get(`rest/stations/${id}/`);
            // console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    createStation: async (station) => {
        try {
            const response = await api().post("rest/stations/", station);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateStation: async (id, station) => {
        try {
            const response = await api().patch(`rest/stations/${id}/`, station)
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    deleteStation: async (id) => {
        try {
            const response = await api().delete(`rest/stations/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

  };


export default StationService;