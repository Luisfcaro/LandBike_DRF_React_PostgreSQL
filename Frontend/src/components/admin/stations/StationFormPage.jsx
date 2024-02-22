import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './StationFormPage.css';

const StationFormPage = ({ station = { id: '', station_name: '', num_slots: '' , location: ''}, form_type, sendData }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        id: '',
        station_name: '',
        location: '',
        num_slots: '',
    });

    useEffect(() => {
        if (station.id !== '') {
            // console.log(station);
            setFormData({
                id: station.id || '',
                station_name: station.station_name || '',
                location: station.location || '',
                num_slots: station.num_slots || '',
            });
        }
    }, [station]);

    const handleInputChange = event => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }


    const send_data = e => {
        e.preventDefault();
        // console.log(formData);
        sendData(formData);
    }

    const redirects = {
        stations: () => navigate('/dashboard/stations')
    }

    const type_button = form_type === 'create' ? 'Crear' : 'Actualizar';
    const type_action = form_type === 'edit' ? true : false;

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={send_data}>
                    <div className="form-group">
                        <label htmlFor="station_name">Nombre de la estación</label>
                        <input required="" name="station_name" id="station_name" value={formData.station_name} type="text" onChange={handleInputChange} />
                    </div>
                    <div className="form-group">
                        <label htmlFor="location">Ubicación</label>
                        <input required="" name="location" id="location" value={formData.location} type="text" onChange={handleInputChange} />
                    </div>
                    {form_type === 'create' && (
                        <div className="form-group">
                            <label htmlFor="num_slots">Número de espacios</label>
                            <input name="num_slots" id="num_slots" value={formData.num_slots} type="number" onChange={handleInputChange} />
                        </div>
                    )}
                    <button type="submit" className="form-submit-btn">{type_button}</button>
                </form>
            </div>
        </div>
    )
}

export default StationFormPage;
