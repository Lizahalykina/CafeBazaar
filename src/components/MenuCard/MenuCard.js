import "./MenuCard.css";

function MenuCard(props) {
    const imageSrc = props.imageSrc;
    return (
        <div className="MenuCard">
            <img src={imageSrc} alt={props.plate.name} />
            <div className="overlay">
                <p className="dish">{props.plate.dish}</p>
                <p className="description">{props.plate.description}</p>
                <p className="price">{props.plate.price}</p>
            </div>
        </div>
    );
}

export default MenuCard;
