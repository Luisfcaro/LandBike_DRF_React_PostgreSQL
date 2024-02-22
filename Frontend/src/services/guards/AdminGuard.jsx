import React , { useContext } from 'react';
import { useNavigate, Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../../context/AuthContext';
import AuthService from '../../services/AuthService';

const AdminGuard = () => {
    const navigate = useNavigate();
    const { isAdmin } = useContext(AuthContext);

    
    if (!isAdmin) {
        AuthService.GetActualUser()
            .then(({ data, status }) => {
                if (status == 200 && data.user.type == "admin") {
                    setTimeout(() => { navigate('/dashboard/stations'); }, 200);
                }
            })
    }

    return isAdmin ? <Outlet /> : <Navigate to="/home" />;

};

export default AdminGuard;