import React from "react";
import "./BikeCardAdmin.css";
import { useNavigate } from "react-router-dom";

const BikeCardAdmin = ({ bike, delete_bike }) => {
    const navigate = useNavigate();

    const redirects = {
        update_bike: (slug) => navigate(`/dashboard/bikes/${slug}/edit`),
    }

    return (
        <div className="col-lg-4 col-md-6">
            <div className="item">
                <h4><b>{bike.bike_name}</b></h4>
                <ul>
                    <li>Estado: <span>{bike.bike_status}</span></li>
                </ul>
                <div className="main-button">
                    <button className="button" onClick={() => redirects.update_bike(bike.slug)}>
                        Editar Bicicleta
                    </button>
                    <button className="button" onClick={() => delete_bike(bike.slug)}>
                        Eliminar Bicicleta
                    </button>
                </div>
            </div>
        </div>
    );
}

export default BikeCardAdmin;