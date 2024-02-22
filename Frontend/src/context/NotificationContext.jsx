import React, {useEffect, useState, useContext} from "react";
import NotificationService from "../services/NotificationService";
import AuthContext from "./AuthContext";

const NotificationContext = React.createContext();

export function NotificationContextProvider({ children }) {
    const [notifications, setNotifications] = useState([]);
    const {isAuth} = useContext(AuthContext);

    useEffect(() => {
        if(isAuth){
            NotificationService.getNotifications()
                .then(({ data, status }) => {
                    if (status === 200) {
                        console.log(data);
                        setNotifications(data);
                    }
                })
                .catch(e => console.error(e));
        }
    },[setNotifications, isAuth]);

    return (
        <NotificationContext.Provider value={{ notifications, setNotifications }}>
            {children}
        </NotificationContext.Provider>
    );
}

export default NotificationContext;