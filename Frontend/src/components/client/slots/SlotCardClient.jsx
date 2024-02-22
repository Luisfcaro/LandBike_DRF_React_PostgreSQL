import React from "react";
import "./SlotCardClient.css";
import { useNavigate } from "react-router-dom";


const SlotCardClient = ({ slot , addRent, returnBike}) => {

    const navigate = useNavigate();

    const redirects = {
        create_incidence: (slug) => () => navigate(`/create_incident/${slug}`),
    };

    const send_data_add = e => {
        e.preventDefault();
        addRent(slot.slug);
    }

    const send_data_return = e => {
        e.preventDefault();
        returnBike(slot.slug);
    }


    return (
        // console.log(slot),
        <div className="card">
            <div className="card__image">
                <img src={slot.image} alt="Station" />
            </div>
            <div className="card__content">
                <p className="card__title"><b>{slot.slot_name}</b></p>
                <p className="card__description"><b>Estado: </b>{slot.slot_status}</p>
                <div className="card__button">
                    {slot.slot_status === "Disponible" ? (
                        <button className="btn btn-primary" onClick={send_data_add}>Recoger Bici</button>
                    ) : slot.slot_status === "No disponible" ? (
                        <button className="btn btn-danger" onClick={send_data_return}>Dejar Bici</button>
                    ) : (
                        <button className="btn btn-secondary" disabled>En Mantenimiento</button>
                    )}
                    <button className="btn btn-danger" onClick={redirects.create_incidence(slot.slug)}>Incidencia</button>
                </div>
            </div>
        </div>
    )
}

export default SlotCardClient;