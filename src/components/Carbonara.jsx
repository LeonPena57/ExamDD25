import carbonaraImage from "../images/carbonara.jpg";

const Carbonara = () => {
  return (
    <div>
      <h2>Spaghetti Carbonara</h2>
      <img src={carbonaraImage} alt="Carbonara" style={{ width: "100%", height: "200px", objectFit: "cover" }} />
      <p>A classic Italian pasta dish with creamy sauce.</p>
    </div>
  );
};

export default Carbonara;
