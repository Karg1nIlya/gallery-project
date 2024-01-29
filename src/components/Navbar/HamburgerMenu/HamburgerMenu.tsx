import { NavLink } from "react-router-dom";
import "./hamburgerMenu.css";
import { useEffect, useState } from "react";

const logo = require("@/assets/img/logo.png")

export function HamburgerMenu() {
    const [checkFlag, setCheckFlag] = useState(false)

    const closeMenu = ()=> {
        (document.getElementById('menu__toggle') as HTMLInputElement).checked = false
        setCheckFlag(false)
    }

    useEffect(()=>{
        if(checkFlag) {
            document.querySelector('body')!.style.overflow = 'hidden'
        } else {
            document.querySelector('body')!.style.overflow = 'visible'
        }
    }, [checkFlag])

    return (
        <div className="hamburger-menu">
            <input id="menu__toggle" type="checkbox" onChange={()=>setCheckFlag(!checkFlag)} checked={checkFlag} />
            <label className="hamburger-btn" htmlFor="menu__toggle">
                <span></span>
            </label>
            <div className="hamburger-menu__container" onClick={closeMenu}></div>
            <div className="hamburger-menu__box">
                <div className="hamburger-menu__box-header">
                    <div className="hamburger-menu__box-logo">
                        <img className="hamburger-menu__box-logo-img" src={logo} alt="logo" />
                        <div className="hamburger-menu__box-logo-title">Галлерея</div>
                    </div>
                </div>
                <div className="hamburger-menu__box-list">
                    <NavLink className={({ isActive }) => isActive ? 'hamburger-menu__box-item--active' : 'hamburger-menu__box-item'} to="/">Главная</NavLink>
                    <NavLink className={({ isActive }) => isActive ? 'hamburger-menu__box-item--active' : 'hamburger-menu__box-item'} to="/about">О сайте</NavLink>
                </div>
            </div>
        </div>
    )
}