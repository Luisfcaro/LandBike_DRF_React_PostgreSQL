import React, { useEffect, useState } from "react";
import "./IncidentsFormPage.css";
import { useNavigate } from "react-router-dom";


const IncidentsFormPage = ({ incident = { id: '', state: '', description: '' }, form_type, sendData }) => {
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        state: '',
        description: '',
    });

    useEffect(() => {
        if (incident.id !== '') {
            setFormData({
                state: incident.state || '',
                description: incident.description || '',
            });
        }
    }, [incident]);

    const handleInputChange = event => {
        const { name, value } = event.target

        setFormData({ ...formData, [name]: value })
    }

    const send_data = e => {
        e.preventDefault();
        sendData(formData);
    }

    const redirects = {
        incidents: () => navigate('/home')
    }

    const type_button = form_type === 'create' ? 'Crear' : 'Actualizar';

    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={send_data}>

                    {form_type === 'update' && (
                        <div className="form-group">
                            <label htmlFor="state">Estado de la incidencia</label>
                            <select required="" name="state" id="state" value={formData.state} onChange={handleInputChange}>
                                <option value="" disabled>Seleccione un estado</option>
                                <option value="open">Abierta</option>
                                <option value="on progress">En proceso</option>
                                <option value="resolved">Cerrada</option>
                            </select>
                        </div>
                    )}

                    {form_type === 'create' && (
                        <div className="form-group">
                            <label htmlFor="description">Descripción de la incidencia</label>
                            <textarea required="" name="description" id="description" value={formData.description} onChange={handleInputChange}></textarea>
                        </div>
                    )}


                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">{type_button} Incidencia</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default IncidentsFormPage;