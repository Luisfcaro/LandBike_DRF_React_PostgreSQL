import React, { useEffect, useState } from "react";
import BikeService from "../services/BikeService";

const BikeContext = React.createContext();

export function BikeContextProvider({ children }) {
    const [bikes, setBikes] = useState([]);


    useEffect(() => {
        BikeService.getBikes()
            .then((data) => {
                setBikes(data);
            });
    }, [setBikes]);

    return (
        <BikeContext.Provider value={{ bikes, setBikes }}>
            {children}
        </BikeContext.Provider>
    );
}

export default BikeContext;