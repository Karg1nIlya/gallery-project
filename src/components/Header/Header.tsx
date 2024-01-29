import { useEffect } from "react";
import "./header.css";
import { Navbar } from "../Navbar/Navbar";

const logo = require("@/assets/img/logo.png")

export function Header() {

    useEffect(()=>{
        let prevScrollPos = window.scrollY
        window.onscroll = function() {
            const currentScrollPos = window.scrollY
            const height = (document.getElementById("header") as HTMLElement).scrollHeight 
            if (prevScrollPos > currentScrollPos) {
                (document.getElementById("header") as HTMLElement).style.top = "0"
            } else {
                (document.getElementById("header") as HTMLElement).style.top = `-${height}px`
            }
            prevScrollPos = currentScrollPos
        }
    },[])
    
    return (
        <div id="header" className="header">
            <div className="header__container">
                <div className="header__logo">
                    <img className="header__logo-img" src={logo} alt="logo" />
                    <div className="header__logo-title">Галлерея</div>
                </div>
                <Navbar/>
            </div>           
        </div>
    )
}
