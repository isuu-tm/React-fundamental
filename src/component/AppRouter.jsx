import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRouters, privateRouters} from "../router/router";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    // const isAuth = true
    const {isAuth, setIsAuth, isLoading} = useContext(AuthContext)
    // console.log(isAuth)
    if (isLoading) {
        return <Loader/>
    }
    return (
        <div>
                {isAuth ?
                        <Routes>
                    {privateRouters.map( route => {
                            return <Route
                                key={route.path}
                                element={<route.component/>}
                                path={route.path}/>
                            // - Здесь мы итеруемя по массиву publicRouters и отрисовываем нужный путь для неавторизованных людей
                        })}
                            <Route
                                path='*'
                                element={<Navigate to='/posts'/>}/>
                    </Routes>
                :    <Routes>
                        {publicRouters.map( route => {
                            return <Route
                                key={route.path}
                                element={<route.component/>}
                                path={route.path}/>
                            // - Здесь мы итеруемя по массиву publicRouters и отрисовываем роутеры
                        })}
                        <Route
                            path='*'
                            element={<Navigate to='/login'/>}/>
                    </Routes>
                }

        </div>);
};

export default AppRouter;