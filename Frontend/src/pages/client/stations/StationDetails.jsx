import React, { useEffect, useState } from "react";
import { useParams , useNavigate} from "react-router-dom";
import { useStations } from "../../../hooks/useStations";
import SlotsListClient from "../../../components/client/slots/SlotsListClient";



const StationDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const { oneStation, useOneStation , stationSlots} = useStations();

    useEffect(() => {
        useOneStation(id);
    }, []);

        return (
            // console.log(stationSlots)
            stationSlots.length > 0 ? <SlotsListClient station={oneStation} slots={stationSlots} /> : <h1>No hay slots</h1>
        )
    }

export default StationDetails;

