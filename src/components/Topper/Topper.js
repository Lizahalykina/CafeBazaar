import React from "react";
import "./Topper.css";

function Topper({ footerRef, menuRef, coffeeRef }) {
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToMenu = () => {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
    };
    const scrollToDrinkSlider = () => {
        coffeeRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="Topper">
            <p onClick={scrollToMenu}>Home</p>
            <p onClick={scrollToDrinkSlider}>About</p>
            <p onClick={scrollToMenu}>Menu</p>
            <p onClick={scrollToFooter}>Location</p>
        </div>
    );
}

export default Topper;
