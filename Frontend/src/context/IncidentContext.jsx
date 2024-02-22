import React, {useState, useEffect, useContext} from "react";
import IncidentService from "../services/IncidentService";
import AuthContext from "./AuthContext";

const IncidentContext = React.createContext();

export function IncidentContextProvider({ children }) {
    const [incidents, setIncidents] = useState([]);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        if(isAuth){
            IncidentService.getIncidents()
                .then(({ data, status }) => {
                    if (status === 200) {
                        console.log(data);
                        setIncidents(data);
                    }
                })
                .catch(e => console.error(e));
        }
    },[setIncidents, isAuth]);

    return (
        <IncidentContext.Provider value={{ incidents, setIncidents }}>
            {children}
        </IncidentContext.Provider>
    );
}

export default IncidentContext;
