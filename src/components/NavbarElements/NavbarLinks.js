import { NavLink } from 'react-router-dom';
import Logged from '../Logged/Logged';
import './NavbarLinks.css';

const NavBarLinks = ({ isAuth }) => {
  return (
    <div>
      {!isAuth ? (
        <>
          <ul className="navbarLinks">
            <li className="navbarSingleLink">Oferta</li>
            <li className="navbarSingleLink">Cennik</li>
            <li className="navbarSingleLink">Kontakt</li>
            <li className="navbarSingleLink">
              <NavLink to="/login" className="loginBtn">
                Zaloguj
              </NavLink>
            </li>
          </ul>
        </>
      ) : (
        <Logged isAuth={isAuth} />
      )}
    </div>
  );
};

export default NavBarLinks;
