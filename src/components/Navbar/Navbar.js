import Logo from '../NavbarElements/Logo.js';
import NavbarLinks from '../NavbarElements/NavbarLinks.js';
import './Navbar.css';

const Navbar = ({isAuth}) => {
  return (
    <div className="navbar">
      <Logo />
      <NavbarLinks isAuth={isAuth}/>
    </div>
  );
};

export default Navbar;
