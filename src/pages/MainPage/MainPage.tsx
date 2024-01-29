import { Header } from "@/components/Header/Header";
import "./mainPage.css";
import { PhotoList } from "@/components/PhotoList/PhotoList";

export function MainPage() {

    return (
        <div className="main-page">
            <div className="main-page__list">
                <PhotoList/>
            </div>           
        </div>
    )
}
