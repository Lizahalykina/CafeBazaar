import React from "react";
import "./DrinkCard.css";

function DrinkCard({ imageSrc, title, description, ingredients }) {
    return (
        <div className="DrinkCard">
            <div className="DrinkCardImageBox">
                <img src={imageSrc} alt={title} className="DrinkCardImage" />
                <p className="DrinkCard__ingredients">
                    <strong>Ingredients:</strong> {ingredients}
                </p>
            </div>
            <div className="DrinkCard__text">
                <h3 className="DrinkCard__title">{title}</h3>
                <p className="DrinkCard__description">{description}</p>
            </div>
        </div>
    );
}

export default DrinkCard;
