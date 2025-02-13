import chocolateCakeImage from "../images/chocolate-cake.jpg";

const ChocolateCake = () => {
  return (
    <div>
      <h2>Chocolate Cake</h2>
      <img src={chocolateCakeImage} alt="Chocolate Cake" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <p>A rich and moist chocolate cake.</p>
    </div>
  );
};

export default ChocolateCake;
