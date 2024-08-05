import React, { useState } from "react";
import "./Topper.css";

function Topper({ footerRef, menuRef, coffeeRef }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };
    const scrollToMenu = () => {
        menuRef.current.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };
    const scrollToDrinkSlider = () => {
        coffeeRef.current.scrollIntoView({ behavior: "smooth" });
        setIsMenuOpen(false);
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className="Topper">
            <img
                className="IconBean"
                src={"/MockAssets/IconBean.svg"}
                alt="Icon Bean"
            />
            <p className="desktop-link" onClick={scrollToMenu}>
                Home
            </p>
            <p className="desktop-link" onClick={scrollToDrinkSlider}>
                About
            </p>
            <img className="LogoImg" src={"/MockAssets/Logo.png"} alt="Logo" />
            <p className="desktop-link" onClick={scrollToMenu}>
                Menu
            </p>
            <p className="desktop-link" onClick={scrollToFooter}>
                Location
            </p>
            <div
                className={`burger-menu ${isMenuOpen ? "open" : ""}`}
                onClick={toggleMenu}
            >
                <span></span>
                <span></span>
                <span></span>
            </div>
            {isMenuOpen && (
                <div className="dropdown-menu">
                    <p onClick={scrollToMenu}>Home</p>
                    <p onClick={scrollToDrinkSlider}>About</p>
                    <p onClick={scrollToMenu}>Menu</p>
                    <p onClick={scrollToFooter}>Location</p>
                </div>
            )}
        </div>
    );
}

export default Topper;
