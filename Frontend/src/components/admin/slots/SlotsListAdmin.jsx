import React from "react";
import { useNavigate } from "react-router-dom";
import "./SlotsListAdmin.css";
import SlotCardAdmin from "./SlotCardAdmin";

const SlotsListAdmin = ({ slots, delete_slot }) => {
    const navigate = useNavigate();

    const redirects = {
        create_slot: () => navigate("/dashboard/slots/create"),
    };

    return (
        <div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <button className="button-30 mb-5" onClick={redirects.create_slot}>
                            Crear Slot
                        </button>
                        {slots.map((slot) => (
                            <SlotCardAdmin key={slot.slug} slot={slot} delete_slot={delete_slot} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SlotsListAdmin;