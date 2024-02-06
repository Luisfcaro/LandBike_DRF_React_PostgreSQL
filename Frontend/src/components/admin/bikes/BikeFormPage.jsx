import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './BikeFormPage.css';

const BikeFormPage = ({ bike = { id: '', slug: '', bike_status: '', bike_name: '' }, form_type, sendData }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        slug: '',
        bike_status: '',
        bike_name: '',
    });

    useEffect(() => {
        if (bike.slug !== '') {
            setFormData({
                id: bike.id || '',
                slug: bike.slug || '',
                bike_status: bike.bike_status || '',
                bike_name: bike.bike_name || '',
            });
        }
    }, [bike]);

    const handleInputChange = event => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const send_data = e => {
        e.preventDefault();
        sendData(formData);
    }

    const redirects = {
        bikes: () => navigate('/dashboard/bikes')
    }

    const type_button = form_type === 'create' ? 'Crear' : 'Actualizar';

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={send_data}>
                    <div className="form-group">
                        <label htmlFor="bike_name">Nombre de la bicicleta</label>
                        <input required="" name="bike_name" id="bike_name" value={formData.bike_name} type="text" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bike_status">Estado de la bicicleta</label>
                        <select required="" name="bike_status" id="bike_status" value={formData.bike_status} onChange={handleInputChange}>
                            <option value="" disabled>Seleccione un estado</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                            <option value="En reparación">En reparación</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{type_button}</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default BikeFormPage;