// komponent z formularzem i logiką do rejestracji

import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../data/db';

const Register = () => {
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const registerAuth = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
  };

  const createUser = async () => {
    const userName = nameInput;
    const userLastName = lastNameInput;
    const userEmail = emailInput;
    const pass = passwordInput;

    await setDoc(doc(db, 'users', userEmail), {
      name: userName,
      lastName: userLastName,
      email: userEmail,
      password: pass,
    });
  };

  const handlerRegister = (e) => {
    e.preventDefault();
    registerAuth(emailInput, passwordInput);
    createUser();
    setNameInput('');
    setLastNameInput('');
    setEmailInput('');
    setPasswordInput('');
  };

  return (
    <form onSubmit={(e) => handlerRegister(e)}>
      <label htmlFor="name">Imię: </label>
      <input
        type="text"
        id="name"
        value={nameInput}
        onChange={(e) => setNameInput(e.target.value)}
      />

      <label htmlFor="lastName">Nazwisko: </label>
      <input
        type="text"
        id="lastName"
        value={lastNameInput}
        onChange={(e) => setLastNameInput(e.target.value)}
      />

      <label htmlFor="email">Email: </label>
      <input
        type="email"
        id="email"
        value={emailInput}
        onChange={(e) => setEmailInput(e.target.value)}
      />

      <label htmlFor="password">Hasło: </label>
      <input
        type="password"
        id="password"
        value={passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
      />
      <Button buttonText={'Zarejestruj'} />
    </form>
  );
};

export default Register;
