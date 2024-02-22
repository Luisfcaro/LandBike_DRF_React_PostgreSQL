import React from "react";
import { useBikes } from "../../../hooks/useBikes";
import BikesListAdmin from "../../../components/admin/bikes/BikesListAdmin";

const BikesList = () => {
    const { bikes, useDeleteBike } = useBikes();

    return (
        <div>
            <BikesListAdmin bikes={bikes} delete_bike={useDeleteBike}/>
        </div>
    )
}

export default BikesList;