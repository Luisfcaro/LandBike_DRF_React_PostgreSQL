import React from 'react';
import { useNavigate } from 'react-router-dom';
import './StationsListAdmin.css';
import StationCardAdmin from './StationCardAdmin';

export default function StationsListAdmin({ stations, delete_station }) {

    const navigate = useNavigate();

    const redirects = {
        create_station: () => navigate('/dashboard/stations/create'),
    }


    return (
        <div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Estaciones</h6>
                                <h1>Te ofrecemos las estaciones más cercanas</h1>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <button className='button-30 mb-5' onClick={redirects.create_station}>Crear Estacion</button>
                        {
                            stations.map((station) => (
                                <StationCardAdmin key={station.id} station={station} delete_station={delete_station} />
                            ))
                        }
                    </div>
                </div>
            </div>



        </div>
    )
}
