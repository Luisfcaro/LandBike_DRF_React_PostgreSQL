import React from "react";
import "./RentCard.css";


const RentCard = ({ rent }) => {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="item">
                <span className="category">{rent.id}</span>
                <h6>{rent.bike}</h6>
                <h4><a>{rent.user}</a></h4>
                <ul>
                    <li>Slot inicial: <span>{rent.initial_slot}</span></li>
                    <li>Slot final: <span>{rent.final_slot}</span></li>
                    <li>Fecha de inicio: <span>{rent.rent_date}</span></li>
                    <li>Fecha de fin: <span>{rent.return_date}</span></li>
                </ul>

            </div>
        </div>
    )
}

export default RentCard;
