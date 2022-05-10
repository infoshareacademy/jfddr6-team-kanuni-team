import { Navigate, useLocation } from 'react-router-dom';

const AuthProvider = ({ children, isAuth }) => {
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  return children;
};

export default AuthProvider;
