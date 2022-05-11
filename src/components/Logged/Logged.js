//komponent który wyświetla się jak jesteśmy zalogowani oraz posiada button do wylogowania

import Button from '../Auxiliary/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../data/db';
import { useNavigate } from 'react-router-dom';

const Logged = ({ isAuth }) => {
  let navigate = useNavigate();

  const signOutUser = () => {
    signOut(auth);
    navigate('/');
  };

  return (
    <>
      <p>jesteś zalogowany jako: {isAuth}</p>
      <Button buttonText={'Wyloguj'} onClick={signOutUser} />
    </>
  );
};

export default Logged;
