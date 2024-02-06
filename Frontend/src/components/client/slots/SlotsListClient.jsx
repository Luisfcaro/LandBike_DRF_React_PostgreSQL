import React from "react";
import SlotCardClient from "./SlotCardClient";


const SlotsListClient = ({ station, slots }) => {
    return (
            <div className="row ">
                {slots.map((slot) => (
                    <SlotCardClient key={slot.id} slot={slot} />
                    // <h1>Slot</h1>
                ))
                }
            </div>
    )
}

export default SlotsListClient;