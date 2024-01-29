import { NavLink } from "react-router-dom";
import "./navbar.css";
import { HamburgerMenu } from "./HamburgerMenu/HamburgerMenu";

export function Navbar() {
    return (
        <>
        <div className="navbar">
            <NavLink className={({ isActive }) => isActive ? 'navbar__item--active' : 'navbar__item'} to="/">Главная</NavLink>
            <NavLink className={({ isActive }) => isActive ? 'navbar__item--active' : 'navbar__item'} to="/about">О приложении</NavLink>
        </div>
        <HamburgerMenu/>
        </>
    )
}