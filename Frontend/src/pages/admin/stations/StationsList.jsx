import React from "react";
import { useStations } from "../../../hooks/useStations";
import StationsListAdmin from "../../../components/admin/stations/StationsListAdmin";

const StationsList = () => {

  const { stations, useDeleteStation } = useStations();

  return (
    // console.log(stations),
    <div>
      <StationsListAdmin stations={stations} delete_station={useDeleteStation}/>
    </div>
  )
}

export default StationsList;
