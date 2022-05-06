import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { auth, db } from '../../data/db';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { collection, doc, getDoc } from 'firebase/firestore';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [isAuth, setIsAuth] = useState('');
  const [currentUserName, setCurrentUserName] = useState('');

  const loginUser = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password);
    setIsAuth(response.user.email);
  };

  const handlerLogIn = async (e) => {
    e.preventDefault();

    loginUser(emailInput, passwordInput);
  };

  return (
    <form onSubmit={handlerLogIn}>
      <label htmlFor="loginEmail">Email: </label>
      <input
        type="email"
        id="loginEmail"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />

      <label htmlFor="loginPassword">Hasło: </label>
      <input
        type="password"
        id="loginPassword"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <Button buttonText={'Zaloguj'} />
      <p>jesteś zalogowany jako: {isAuth}</p>
    </form>
  );
};

export default Login;
