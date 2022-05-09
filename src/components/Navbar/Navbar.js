import Logo from '../NavbarElements/Logo.js';
import NavbarLinks from '../NavbarElements/NavbarLinks.js';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <Logo />
      <NavbarLinks />
    </div>
  );
};

export default Navbar;
