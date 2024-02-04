import React from "react";
import { useSlots } from "../../../hooks/useSlots";
import SlotsListAdmin from "../../../components/admin/slots/SlotsListAdmin";

const SlotsList = () => {

    const { slots, useDeleteSlot } = useSlots();

    return (
        // console.log(slots),
        <div>
            <SlotsListAdmin slots={slots} delete_slot={useDeleteSlot} />
        </div>
    )
}

export default SlotsList;