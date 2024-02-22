import React from "react";
import "./IncidentCardAdmin.css";
import { useNavigate } from "react-router-dom";

const IncidentsCardAdmin = ({ incident, delete_incident }) => {
    const navigate = useNavigate();

    const redirects = {
        update_incident: (id) => navigate(`/dashboard/incidents/${id}/edit`),
    }

    return (
        <div className="col-lg-4 col-md-6">
            <div className="item">
                <h4><b>{incident.slot}</b></h4>
                <ul>
                    <li>Estado: <span>{incident.state}</span></li>
                    <li>Fecha Reporte: <span>{incident.incident_date}</span></li>
                    <li>Fecha Resolucion: <span>{incident.resolved_date}</span></li>
                    <li>Descripcion: <span>{incident.description}</span></li>
                    <li>Reportada por: <span>{incident.user}</span></li>
                </ul>
                <div className="main-button">
                    <button className="button" onClick={() => redirects.update_incident(incident.id)}>
                        Editar Incidencia
                    </button>
                </div>
            </div>
        </div>
    );
}

export default IncidentsCardAdmin;