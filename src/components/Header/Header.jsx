import React from 'react';
import './Header.css';

function Header() {
    return (
        <div className="header">
            <img className="header__logo" src="./logo.png"></img>
            <a className="header__a" href="">Зарегистрироваться</a>
            <a className="header__a" href="">Войти</a>
        </ div>
    )
}

export default Header;