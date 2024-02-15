import React , { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import AuthService from '../../services/AuthService';


const AuthGuard = () => {
    const navigate = useNavigate();
    const { isAuth } = useContext(AuthContext);

    if (!isAuth) {
        AuthService.GetActualUser()
            .then(({ status }) => {
                console.log(status);
                if (status == 200) {
                    setTimeout(() => { navigate('/home'); }, 200);
                }
            })
    }

    return isAuth ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;