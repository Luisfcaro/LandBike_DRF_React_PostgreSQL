import React, { useState, useEffect } from "react";
import StationService from "../services/StationService";

const StationContext = React.createContext();

export function StationContextProvider({ children }) {
    const [stations, setStations] = useState([]);

    useEffect(() => {
        StationService.getStations()
        .then((data) => {
            // console.log(data);
            setStations(data);
        });
    },[setStations]);

    return (
        <StationContext.Provider value={{ stations, setStations }}>
            {children}
        </StationContext.Provider>
    );
}

export default StationContext;