import React, {useEffect} from "react";
import BikeFormPage from "../../../components/admin/bikes/BikeFormPage";
import { useBikes } from "../../../hooks/useBikes";
import { useNavigate } from "react-router-dom";

const BikesCreate = () => {
    const { Validated, useAddBike } = useBikes();
    const navigate = useNavigate();
    const form_type = 'create';


    useEffect(() => {
        if (Validated) {
            navigate("/dashboard/bikes");
        }
    }, [Validated, navigate]);

    return (
        <div className='bike_add_container'>
            <div className='title'>
                <h1>Crear Bicicleta</h1>
            </div>
            <BikeFormPage form_type={form_type} sendData={(data) => useAddBike(data)}/>
        </div>
    )
}

export default BikesCreate;

