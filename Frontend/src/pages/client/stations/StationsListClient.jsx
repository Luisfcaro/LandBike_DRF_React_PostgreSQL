import React from "react";
import { useStations } from "../../../hooks/useStations";
import StationListCard from "../../../components/client/stations/StationListCard";

const StationsListClient = () => {

    const { stations } = useStations();

    return (
        <div className="row ">
            {stations.map((station) => (
                <StationListCard key={station.id} station={station} />
            ))
            }
        </div>
    )
}

export default StationsListClient;