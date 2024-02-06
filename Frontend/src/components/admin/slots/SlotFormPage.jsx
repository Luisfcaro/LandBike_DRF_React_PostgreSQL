import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './SlotFormPage.css';
import { useStations } from "../../../hooks/useStations";
import { useBikes } from "../../../hooks/useBikes";

const SlotFormPage = ({ slot = { id: '', slug: '', slot_name: '', slot_status: '', image: '', station: '', bike: '' }, form_type, sendData }) => {
    const navigate = useNavigate();

    const { stations } = useStations();
    const { bikes } = useBikes();

    const [formData, setFormData] = useState({
        id: '',
        slug: '',
        slot_name: '',
        slot_status: '',
        image: '',
        station: '',
        bike: ''
    });

    useEffect(() => {
        if (slot.slug !== '') {
            setFormData({
                id: slot.id || '',
                slug: slot.slug || '',
                slot_name: slot.slot_name || '',
                slot_status: slot.slot_status || '',
                image: slot.image || '',
                station: slot.station || '',
                bike: slot.bike || ''
            });
        }
    }, [slot]);

    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const send_data = e => {
        e.preventDefault();
        sendData(formData);
    }

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={send_data}>
                    <div className="form-group">
                        <label htmlFor="slot_name">Nombre del slot</label>
                        <input required="" name="slot_name" id="slot_name" value={formData.slot_name} type="text" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="slot_status">Estado del slot</label>
                        <select required="" name="slot_status" id="slot_status" value={formData.slot_status} onChange={handleInputChange}>
                            <option value="" disabled>Seleccionar estado</option>
                            <option value="Disponible">Disponible</option>
                            <option value="No disponible">No disponible</option>
                            <option value="En mantenimiento">En mantenimiento</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="image">Imagen</label>
                        <input required="" name="image" id="image" value={formData.image} type="text" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="station">Estación</label>
                        <select required="" name="station" id="station" value={formData.station} onChange={handleInputChange}>
                            <option value="">Seleccionar estación</option>
                            {stations.map(station => (
                                <option key={station.id} value={station.id}>{station.station_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <label htmlFor="bike">Bicicleta</label>
                        <select required="" name="bike" id="bike" value={formData.bike} onChange={handleInputChange}>
                            <option value="">Seleccionar bicicleta</option>
                            {bikes.map(bike => (
                                <option key={bike.id} value={bike.id}>{bike.bike_name}</option>
                            ))}
                        </select>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Crear</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default SlotFormPage;
