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
        <div className="Wrapper">
            <div className="Topper">
                <img
                    className="Logo"
                    src={"/MockAssets/LogoTopperWeb.svg"}
                    alt="Logo"
                />
                <img
                    className="LogoMobile"
                    src={"/MockAssets/LogoMobileTopper.svg"}
                    alt="LogoMobile"
                />
                <div className="topText">
                    <div>
                        <h1 onClick={scrollToDrinkSlider}>Coffee</h1>
                    </div>
                    <div>
                        <h2 onClick={scrollToMenu}>Menu</h2>
                    </div>
                    <div>
                        <h3 onClick={scrollToFooter}>Contact us</h3>
                    </div>
                </div>
            </div>
            <img className="Bean" src={"/MockAssets/BeanLong.svg"} alt="Bean" />
            <img
                className="BeanMobile"
                src={"/MockAssets/BeanTopperMobile.svg"}
                alt="BeanMobile"
            />
        </div>
    );
}

export default Topper;
