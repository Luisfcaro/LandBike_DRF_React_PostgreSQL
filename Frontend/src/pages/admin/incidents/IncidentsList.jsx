import React from "react";
import { useIncidents } from "../../../hooks/useIncidents";
import IncidentsListAdmin from "../../../components/admin/incidents/IncidentsListAdmin";

const IncidentsList = () => {
    const { incidents } = useIncidents();

    return (
        <div>
            <IncidentsListAdmin incidents={incidents} />
        </div>
    )
}

export default IncidentsList;