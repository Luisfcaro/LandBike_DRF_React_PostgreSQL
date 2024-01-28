import React from 'react';
import { useNavigate } from 'react-router-dom';

import StationCardAdmin from './StationCardAdmin';

export default function StationsListAdmin({ stations , delete_station }) {

    const navigate = useNavigate();

    const redirects = {
        create_station: () => navigate('/dashboard/stations/create'),
    }


    return (
        <div>
            <button className='button' onClick={redirects.create_station}>Crear Estacion</button>
            {
                stations.map((station) => (
                    <StationCardAdmin key={station.id} station={station} delete_station={delete_station}/>
                ))
            }
        </div>
    )
}
