import React, {useEffect} from "react";
import SlotFormPage from "../../../components/admin/slots/SlotFormPage";
import {useNavigate} from "react-router-dom";
import {useSlots} from "../../../hooks/useSlots";

const SlotsCreate = () => {
    const {Validated, useAddSlot} = useSlots();
    const navigate = useNavigate();

    useEffect(() => {
        if (Validated) {
            navigate("/dashboard/slots");
        }
    }, [Validated, navigate]);

    return (
        <div className='slot_add_container'>
            <div className='title'>
                <h1>Crear Slot</h1>
            </div>
            <SlotFormPage sendData={(data) => useAddSlot(data)}/>
        </div>
    )
}

export default SlotsCreate;
