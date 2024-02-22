import React from "react";
import SlotCardClient from "./SlotCardClient";
import { useRents } from "../../../hooks/useRents";


const SlotsListClient = ({ station, slots }) => {
    const { rents, useAddRent, useReturnBike } = useRents();

    return (
            <div className="row ">
                {slots.map((slot) => (
                    <SlotCardClient key={slot.id} slot={slot} addRent={(data) => useAddRent(data)} returnBike={(data) => useReturnBike(data)} />
                    // <h1>Slot</h1>
                ))
                }
            </div>
    )
}

export default SlotsListClient;