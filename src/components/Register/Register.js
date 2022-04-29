import { useState } from 'react';
import Button from '../Auxiliary/Button';
const Register = () => {
  const [emailInput, setEmailInput] = useState('');
  const handlerSubmit = () => {};
  return (
    <form onSubmit={handlerSubmit}>
      <label htmlFor="email">Email: </label>
      <input type="email" id="email" />
      <label htmlFor="password">Password: </label>
      <input type="password" id="password" />
      <Button buttonText={'Zaloguj'} />
    </form>
  );
};

export default Register;
