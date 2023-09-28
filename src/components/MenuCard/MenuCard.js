import "./MenuCard.css";

function MenuCard(props) {
    const imageSrc = props.imageSrc;
    return (
        <div className="MenuCard">
            <img src={imageSrc} alt={props.plate.name} />
        </div>
    );
}

export default MenuCard;
