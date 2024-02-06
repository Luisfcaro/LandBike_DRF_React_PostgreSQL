import React from "react";
import "./SlotCardClient.css";


const SlotCardClient = ({ slot }) => {
    return (
        console.log(slot),
        <div className="card">
            <div className="card__image">
                <img src={slot.image} alt="Station" />
            </div>
            <div className="card__content">
                <p className="card__title"><b>{slot.slot_name}</b></p>
                <p className="card__description"><b>Estado: </b>{slot.slot_status}</p>
                <div className="card__button">
                    {slot.slot_status === "Disponible" ? (
                        <button className="btn btn-primary">Reservar</button>
                    ) : slot.slot_status === "No disponible" ? (
                        <button className="btn btn-danger" disabled>No Disponible</button>
                    ) : (
                        <button className="btn btn-secondary" disabled>En Mantenimiento</button>
                    )}
                    <button className="btn btn-danger" onClick="">Incidencia</button>
                </div>
            </div>
        </div>
    )
}

export default SlotCardClient;