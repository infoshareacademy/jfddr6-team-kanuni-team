import { useState } from 'react';
import Button from '../Auxiliary/Button';
import { createUserWithEmailAndPassword } from 'firebase/auth';
// import { setDoc, doc } from 'firebase/firestore';
import { auth } from '../../data/db';

const Register = () => {
  const [nameInput, setNameInput] = useState('');
  const [lastNameInput, setLastNameInput] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');
  const [userID, setUserID] = useState('');

  const registerAuth = async (email, password) => {
    const response = await createUserWithEmailAndPassword(auth, email, password).then((res) =>
      setUserID(res.user.uid),
    );
    // console.log(response.user.uid);
    // setUserID(response.user.uid);
  };

  const handlerRegister = (e) => {
    e.preventDefault();
    registerAuth(emailInput, passwordInput);
    console.log(emailInput, passwordInput, nameInput, lastNameInput, userID);
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
