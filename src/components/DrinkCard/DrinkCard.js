import DrinkCardButton from '../DrinkCardButton/DrinkCardButton';
import './DrinkCard.css';

function DrinkCard(props) {
    return (
      <div className="DrinkCard
    ">
      <DrinkCardButton text={props.drink.name}/>  
      </div>
    );
  }
  
  export default DrinkCard
;