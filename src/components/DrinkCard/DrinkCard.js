import DrinkCardButton from "../DrinkCardButton/DrinkCardButton";
import "./DrinkCard.css";

function DrinkCard(props) {
    return (
        <div className={props.selected ? "DrinkCard-Selected" : "DrinkCard"}>
            <img src={props.drink.imageSrc} alt={props.drink.name} />
            <DrinkCardButton
                className={
                    props.selected
                        ? "drinkCardButton-Selected"
                        : "drinkCardButton"
                }
                text={props.drink.name}
                description={props.selected ? props.drink.text : null}
                selected={props.selected}
            />
        </div>
    );
}

export default DrinkCard;
