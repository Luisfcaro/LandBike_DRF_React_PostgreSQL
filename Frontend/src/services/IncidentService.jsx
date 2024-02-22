import api from './Api';


const IncidentService = {

    getIncidents: async () => {
        try {
            const response = await api().get("rest/incidents/");
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    getIncident: async (id) => {
        try {
            const response = await api().get(`rest/incidents/${id}/`);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    createIncident: async (incident) => {
        try {
            const response = await api().post("rest/create_incident/", incident);
            return response;
        } catch (error) {
            console.error(error);
        }
    },

    updateIncident: async (incident) => {
        console.log(incident)
        try {
            const response = await api().post(`rest/resolve_incident/`, incident);
            return response;
        } catch (error) {
            console.error(error);
        }
    },



}

export default IncidentService;

