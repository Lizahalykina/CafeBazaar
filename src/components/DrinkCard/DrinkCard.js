import React from "react";
import "./DrinkCard.css";

function DrinkCard({ imageSrc, title, description, ingredients }) {
    return (
        <div className="DrinkCard">
            <img src={imageSrc} alt={title} className="DrinkCardImage" />
            <div className="DrinkCard__text">
                <h2 className="DrinkCard__title">{title}</h2>
                <p className="DrinkCard__description">{description}</p>
                <p className="DrinkCard__ingredients">
                    <strong>Ingredients:</strong> {ingredients}
                </p>
            </div>
        </div>
    );
}

export default DrinkCard;
