import Offer from '../components/Offer/Offer.js';
import Contact from '../components/Contact/Contact.js';
import { Gallery } from './Gallery/Gallery.js';
import { Prices } from './Prices/Prices.js';

const Home = () => {
  return (
    <>
      <Offer />
      <Gallery />
      <Prices />
      <Contact />
    </>
  );
};

export default Home;
