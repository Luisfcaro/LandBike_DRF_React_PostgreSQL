import React from "react";
import { useNavigate } from "react-router-dom";
import "./StationListCard.css";


const StationsListCard = ({ station }) => {
    const navigate = useNavigate();

    const redirects = {
        view_station: (id) => () => navigate(`/station/${id}`),
    }

    return (
        <div className="card">
            <div className="card__image">
                <img src={station.image} alt="Station" />
            </div>
            <div className="card__content">
                <p className="card__title"><b>{station.station_name}</b></p>
                <p className="card__description"><b>Descripcion: </b>{station.station_desc}</p>
                <p className="card__description"><b>Location: </b>{station.location}</p>
                <p className="card__description"><b>Slots: </b>{station.qty_slots}</p>
                <p className="card__description"><b>Bikes: </b>{station.bikes_aviable}</p>
                <div className="card__button">
                    <button className="btn btn-primary" onClick={redirects.view_station(station.id)}>Ver Estacion</button>
                </div>
            </div>
        </div>
    )
}

export default StationsListCard;