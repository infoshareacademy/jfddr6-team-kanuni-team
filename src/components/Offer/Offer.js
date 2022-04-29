import Lorem from '../Auxiliary/Lorem.js';
import Button from '../Auxiliary/Button.js';
import './Offer.css';
const Offer = () => {
  return (
    <div className="contentOffer">
      <div className="aboutUs">
        <Lorem />
      </div>
      <Button
        className="buttonOffer"
        onClick={() => console.log('umawiam')}
        buttonText="Umów się na wizytę"
      ></Button>
    </div>
  );
};

export default Offer;
