import React from 'react';
import './StationCardAdmin.css';
import { useNavigate } from 'react-router-dom';


export default function StationCardAdmin({ station, delete_station }) {

    const navigate = useNavigate();

    const redirects = {
        update_station: (id) => navigate(`/dashboard/stations/${id}/edit`),
    }


    return (
        <div className="col-lg-4 col-md-6">
            <div className="item">
                <a href=""><img src={station.image} alt="Station_image" /></a>
                <span className="category">{station.location}</span>
                <h6>{station.station_name}</h6>
                <h4><a href="">{station.station_desc}</a></h4>
                <ul>
                    <li>Estado: <span>{station.station_status}</span></li>
                </ul>
                <div className="main-button">
                    <button className="button" onClick={() => redirects.update_station(station.id)}>Editar Estacion</button>
                    <button className="button" onClick={() => delete_station(station.id)}>Eliminar Estacion</button>
                </div>

            </div>
        </div>
    )
}
