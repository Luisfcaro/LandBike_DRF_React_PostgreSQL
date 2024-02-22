import { useState, useCallback, useContext, useEffect } from "react";
import NotificationService from "../services/NotificationService";
import NotificationContext from "../context/NotificationContext";
import { useNavigate } from "react-router-dom";

export function useNotifications() {
    const { notifications, setNotifications } = useContext(NotificationContext);
    const navigate = useNavigate();

    const useGetNotifications = useCallback(
        () => {
            NotificationService.getNotifications()
                .then(({ data, status }) => {
                    if (status === 200) {
                        console.log(data);
                        setNotifications(data);
                    }
                })
                .catch(e => console.error(e));
        }, [setNotifications]
    );

    const useReadNotification = useCallback(
        (id) => {
            NotificationService.readNotification(id)
                .then(({ data, status }) => {
                    if (status === 200) {
                        setNotifications([...notifications, data]);
                        console.log('notificacion leida con exito');
                        navigate(`/home`);
                    }
                })
                .catch(e => console.error(e));
        }, [navigate]
    );

    return { notifications, setNotifications, useGetNotifications , useReadNotification};
}   

