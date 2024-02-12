import { useCallback, useState, useContext, useEffect } from "react";
import AuthService from "../services/AuthService";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import JWTService from "../services/JWTService";
import { set } from "react-hook-form";

export default function useAuth() {
    const navigate = useNavigate();
    const { user, setUser, token, setToken, isAuth, setIsAuth, isAdmin, setIsAdmin } = useContext(AuthContext);
    const [isCorrect, setIsCorrect] = useState(false);
    const [errorMSG, setErrorMSG] = useState('');
    const { setAuth } = useContext(AuthContext);

    const useLogin = useCallback((data) => {
        AuthService.Login(data)
            .then(({ data, status }) => {
                if (status === 200) {
                    console.log(data);
                    JWTService.saveToken(data.token);
                    JWTService.saveRefreshToken(data.ref_token);
                    setToken(data.token);
                    setUser(data.user);
                    setIsAuth(true);
                    setIsAdmin(data.user.isAdmin);
                    setIsCorrect(true);
                    setErrorMSG('');
                } else {
                    console.error(e);
                    setErrorMSG(e.response.data[0]);
                }
            });
    }, [setAuth]);

    const useRegister = useCallback((data) => {
        AuthService.Register(data)
            .then(({data, status}) => {
                if (status === 200) {
                    JWTService.saveToken(data.token);
                    JWTService.saveRefreshToken(data.ref_token);
                    setToken(data.token);
                    setUser(data.user);
                    setIsAuth(true);
                    setIsAdmin(data.user.isAdmin);
                    setIsCorrect(true);
                    setErrorMSG('');
                } else {
                    console.error(e);
                    setErrorMSG(e.response.data[0]);
                }
            });
    }, []);

    return { isCorrect, setIsCorrect, user, setUser, token, setToken, isAuth, setIsAuth, isAdmin, setIsAdmin, useLogin, useRegister, errorMSG};

}
