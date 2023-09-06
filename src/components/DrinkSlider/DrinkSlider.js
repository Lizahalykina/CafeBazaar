import DrinkCard from '../DrinkCard/DrinkCard';
import { useRef } from 'react';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import './DrinkSlider.css';

function DrinkSlider() {
 const simpleBarRef = useRef(null);

 const handleWheel = (e) => {
  // Get the SimpleBar instance
  const simpleBarInstance = simpleBarRef.current.getScrollElement();

  // Manually control the horizontal scrolling
  simpleBarInstance.scrollLeft += e.deltaY;
};
    const drinks = [
    {name: "Cappucino"}, 
    {name: "Frappe"}, 
    {name: "Latte"}, 
    {name: "Machiatto"}, 
    {name: "Espresso"}, 
    {name:"Long Black"}, 
    {name:"Flat White"}
];

    const drinkListed = drinks.map(function (drink, index) 
        {     
            return <DrinkCard drink={drink} key={index}/>
        })

    return (
      <div className="DrinkSlider">
        <SimpleBar  
          ref={simpleBarRef}
          autoHide={false} forceVisible="y"
          onWheel={handleWheel}
          style={{ maxHeight: '360px' , maxWidth: '100vw'}}>
        <div className="DrinkCardContainer">
           {drinkListed}
        </div>
        </SimpleBar>
      </div>
    );
  }
  
  export default DrinkSlider;