// komponent z formularzem i logiką do rejestracji

import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../data/db';
import { useNavigate } from 'react-router-dom';
import './Register.css';
import Logo from '../NavbarElements/Logo.js';

const registerUserAuth = async (email, password) => {
  // todo nazwa auth user
  const response = await createUserWithEmailAndPassword(auth, email, password).catch((error) => {
    switch (error.code) {
      case 'auth/email-already-in-use':
        alert(`email ${email} is already in use`);
        break;
      case 'auth/invalid-email':
        alert(`Email address ${email} is invalid.`);
        break;
      case 'auth/operation-not-allowed':
        alert(`Error during sign up.`);
        break;
      default:
        console.log(error.message);
        break;
    }
  });

  return response.user;
};

const createUserMetaDate = async ({ id, name, lastName, mail }) => {
  await setDoc(doc(db, 'users', id), {
    name,
    lastName,
    mail,
    visits: [],
  });
};

const Register = () => {
  let navigate = useNavigate();

  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handlerRegister = async (e) => {
    e.preventDefault();
    const registeredUser = await registerUserAuth(emailInput, passwordInput);
    const userId = registeredUser.uid;
    await createUserMetaDate({
      id: userId,
      name: nameInput,
      lastName: lastNameInput,
      mail: emailInput,
    }); //todo zmienić nazwę
    setNameInput('');
    setLastNameInput('');
    setEmailInput('');
    setPasswordInput('');
    navigate('/userdashboard');
  };

  return (
    <div className="bodyRegister">
      <div className="register-panel">
        <div className="leftSideBox">
          <Logo />
        </div>
        <div className="rightSide">
          <h2>Zarejestruj się</h2>
          <p>załó konto by umówić się na wizytę</p>
          <form onSubmit={(e) => handlerRegister(e)}>
            <label htmlFor="name"></label>
            <input
              placeholder="Imię"
              type="text"
              id="name"
              value={nameInput}
              onChange={(e) => setNameInput(e.target.value)}
            />

            <label htmlFor="lastName"></label>
            <input
              placeholder="Nazwisko"
              type="text"
              id="lastName"
              value={lastNameInput}
              onChange={(e) => setLastNameInput(e.target.value)}
            />

            <label htmlFor="email"></label>
            <input
              placeholder="Email"
              type="email"
              id="email"
              value={emailInput}
              onChange={(e) => setEmailInput(e.target.value)}
            />

            <label htmlFor="password"></label>
            <input
              placeholder="Hasło"
              type="password"
              id="password"
              value={passwordInput}
              onChange={(e) => setPasswordInput(e.target.value)}
            />
            <Button buttonText={'Zarejestruj'} />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
