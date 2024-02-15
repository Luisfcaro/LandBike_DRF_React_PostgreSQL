import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingUpForm.css";

const SingUpForm = ({ send_data, errorMSG }) => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
        password_confirmation: ''
    });


    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleRegister = e => {
        e.preventDefault();
        send_data(formData);
    }


    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={handleRegister}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input required="" name="username" id="username" value={formData.username} type="text" onChange={handleInputChange} />
                        {/* <span className="error">{errors.username?.message}</span> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input required="" name="email" id="email" value={formData.email} type="text" onChange={handleInputChange} />
                        {/* <span className="error">{errors.email?.message}</span> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input required="" name="password" id="password" value={formData.password} type="password" onChange={handleInputChange} />
                        {/* <span className="error">{errors.password?.message}</span> */}
                    </div>
                    <div className="form-group">
                        <label htmlFor="password_confirmation">Confirmar Contraseña</label>
                        <input required="" name="password_confirmation" id="password_confirmation" value={formData.password_confirmation} type="password" onChange={handleInputChange} />
                        {/* <span className="error">{errors.password_confirmation?.message}</span> */}
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Registrarme</button>
                    </div>
                    <div className="form-group">
                        <div className="error">{errorMSG}</div>
                    </div>
                </form>
            </div>
        </div>
    )

};

export default SingUpForm;
