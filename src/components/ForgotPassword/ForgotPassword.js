import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../data/db';

const ForgotPassword = () => {
  const [emailInput, setEmailInput] = useState('');
  const [passwordReset, setPasswordReset] = useState(false);

  const resetPassword = async () => {
    await sendPasswordResetEmail(auth, emailInput).then(() => {
      setPasswordReset(true);
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    resetPassword();
  };

  return (
    <div>
      <h1>ForgotPassword</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={emailInput}
          placeholder="Twoj email"
          onChange={(e) => setEmailInput(e.target.value)}
        />
        <button type="submit">Resetuj hasło</button>
      </form>
      {passwordReset && <div>Hasło zresetowane, odbierz email.</div>}
    </div>
  );
};

export default ForgotPassword;
