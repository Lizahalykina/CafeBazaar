import React from "react";
import "./MainSection.css";

function MainSection() {
    return (
        <div className="MainSection">
            <div className="TextBlock">
                <h1>
                    Cafe
                    <br />
                    Bazaar
                </h1>
                <p>
                    Your favourite specialist coffee
                    <br />
                    served in the heart of Bratislava.
                </p>
            </div>
            <img
                className="MainImg"
                src={"/MockAssets/croissant.png"}
                alt="Logo"
            />
        </div>
    );
}

export default MainSection;
