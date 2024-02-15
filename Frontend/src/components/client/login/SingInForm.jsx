import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./SingInForm.css";

const SignInForm = ({ send_data, errorMSG }) => {
    const navigate = useNavigate();


    const [formData, setFormData] = useState({
        username: '',
        password: ''
    });


    const handleInputChange = event => {
        const { name, value } = event.target;
        setFormData({ ...formData, [name]: value });
    }

    const handleLogin = e => {
        e.preventDefault();
        send_data(formData);
    }


    return (
        <div className="form-container-wrapper">
            <div className="form-container">
                <form className="form" onSubmit={handleLogin}>
                    <div className="form-group">
                        <label htmlFor="username">Username</label>
                        <input required="" name="username" id="username" value={formData.username} type="text" onChange={handleInputChange} />
                        <span className="error"></span>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Contraseña</label>
                        <input required="" name="password" id="password" value={formData.password} type="password" onChange={handleInputChange} />
                        <span className="error"></span>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Iniciar Sesión</button>
                    </div>
                    <div className="form-group">
                        <div className="error">
                            <label htmlFor="error">{errorMSG}</label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )

};

export default SignInForm;