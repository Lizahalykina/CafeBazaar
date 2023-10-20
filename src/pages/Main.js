import React, { useRef } from "react";
import DrinkSlider from "../components/DrinkSlider/DrinkSlider";
import Menu from "../components/Menu/Menu";
import Topper from "../components/Topper/Topper";
import Footer from "../components/Footer/Footer";
import "./Main.css";

function Main() {
    const footerRef = useRef(null);
    const menuRef = useRef(null);
    const coffeeRef = useRef(null);
    return (
        <div className="Main">
            <Topper
                footerRef={footerRef}
                menuRef={menuRef}
                coffeeRef={coffeeRef}
            />
            <DrinkSlider coffeeRef={coffeeRef} />
            <Menu className="MenuMain" menuRef={menuRef} />
            <Footer className="FooterMain" footerRef={footerRef} />
        </div>
    );
}

export default Main;
