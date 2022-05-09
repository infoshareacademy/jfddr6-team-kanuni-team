import { NavLink } from 'react-router-dom';
import Logged from '../Logged/Logged';
import './NavbarLinks.css';

const NavBarLinks = ({ isAuth }) => {
  return (
    <div>
      {isAuth ? (
        <Logged isAuth={isAuth} />
      ) : (
        <>
          <ul className="navbarLinks">
            <li className="navbarSingleLink">Oferta</li>
            <li className="navbarSingleLink">Cennik</li>
            <li className="navbarSingleLink">Kontakt</li>
            <li>
              <NavLink to="/login">Zaloguj</NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBarLinks;
