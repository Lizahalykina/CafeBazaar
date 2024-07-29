import React from "react";
import DrinkCard from "../DrinkCard/DrinkCard";
import "./MenuPage.css";

function MenuPage({ menuRef }) {
    const menu = [
        {
            name: "Almond Croissant",
            description:
                "This exquisite croissant is generously filled with a smooth almond cream, topped with slivered almonds.",
            imageSrc: "/MockAssets/croissant.png",
            ingredients:
                "All-purpose flour, Fresh lavender, Almonds, Local honey, Butter, Baking powder, Salt, Heavy cream",
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
        window.open("/path/to/your/menu.pdf", "_blank");
    };

    return (
        <div className="DrinkSlider" ref={menuRef}>
            <div className="GridContainer">
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
            </div>
            <button className="menu-toggle" onClick={openPdf}>
                See Full Menu
            </button>
        </div>
    );
}

export default MenuPage;
