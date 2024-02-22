import React from "react";
import { useNavigate } from "react-router-dom";
import "./NotificationListCard.css";


const NotificationsListCard = ({ notification , read_notification}) => {
    const navigate = useNavigate();

    const read_noti = e => {
        e.preventDefault();
        read_notification(notification.id);
    }


    return (
        <div className="card">
            <div className="card__content">
                <p className="card__title"><b>{notification.user}</b></p>
                <p className="card__description"><b>Descripcion: </b>{notification.message}</p>
                <p className="card__description"><b>Fecha: </b>{notification.created_at}</p>
                <div className="card__button">
                    <button className="btn btn-primary" onClick={read_noti}>Ver Notificacion</button>
                </div>
            </div>
        </div>
    )
}

export default NotificationsListCard;