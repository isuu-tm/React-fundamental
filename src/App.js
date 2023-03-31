import React, {useEffect, useState} from 'react';
import './component/styles/App.css'
import {BrowserRouter} from "react-router-dom";
import Navbar from "./component/Navbar";
import AppRouter from "./component/AppRouter";
import {AuthContext} from "./context";

const App = () => {
    const [isAuth, setIsAuth] = useState(false)
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        if (localStorage.getItem('auth')) {
            setIsAuth(true)
        }
        setIsLoading(false)

    },[])

    return (
        <div>
        <AuthContext.Provider value={
            {
                isAuth,
                setIsAuth,
                setIsLoading,
            }
        }>
            <BrowserRouter>
                <Navbar/>
                <AppRouter/>
            </BrowserRouter>
        </AuthContext.Provider>
        </div>
    );
};

export default App;