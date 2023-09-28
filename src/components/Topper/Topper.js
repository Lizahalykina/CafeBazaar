import "./Topper.css";

function Topper({ footerRef }) {
    const scrollToFooter = () => {
        footerRef.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div className="Wrapper">
            <div className="Topper">
                <div>
                    <h1>Good coffee lives here</h1>
                </div>
                <img
                    className="Logo"
                    src={"/MockAssets/TopperLogo.svg"}
                    alt="Logo"
                />
                <div>
                    <h2 onClick={scrollToFooter}>Where to find us</h2>
                </div>
            </div>
            <img
                className="Bean"
                src={"/MockAssets/CoffeeBeanPath.svg"}
                alt="Bean"
            />
        </div>
    );
}

export default Topper;
