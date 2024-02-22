import React, {useState, useEffect, useContext} from "react";
import RentService from "../services/RentService";
import AuthContext from "./AuthContext";

const RentContext = React.createContext();

export function RentContextProvider({ children }) {
    const [rents, setRents] = useState([]);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        if(isAuth){
            RentService.getRents()
                .then(({ data, status }) => {
                    if (status === 200) {
                        console.log('Buscando rents');
                        setRents(data);
                    }
                })
                .catch(e => console.error(e));
        }
    },[setRents, isAuth]);

    return (
        <RentContext.Provider value={{ rents, setRents }}>
            {children}
        </RentContext.Provider>
    );
}

export default RentContext;