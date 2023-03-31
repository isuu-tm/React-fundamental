import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import MyButton from "./UI/Button/MyButton";
import {AuthContext} from "../context";

const Navbar = () => {
    const {auth, setIsAuth} = useContext(AuthContext)
    // const [auth, setIsAuth] = useContext(AuthContext) - Тут я увидел что если неправльно изпользовать деструктуризацию
    // то вылазит ошибка и мы не можем достать данные из этого контекста
    // console.log(auth)
    const logout = () => {
        setIsAuth(false)
        localStorage.removeItem('auth')
    }
    return (
            <div className='navbar'>
                <MyButton onClick={logout}>
                    Выйти
                </MyButton>
                <div className='navbar__links'>
                    <Link to='posts'>Посты</Link>
                    <Link to='about'>О нас</Link>
                </div>
            </div>
    );
};

export default Navbar;