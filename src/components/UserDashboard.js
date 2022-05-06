import Login from './Login/Login';
import Register from './Register/Register';

const UserDashboard = ({ isAuth }) => {
  return (
    <>
      {!isAuth && <Login />}
      {!isAuth && <Register />}
    </>
  );
};

export default UserDashboard;
