//komponent który wyświetla się jak jesteśmy zalogowani oraz posiada button do wylogowania

import Button from '../Auxiliary/Button';
import { signOut } from 'firebase/auth';
import { auth } from '../../data/db';

const Logged = ({ isAuth }) => {
  const signOutUser = () => {
    signOut(auth);
  };

  return (
    <>
      <p>jesteś zalogowany jako: {isAuth}</p>
      <Button buttonText={'Wyloguj'} onClick={signOutUser} />
    </>
  );
};

export default Logged;
