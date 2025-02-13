import chickenCurryImage from "../images/chicken-curry.jpg";

const ChickenCurry = () => {
  return (
    <div>
      <h2>Chicken Curry</h2>
      <img src={chickenCurryImage} alt="Chicken Curry" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <p>A spicy and flavorful chicken curry.</p>
    </div>
  );
};

export default ChickenCurry;
