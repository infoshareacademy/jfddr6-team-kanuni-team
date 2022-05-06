import Login from './Login/Login';
import Register from './Register/Register';

const UserDashboard = ({ isAuth }) => {
  return (
    <>
      {!isAuth && <Login />} {/* jeżeli nie zalogowany to wyświetli komponent Login */}
      {!isAuth && <Register />} {/*  jeżeli nie zalogowany to wyświetli komponent Register*/}
    </>
  );
};

export default UserDashboard;
