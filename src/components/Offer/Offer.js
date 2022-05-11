import Lorem from '../Auxiliary/Lorem.js';
import Button from '../Auxiliary/Button.js';
import './Offer.css';
const Offer = () => {
  return (
    <div className="contentOffer">
      <div className="textRtd">
        <span></span>
        <p>O nas</p>
      </div>
      <div className="aboutUs">
        <h3>Hej to my</h3>
        <Lorem />
      </div>
      <div className="aboutBox">
        <h3>Myjania</h3>
        <Lorem />
      </div>
    </div>
  );
};

export default Offer;
