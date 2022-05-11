import { NavLink } from 'react-router-dom';
import Logged from '../Logged/Logged';

const NavBarLinks = ({ isAuth }) => {
  return (
    <div>
      {isAuth ? (
        <Logged isAuth={isAuth} />
      ) : (
        <>
          <ul className="navbarLinks">
            <li className="navbarSingleLink">
              <a href="#offer">Oferta</a>
            </li>
            <li className="navbarSingleLink">
              <a href="#prices">Cennik</a>
            </li>
            <li className="navbarSingleLink">
              <a href="#contact"> Kontakt</a>
            </li>
            <li className="navbarSingleLink">
              <NavLink to="/login" className="loginBtn">
                Zaloguj
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </div>
  );
};

export default NavBarLinks;
