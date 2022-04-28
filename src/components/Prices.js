import "./Prices.css";
import Price from "./Price.js";
const Prices = () => {
  return (
    <div className="prices">
      <Price
        header={"Zestaw Platinum"}
        paragraph={"Mycie z woskowaniem"}
        price={"100zł"}
      />
      <Price header={"Zestaw Gold"} paragraph={"Mycie"} price={"200zł"} />
      <Price
        header={"Zestaw Silver"}
        paragraph={"Sprzątanie"}
        price={"300zł"}
      />
      <Price
        header={"Zestaw Bronze"}
        paragraph={"Mycie okien"}
        price={"400zł"}
      />
      <Price
        header={"Zestaw Plastic"}
        paragraph={"Nabłyszczanie"}
        price={"500zł"}
      />
      <Price
        header={"Zestaw Wood"}
        paragraph={"Pranie tapicerki"}
        price={"600zł"}
      />
    </div>
  );
};

export default Prices;
