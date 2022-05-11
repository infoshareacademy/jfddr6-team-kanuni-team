import Lorem from './Lorem';
import Button from './Button';
import './Offer.css';
const Offer = () => {
  return (
    <div className="contentOffer">
      <div className="aboutUs" id="oferta">
        <Lorem />
      </div>
      <button onClick={Button}>Umów się na wizytę</button>
    </div>
  );
};

export default Offer;
