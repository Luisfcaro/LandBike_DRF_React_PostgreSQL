import { useCallback, useContext, useState, useEffect } from "react";
import IncidentService from "../services/IncidentService";
import IncidentContext from "../context/IncidentContext";
import { useNavigate } from "react-router-dom";

export function useIncidents() {
    const { incidents, setIncidents } = useContext(IncidentContext);
    const navigate = useNavigate();

    const [Validated, setValidated] = useState(false);

    const useAddIncident = useCallback(
        (slug, data) => {
            let data_incident = {
                slot_slug: slug,
                description: data.description,
            }

            IncidentService.createIncident(data_incident)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setIncidents([...incidents, data]);
                        console.log('Incidente creado con exito');
                        setValidated(true);
                    }
                })
                .catch(e => console.error(e));
        }, [navigate]
    );


    const useUpdateIncident = useCallback(
        (id, data) => {
            let data_incident = {
                incident_id: id,
                state: data.state,
            }

            IncidentService.updateIncident(data_incident)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setIncidents(incidents.map(incident => incident.id === data_incident.incident_id ? data : incident));
                        console.log('Incidente actualizado con exito');
                        setValidated(true);
                    }
                })
                .catch(e => console.error(e));
        }, [navigate]
    );

    const useOneIncident = useCallback(
        (id) => {
            IncidentService.getIncident(id)
                .then(({ data, status }) => {
                    if (status === 200) {
                        console.log('Buscando incidente');
                        setIncidents(data);
                    }
                })
                .catch(e => console.error(e));
        }, [setIncidents]
    );

    useEffect(() => {
        if (Validated) {
            navigate("/home");
        }
    }, [Validated, navigate]);

    return { Validated, useAddIncident, useUpdateIncident, useOneIncident, incidents, setIncidents};
}