import React, { useEffect, useState, useCallback } from "react";
import AuthService from "../services/AuthService";
import JWTService from "../services/JWTService";

import { useNavigate } from "react-router-dom";
import { set } from "react-hook-form";

const AuthContext = React.createContext();

export function AuthContextProvider({ children }) {
    const navigate = useNavigate();
    const [user, setUser] = useState({});
    const [token, setToken] = useState(JWTService.getToken ? JWTService.getToken : false); //get token from local storage
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin, setIsAdmin] = useState(false);

    useEffect(() => {
        if (token) {
            AuthService.GetActualUser()
                .then(({ data, status }) => {
                    if (status === 200) {
                        setToken(data.token);
                        setUser(data);
                        setIsAuth(true);
                        setIsAdmin(data.user.type === 'admin');
                    }
                })
                .catch(() => {
                    console.log("fallo en context users");
                    if (JWTService.getRefreshToken()) {
                        refresh_token();
                    } else {
                        logout();
                    }
                });
        }
    }, [token]);

    const refresh_token = async () => {
        JWTService.destroyToken();
        await AuthService.refreshToken()
            .then(({ data }) => {
                setToken(data.token);
                JWTService.saveToken(data.token);
                navigate("/home");
            })
            .catch(({ }) => {
                logout();
            });
    }

    const logout = useCallback(() => {
        JWTService.destroyToken();
        JWTService.destroyRefreshToken();
        setUser({});
        setToken(false);
        setIsAuth(false);
        setIsAdmin(false);
        navigate("/home");
    }, []);

    return (
        <AuthContext.Provider value={{ user, setUser, token, setToken, isAuth, setIsAuth, isAdmin, setIsAdmin, logout }}>
            {children}
        </AuthContext.Provider>
    );
}

export default AuthContext;