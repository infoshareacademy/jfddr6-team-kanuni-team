//komponent z formularzem i logiką do zalogowania
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { auth } from '../../data/db';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  let navigate = useNavigate();

  const loginUser = async (email, password) => {
    await signInWithEmailAndPassword(auth, email, password);
    setEmailInput('');
    setPasswordInput('');
    navigate('/userdashboard');
  };

  const handlerLogIn = async (e) => {
    e.preventDefault();
    loginUser(emailInput, passwordInput);
  };

  return (
    <>
      <h2>Zaloguj</h2>
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
      </form>
      <h2>
        Nie masz konta?{' '}
        <Button>
          <NavLink to="/register">Zarejestruj się</NavLink>
        </Button>
      </h2>
    </>
  );
};

export default Login;
