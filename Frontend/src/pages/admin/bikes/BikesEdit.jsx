import React, { useEffect } from "react";
import BikeFormPage from "../../../components/admin/bikes/BikeFormPage";
import { useBikes } from "../../../hooks/useBikes";
import { useNavigate, useParams } from "react-router-dom";

const BikesEdit = () => {
    const { Validated, useUpdateBike } = useBikes();
    const { oneBike, useOneBike } = useBikes();
    const navigate = useNavigate();
    const form_type = 'update';
    const { slug } = useParams();

    useEffect(() => {
        if (slug !== '') {
            useOneBike(slug);
        }

        if (Validated) {
            navigate("/dashboard/bikes");
        }
    }, [Validated, navigate]);

    return (
        <div className='bike_add_container'>
            <div className='title'>
                <h1>Editar Bicicleta</h1>
            </div>
            <BikeFormPage bike={oneBike} form_type={form_type} sendData={(data) => useUpdateBike(slug, data)} />
        </div>
    )
}

export default BikesEdit;