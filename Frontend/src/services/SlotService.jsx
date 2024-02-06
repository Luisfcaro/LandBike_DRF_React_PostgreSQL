import api from "./Api";

const SlotService = {
    
    getSlots: async (station = null) => {
        try {
            const response = await api().get("rest/slots/", { params: station });
            return response;
        } catch (error) {
            console.error(error);
        }
    },


    getSlot: async (slug) => {
        try {
            const response = await api().get(`rest/slots/${slug}/`);
            // console.log(response);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    createSlot: async (slot) => {
        try {
            const response = await api().post("rest/slots/", slot);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateSlot: async (slug, slot) => {
        try {
            const response = await api().patch(`rest/slots/${slug}/`, slot)
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    deleteSlot: async (slug) => {
        try {
            const response = await api().delete(`rest/slots/${slug}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

};

export default SlotService;