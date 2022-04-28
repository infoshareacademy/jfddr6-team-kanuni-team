import "./Price.css";
const Price = ({ header, paragraph, price }) => {
  return (
    <div className="price">
      <h2>{header}</h2>
      <p>{paragraph}</p>
      <p>{price}</p>
    </div>
  );
};

export default Price;
<div className="price"></div>;
