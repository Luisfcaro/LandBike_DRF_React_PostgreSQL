import React from 'react';
import './StationCardAdmin.css';
import { useNavigate } from 'react-router-dom';


export default function StationCardAdmin({ station , delete_station }) {

    const navigate = useNavigate();

    const redirects = {
        update_station: (id) => navigate(`/dashboard/stations/${id}/edit`),
    }


    return (
        <div className="myCard">
            <div className="innerCard">
                <div className="frontSide">
                    <p className="title">{station.station_name}</p>
                    <p>{station.location}</p>
                </div>
                <div className="backSide">
                    <p className="title">{station.station_desc}</p>
                    <p>{station.id}</p>
                    <button className="button" onClick={() => redirects.update_station(station.id)}>Editar Estacion</button>
                    <button className="button" onClick={() => delete_station(station.id)}>Eliminar Estacion</button>
                    {/* <StationModalDelete station={station} delete_station={delete_station}/> */}
                </div>
            </div>
        </div>
    )
}
