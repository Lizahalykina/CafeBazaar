// Import the necessary components and styles
import MenuCard from "../MenuCard/MenuCard";
import "./Menu.css";

// Define the Menu functional component
function Menu() {
    // Define a constant array of plate items for the menu
    const plates = [
        { name: "waffle", imageSrc: "/MockAssets/waffle.jpg" },
        {
            name: "avocadoSalmonToast",
            imageSrc: "/MockAssets/avocadoSalmonToast.jpg",
        },
        {
            name: "avocadoTunaToast",
            imageSrc: "/MockAssets/avocadoTunaToast.jpg",
        },
        {
            name: "chocolateFondant",
            imageSrc: "/MockAssets/chocolateFondant.jpg",
        },
        {
            name: "crepeWithNutellaAndFruits",
            imageSrc: "/MockAssets/crepeWithNutellaAndFruits.jpg",
        },
        {
            name: "CroissantHamAndCheese",
            imageSrc: "/MockAssets/CroissantHamAndCheese.jpg",
        },
    ];

    // Map over the plates array to generate an array of MenuCard components
    const plateslisted = plates.map(function (plate, index) {
        return <MenuCard plate={plate} imageSrc={plate.imageSrc} key={index} />;
    });

    // Render the Menu component structure
    return (
        <div className="Menu">
            <h3>Menu</h3>
            <div className="Menu-container">
                <div className="MenuCard-container">{plateslisted}</div>
            </div>
        </div>
    );
}

// Export the Menu component to be used elsewhere in the app
export default Menu;
