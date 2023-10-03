import React, { forwardRef } from "react";
import "./Footer.css";

function Footer({ footerRef }) {
    const openMap = () => {
        const address = "CAFE+BAZAAR+Mikulášska+29+81101+Bratislava,+Slovakia";
        const googleMapsLink = `https://www.google.com/maps?q=${address}`;
        window.open(googleMapsLink, "_blank");
    };

    return (
        <div className="Footer" ref={footerRef}>
            <div className="UpperFooter">
                <div className="ContactDetails">
                    <h4>Find us here:</h4>
                    <ul>
                        <li>421 910 564 075</li>
                        <li>cafe.bazaar</li>
                        <li>cafe.bazaar</li>
                        <li
                            onClick={openMap}
                            src={"/MockAssets/Map.svg"}
                            alt="Map"
                        >
                            Mikulášska 29 81101 Bratislava, Slovakia
                        </li>
                    </ul>
                </div>
                <img
                    className="Map"
                    onClick={openMap}
                    src={"/MockAssets/Map.svg"}
                    alt="Map"
                />
            </div>
            <div className="FooterEnd">
                <h5>® 2023 Cafe Bazaar</h5>
            </div>
        </div>
    );
}
export default Footer;
