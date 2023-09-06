import DrinkSlider from '../components/DrinkSlider/DrinkSlider';
import Menu from '../components/Menu/Menu';
import Topper from '../components/Topper/Topper';
import './Main.css';

function Main() {
    return (
      <div className="Main">
        <Topper/>
        <DrinkSlider/>
        <Menu/>
      </div>
    );
  }
  
  export default Main;