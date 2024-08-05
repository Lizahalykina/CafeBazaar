import React from "react";
import "./Location.css";

function Location({ locationRef }) {
    return (
        <div className="Location">
            <div className="TextBlock">
                <h2>Contact us</h2>
                <h3>
                    +421 911 097 481
                    <br />
                    Mikulášska 5018/29, 811 01
                    <br />
                    Bratislava-Hrad, Slovakia
                </h3>
                <h4>
                    Nestled in the city centre, boasts a lively ambience <br />
                    with comfy corners, perfect for social gatherings.
                </h4>
                <button className="location-toggle">Get Directions</button>
            </div>

            <div className="TextBlock spread">
                <img
                    className="CafeImg"
                    src={"/MockAssets/cafephoto.jpg"}
                    alt={"cafe"}
                />
            </div>
        </div>
    );
}

export default Location;
