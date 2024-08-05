import React from "react";
import "./MainSection.css";

function MainSection() {
    return (
        <div className="MainSection">
            <div className="TextBlock">
                <h1 className="desktop-heading">
                    Cafe
                    <br />
                    Bazaar
                </h1>
                <img
                    className="h1Logo mobile-heading"
                    src={"/MockAssets/Logo.png"}
                    alt="Logo"
                />
                <p className="desktop-text">
                    Your favourite specialist coffee
                    <br />
                    served in the heart of Bratislava.
                </p>
                <p className="mobile-text">
                    Your favourite specialist coffee served in the heart of
                    Bratislava.
                </p>
            </div>
            <img
                className="MainImg"
                src={"/MockAssets/Plain-Croissant.png"}
                alt="Main"
            />
        </div>
    );
}

export default MainSection;
