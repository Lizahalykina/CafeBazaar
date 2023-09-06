import MenuCard from "../MenuCard/MenuCard";
import "./Menu.css";

function Menu() {
  const plates = [
    { name: "sadnwich 1" },
    { name: "sandwich 2" },
    { name: "pancakes" },
    { name: "something else" },
    { name: "something else 2" },
    { name: "something else 3" },
  ];

  const plateslisted = plates.map(function (plate, index) {
    return <MenuCard plate={plate} key={index} />;
  });

  return (
    <div className="Menu">
      <h2>Menu</h2>
      <div className="Menu-container">
        <div className="MenuCard-container">{plateslisted}</div>
      </div>
    </div>
  );
}

export default Menu;
