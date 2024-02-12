import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import SingInForm from "../../components/client/login/SingInForm";
import useAuth from "../../hooks/useAuth";

const Login = () => {
    const { isCorrect, useLogin, errorMSG } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (isCorrect) {
            navigate('/home');
        }
    }, [isCorrect, navigate]);

    return (
        <div>
            <h1>Login</h1>
            <SingInForm send_data={(data => useLogin(data))} errorMSG={errorMSG} />
        </div>
    );
};

export default Login;