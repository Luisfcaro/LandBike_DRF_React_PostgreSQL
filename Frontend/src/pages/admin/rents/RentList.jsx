import React from "react";
import { useRents } from "../../../hooks/useRents";
import RentListAdmin from "../../../components/admin/rents/RentListAdmin";

const RentList = () => {
    const { rents } = useRents();

    console.log(rents);

    return (
        <div>
            <RentListAdmin rents={rents} />
        </div>

    )
}

export default RentList;