import React from "react";
import "./Location.css";

function Location(locationRef, className) {
    const openMap = () => {
        const address = "CAFE+BAZAAR+Mikulášska+29+81101+Bratislava,+Slovakia";
        const googleMapsLink = `https://www.google.com/maps?q=${address}`;
        window.open(googleMapsLink, "_blank");
    };
    const signUp = () => {};
    return (
        <div className="Location">
            <div className={className}>
                <div className="Footer" ref={footerRef}>
                    <div classname="FooterContainer">
                        <div className="UpperFooter">
                            <div className="ContactDetails">
                                <img
                                    className="LogoFooter"
                                    src={"/MockAssets/LogoTopperWeb.svg"}
                                    alt="Logo"
                                />
                                <p>
                                    Sign up to our newsletter for exclusive
                                    updates
                                </p>
                                <form>
                                    <input
                                        className="Name"
                                        type="text"
                                        placeholder="Name"
                                    />
                                    <input
                                        className="Email"
                                        type="text"
                                        placeholder="Email Address"
                                    />
                                    <img
                                        className="SignUpButton"
                                        onClick={signUp}
                                        src={
                                            "/MockAssets/ButtonRightFooter.svg"
                                        }
                                        alt="SignUpButton"
                                    />
                                </form>
                            </div>
                            <img
                                className="Map"
                                onClick={openMap}
                                src={"/MockAssets/Map.svg"}
                                alt="Map"
                            />
                        </div>
                        <div className="FooterEnd">
                            <p>® 2023 Cafe Bazaar</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Location;
