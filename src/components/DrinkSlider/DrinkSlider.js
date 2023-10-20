import DrinkCard from "../DrinkCard/DrinkCard";
import React, { useState } from "react";

import "./DrinkSlider.css";

function DrinkSlider({ coffeeRef }) {
    const drinks = [
        {
            name: "Cappucino",
            imageSrc: "/MockAssets/VectorCappucino.svg",
            text: "A harmonious blend of robust espresso, creamy steamed milk, and a frothy, velvety topping.",
        },
        {
            name: "Frappe",
            imageSrc: "/MockAssets/VectorFrappe.svg",
            text: "Chilled blend of robust espresso and creamy milk, crowned with a light whipped topping.",
        },
        {
            name: "Latte",
            imageSrc: "/MockAssets/VectorLatte.svg",
            text: "A smooth, creamy coffee with rich espresso and silky milk.",
        },
        {
            name: "Macchiatto",
            imageSrc: "/MockAssets/VectorMachiatto.svg",
            text: "Bold espresso lightly adorned with frothy, delicate milk.",
        },
        {
            name: "Espresso",
            imageSrc: "/MockAssets/VectorEspresso.svg",
            text: "An intense, pure coffee shot, brimming with robust flavor.",
        },
        {
            name: "Long Black",
            imageSrc: "/MockAssets/VectorLongBlack.svg",
            text: "A bold and deep coffee, gently infused with hot water.",
        },
        {
            name: "Mocha",
            imageSrc: "/MockAssets/VectorMocha.svg",
            text: "A decadent fusion of coffee and cocoa, crowned with luscious whipped cream.",
        },
    ];

    const [currentCard, setCurrentCard] = useState(0);

    const goToNextCard = () => {
        setCurrentCard((currentCard + 1) % drinks.length);
    };

    const goToPrevCard = () => {
        setCurrentCard((currentCard - 1 + drinks.length) % drinks.length);
    };

    const drinkListed = drinks.map(function (drink, index) {
        const drinksLength = drinks.length;

        if (index === currentCard) {
            return <DrinkCard drink={drink} key={index} selected />;
        } else if (index === currentCard - 1 || index === currentCard + 1) {
            return <DrinkCard drink={drink} key={index} />;
        } else if (currentCard === 0 && index === drinksLength - 1) {
            return <DrinkCard drink={drink} key={index} />;
        } else if (currentCard === drinksLength - 1 && index === 0) {
            return <DrinkCard drink={drink} key={index} />;
        }
    });

    return (
        <div className="DrinkSlider" ref={coffeeRef}>
            <div className="CarouselContainer">
                <img
                    className="CarouselButton"
                    onClick={goToPrevCard}
                    src={"/MockAssets/CarouselLeftButton.svg"}
                    alt="CarouselLeftButton"
                />
                <div className="DrinkCardContainer">{drinkListed}</div>
                <img
                    className="CarouselButton"
                    onClick={goToNextCard}
                    src={"/MockAssets/CarouselRightButton.svg"}
                    alt="CarouselRightButton"
                />
            </div>
        </div>
    );
}

export default DrinkSlider;
