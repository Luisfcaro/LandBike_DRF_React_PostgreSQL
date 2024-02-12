import React , { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';




const AuthGuard = () => {
    const navigate = useNavigate();
    const { isAdmin } = useContext(AuthContext);

    return isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default AuthGuard;