import { useLocation, useNavigate } from 'react-router-dom';

import Button from '../Auxiliary/Button.js';
import Logged from '../Logged/Logged.js';
import Logo from '../NavbarElements/Logo.js';
import NavbarLinks from '../NavbarElements/NavbarLinks.js';
import './Navbar.css';

const Navbar = ({ isAuth }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const backToMainPage = () => {
    navigate('/');
  };

  return (
    <div className="navbar">
      <Logo />

      {location.pathname !== '/login' && location.pathname !== '/forgotpassword' ? (
        <NavbarLinks isAuth={isAuth} />
      ) : !isAuth ? (
        <Button buttonText={'Strona główna'} onClick={backToMainPage} />
      ) : (
        <Logged isAuth={isAuth} />
      )}
    </div>
  );
};

export default Navbar;
