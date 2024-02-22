import React from "react";
import "./RentListAdmin.css";
import RentCard from "../../../components/admin/rents/RentCard";


const RentListAdmin = ({rents}) => {

    return (
        <div>
            <div className="properties section">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 offset-lg-4">
                            <div className="section-heading text-center">
                                <h6>| Reservas </h6>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {
                            rents.map((rent) => (
                                <RentCard key={rent.id} rent={rent} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default RentListAdmin;