// Import the necessary components and styles
import MenuCard from "../MenuCard/MenuCard";
import React, { forwardRef } from "react";
import "./Menu.css";

// Define the Menu functional component
function Menu({ menuRef, className }) {
    // Define a constant array of plate items for the menu
    const plates = [
        {
            name: "waffle",
            imageSrc: "/MockAssets/waffle.jpg",
            dish: "Vienna Waffle",
            description:
                "Topped with chocolate drizzle and a mix of fresh seasonal fruits.",
            price: "€5.5",
        },
        {
            name: "avocadoSalmonToast",
            imageSrc: "/MockAssets/avocadoSalmonToast.jpg",
            dish: "Salmon & Avocado Toast",
            description:
                "A gourmet blend of crisp toast, creamy avocado, and succulent salmon.",
            price: "€5.5",
        },
        {
            name: "avocadoTunaToast",
            imageSrc: "/MockAssets/avocadoTunaToast.jpg",
            dish: "Tuna & Avocado Toast",
            description:
                "Cream cheese, avocado and delicious tuna, on a perfectly crisp toast  ",
            price: "€5.5",
        },
        {
            name: "chocolateFondant",
            imageSrc: "/MockAssets/chocolateFondant.jpg",
            dish: "Chocolate Fondant",
            description:
                "Velvety Chocolate Fondant paired with vanilla ice cream.",
            price: "€6",
        },
        {
            name: "crepeWithNutellaAndFruits",
            imageSrc: "/MockAssets/crepeWithNutellaAndFruits.jpg",
            dish: "Nutella & Fruit Crêpe",
            description:
                "Two fluffy pancakes topped with rich Nutella and fresh seasonal fruits.",
            price: "€6",
        },
        {
            name: "CroissantHamAndCheese",
            imageSrc: "/MockAssets/CroissantHamAndCheese.jpg",
            dish: "Ham & Cheese Croissant",
            description:
                " Premium combination of parma ham and cheese inside a buttery pastry.",
            price: "€5",
        },
    ];

    // Map over the plates array to generate an array of MenuCard components
    const plateslisted = plates.map(function (plate, index) {
        return <MenuCard plate={plate} imageSrc={plate.imageSrc} key={index} />;
    });

    const downloadMenu = () => {};
    // Render the Menu component structure
    return (
        <div className={className}>
            <div className="Menu" ref={menuRef}>
                <h4>Menu</h4>
                <div className="Menu-container">
                    <div className="MenuCard-container">
                        {plateslisted}
                        <p></p>
                        <a
                            onClick={downloadMenu}
                            className="DownloadMenuButton"
                            href="/MockAssets/CafeBazaarMenu.pdf"
                            target="_blank"
                        >
                            Download our menu
                        </a>
                    </div>
                </div>
                <a
                    onClick={downloadMenu}
                    className="DownloadMenuButtonMobile"
                    href="/MockAssets/CafeBazaarMenu.pdf"
                    target="_blank"
                >
                    Download our menu
                </a>
            </div>
        </div>
    );
}

// Export the Menu component to be used elsewhere in the app
export default Menu;
