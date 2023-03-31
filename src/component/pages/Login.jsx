import React, {useContext} from 'react';
import MyInput from "../UI/Input/MyInput";
import MyButton from "../UI/Button/MyButton";
import {AuthContext} from "../../context";

const Login = () => {
    const {auth, setIsAuth} = useContext(AuthContext);
    //console.log(setIsAuth)
    const login = (event) => {
        event.preventDefault()
        setIsAuth(true)
        localStorage.setItem('auth', true)
    }

    return (
        <div>
           <h1>Ввойдите пожалуйста</h1>
            <form
                action=""
                onSubmit={login}
            >
            <MyInput
                placeholder='Введите логин'/>
            <MyInput
                placeholder='Введите пароль'
                type='password'/>
            <MyButton>Войти</MyButton>
            </form>
        </div>
    );
};

export default Login;