//komponent z formularzem i logiką do zalogowania
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { auth } from '../../data/db';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import './Login.css';
const Login = ({ isAuth }) => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  let navigate = useNavigate();

  const loginUser = async (email, password) => {
    const response = await signInWithEmailAndPassword(auth, email, password).catch((error) => {
      switch (error.code) {
        case 'auth/wrong-password':
          alert(`Złe hasło`);
          break;
        case 'auth/user-not-found':
          alert(`Nie ma takiego użytkownika`);
          break;
        default:
          console.log(error.message);
          alert(`Wystąpił błąd`);
          console.log(error.message);
          break;
      }
    });

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
      <div className="loginPage">
        <div className="loginBox">
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
        </div>
        <div className="registerBox">
          <h2>
            Nie masz konta?{' '}
            <Button>
              <NavLink to="/register">Zarejestruj się</NavLink>
            </Button>
          </h2>
        </div>
      </div>
    </>
  );
};

export default Login;
