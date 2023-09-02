import React from 'react';
import './css/Header.css';
import logo from './logo.png';

function Header() {
    return (
        <div className='header'>
            <img className='header__logo' src={logo} alt='logo'></img>
            <a className='header__a' href="">Зарегистрироваться</a>
            <a className='header__a' href="">Войти</a>
        </ div>
    )
}

export default Header;