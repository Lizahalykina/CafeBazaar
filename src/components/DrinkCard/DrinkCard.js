import DrinkCardButton from "../DrinkCardButton/DrinkCardButton";
import "./DrinkCard.css";

function DrinkCard(props) {
    return (
        <div className="DrinkCard">
            <img src={props.drink.imageSrc} alt={props.drink.name} />
            <DrinkCardButton text={props.drink.name} />
        </div>
    );
}

export default DrinkCard;
