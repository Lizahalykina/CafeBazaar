import React, { useRef } from "react";
import DrinkSlider from "../components/DrinkSlider/DrinkSlider";
import Menu from "../components/Menu/Menu";
import Topper from "../components/Topper/Topper";
import Footer from "../components/Footer/Footer";
import "./Main.css";

function Main() {
    const footerRef = useRef(null);
    return (
        <div className="Main">
            <Topper footerRef={footerRef} />
            <DrinkSlider />
            <Menu />
            <Footer footerRef={footerRef} />
        </div>
    );
}

export default Main;
