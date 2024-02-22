import React, {useEffect} from "react";
import IncidentsFormPage from "../../../components/admin/incidents/IncidentsFormPage";
import { useIncidents } from "../../../hooks/useIncidents";
import { useNavigate, useParams } from "react-router-dom";

const IncidentsEdit = () => {
    const { Validated, useUpdateIncident, useOneIncident, oneIncident } = useIncidents();
    const navigate = useNavigate();
    const form_type = 'update';
    const { id } = useParams();

    useEffect(() => {
        if (id !== '') {
            useOneIncident(id);
        }

        if (Validated) {
            navigate("/home");
        }
    }, [Validated, navigate]);

    return (
        <div className='incident_add_container'>
            <div className='title'>
                <h1>Editar Incidente</h1>
            </div>
            <IncidentsFormPage incident={oneIncident} form_type={form_type} sendData={(data) => useUpdateIncident(id, data)} />
        </div>
    )
}

export default IncidentsEdit;