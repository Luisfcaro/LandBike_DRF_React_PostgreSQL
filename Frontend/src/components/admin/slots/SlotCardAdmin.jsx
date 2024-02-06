import React from "react";
import "./SlotCardAdmin.css";

const SlotCardAdmin = ({ slot, delete_slot }) => {

    return (
        <div className="col-lg-4 col-md-6">
            <div className="item">
                <a href="">
                    <img src={slot.image} alt="Slot_image" />
                </a>
                <span className="category">{slot.station}</span>
                <h6>{slot.slug}</h6>
                <h4><b>{slot.slot_name}</b></h4>
                <ul>
                    <li>Estado: <span>{slot.slot_status}</span></li>
                    <li>Bici asignada: <span>{slot.bike}</span></li>
                </ul>
                <div className="main-button">
                    <button className="button" onClick={() => delete_slot(slot.slug)}>
                        Eliminar Slot
                    </button>
                </div>
            </div>
        </div>
    );
}

export default SlotCardAdmin;