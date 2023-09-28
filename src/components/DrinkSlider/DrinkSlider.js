import DrinkCard from "../DrinkCard/DrinkCard";
import { useRef } from "react";
import SimpleBar from "simplebar-react";
import "simplebar-react/dist/simplebar.min.css";
import "./DrinkSlider.css";

function DrinkSlider() {
    const simpleBarRef = useRef(null);

    const handleWheel = (e) => {
        // Get the SimpleBar instance
        const simpleBarInstance = simpleBarRef.current.getScrollElement();

        // Manually control the horizontal scrolling
        simpleBarInstance.scrollLeft += e.deltaY;
    };
    const drinks = [
        { name: "Cappucino", imageSrc: "/MockAssets/VectorCappucino.svg" },
        { name: "Frappe", imageSrc: "/MockAssets/VectorFrappe.svg" },
        { name: "Latte", imageSrc: "/MockAssets/VectorLatte.svg" },
        { name: "Machiatto", imageSrc: "/MockAssets/VectorMachiatto.svg" },
        { name: "Espresso", imageSrc: "/MockAssets/VectorEspresso.svg" },
        { name: "Long Black", imageSrc: "/MockAssets/VectorLongBlack.svg" },
        { name: "Mocha", imageSrc: "/MockAssets/VectorMocha.svg" },
    ];

    const drinkListed = drinks.map(function (drink, index) {
        return <DrinkCard drink={drink} key={index} />;
    });

    return (
        <div className="DrinkSlider">
            <SimpleBar
                ref={simpleBarRef}
                autoHide={false}
                forceVisible="y"
                onWheel={handleWheel}
                style={{ maxHeight: "360px", maxWidth: "100vw" }}
            >
                <div className="DrinkCardContainer">{drinkListed}</div>
            </SimpleBar>
        </div>
    );
}

export default DrinkSlider;
