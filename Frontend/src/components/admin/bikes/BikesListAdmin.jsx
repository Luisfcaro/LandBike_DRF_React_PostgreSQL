import React from "react";
import { useNavigate } from "react-router-dom";
import "./BikesListAdmin.css";
import BikeCardAdmin from "./BikeCardAdmin";

const BikesListAdmin = ({ bikes, delete_bike }) => {
    const navigate = useNavigate();

    const redirects = {
        create_bike: () => navigate("/dashboard/bikes/create"),
    };

    return (
        <div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <button className="button-30 mb-5" onClick={redirects.create_bike}>
                            Crear Bicicleta
                        </button>
                        {bikes.map((bike) => (
                            <BikeCardAdmin key={bike.slug} bike={bike} delete_bike={delete_bike} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BikesListAdmin;