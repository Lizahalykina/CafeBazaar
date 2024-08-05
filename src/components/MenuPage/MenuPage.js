import React from "react";
import DrinkCard from "../DrinkCard/DrinkCard";
import "./MenuPage.css";

function MenuPage({ menuRef }) {
    const menu = [
        {
            name: "Salmon Avocado Toast",
            description:
                "Open-faced toast topped with creamy avocado mash, fresh smoked salmon, and a sprinkle of microgreens.",
            imageSrc: "/MockAssets/Toast.png",
            ingredients:
                "Bread, Avocado, Smoked salmon, Lemon juice, Red pepper flakes, Olive oil.",
        },
        {
            name: "Waffle",
            description:
                "Crispy on the outside, fluffy on the inside. Served with maple syrup and fresh berries.",
            imageSrc: "/MockAssets/waffle.png",
            ingredients:
                "Flour, Milk, Eggs, Butter, Baking powder, Sugar, Salt",
        },
        {
            name: "Pancakes",
            description:
                "Light and fluffy pancakes served with butter and syrup.",
            imageSrc: "/MockAssets/pancakes.png",
            ingredients:
                "Flour, Milk, Eggs, Butter, Baking powder, Sugar, Salt",
        },
    ];

    const openPdf = () => {
        window.open("/MockAssets/Menu.pdf", "_blank");
    };

    return (
        <div className="DrinkSlider" ref={menuRef}>
            <div className="GridContainer">
                <h2 className="Menu-title">Menu</h2>
                {menu.slice(0, 3).map((item, index) => (
                    <div className="GridItem" key={index}>
                        <DrinkCard
                            imageSrc={item.imageSrc}
                            title={item.name}
                            description={item.description}
                            ingredients={item.ingredients}
                        />
                    </div>
                ))}
                <button className="menu-toggle" onClick={openPdf}>
                    See Full Menu
                </button>
            </div>
        </div>
    );
}

export default MenuPage;
