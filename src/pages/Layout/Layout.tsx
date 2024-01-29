import { Header } from "@/components/Header/Header";
import "./layout.css";
import { Outlet } from "react-router-dom";

export function Layout() {
    return (
        <div className="layout">
            <Header/>
            <div className="layout__container">
                <Outlet />
            </div>
        </div>
    )
}