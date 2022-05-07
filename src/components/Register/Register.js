// komponent z formularzem i logiką do rejestracji

import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../../data/db';

const registerUser = async (email, password) => {
  // todo nazwa auth user
  const response = await createUserWithEmailAndPassword(auth, email, password);
  // console.log(response.user.uid);
  return response.user;
};

const createUser = async ({ id, name, lastName }) => {
  await setDoc(doc(db, 'users', id), {
    name,
    lastName,
  });
};

const Register = () => {
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const handlerRegister = async (e) => {
    e.preventDefault();
    const registeredUser = await registerUser(emailInput, passwordInput);
    const userId = registeredUser.uid;
    console.log({ userId });
    await createUser({ id: userId, name: nameInput, lastName: lastNameInput }); //todo zmienić nazwę
    // setNameInput('');
    // setLastNameInput('');
    // setEmailInput('');
    // setPasswordInput('');
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
