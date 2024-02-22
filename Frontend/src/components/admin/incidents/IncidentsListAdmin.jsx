import React from "react";
import "./IncidentsListAdmin.css";
import IncidentCardAdmin from "./IncidentCardAdmin";

const IncidentsListAdmin = ({ incidents }) => {

    return (
        console.log(incidents),
        <div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        {incidents.lenght === 0 ? <h1>No hay incidentes</h1> : incidents.map((incident) => (
                            <IncidentCardAdmin key={incident.id} incident={incident} />
                        ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
}

export default IncidentsListAdmin;