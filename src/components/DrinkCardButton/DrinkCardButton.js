function DrinkCardButton(props) {
    return (
        <div className={props.className}>
            <p className={props.selected ? "DrinkName-Selected" : "DrinkName"}>
                {props.text}
            </p>
            {props.description && (
                <p className="DrinkDescription">{props.description}</p>
            )}
        </div>
    );
}

export default DrinkCardButton;
