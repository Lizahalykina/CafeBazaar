import React from "react";
import "./About.css";

function About() {
    return (
        <div className="About">
            <div className="TextBlock">
                <h2>
                    Discover the Art of <br /> High-Quality Coffee
                </h2>
                <h3>Sourced directly from farmers</h3>
                <h4>
                    Our journey begins with sourcing the finest beans from
                    <br />
                    sustainable farms around the world. We meticulously select
                    <br />
                    only the highest quality beans, ensuring that each one meets
                    our <br />
                    rigorous standards for flavor and aroma.
                </h4>
            </div>

            <div className="TextBlock spread">
                <img
                    className="SecondImg"
                    src={"/MockAssets/collage.png"}
                    alt={"collage"}
                />
            </div>
        </div>
    );
}

export default About;
