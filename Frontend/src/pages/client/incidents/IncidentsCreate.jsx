import React, {useEffect} from "react";
import IncidentsFormPage from "../../../components/admin/incidents/IncidentsFormPage";
import { useIncidents } from "../../../hooks/useIncidents";
import { useNavigate , useParams} from "react-router-dom";


const IncidentsCreate = () => {
    const { Validated, useAddIncident } = useIncidents();
    const navigate = useNavigate();
    const form_type = 'create';
    const { slug } = useParams();

    useEffect(() => {
        if (Validated) {
            navigate("/home");
        }
    }, [Validated, navigate]);

    return (
        <div className='incident_add_container'>
            <div className='title'>
                <h1>Crear Incidente</h1>
            </div>
            <IncidentsFormPage form_type={form_type} sendData={(data) => useAddIncident(slug, data)}/>
        </div>
    )
}

export default IncidentsCreate;