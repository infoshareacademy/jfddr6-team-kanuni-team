import { useState } from 'react';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../../data/db';
import './ForgotPassword.css';
import Logo from '../NavbarElements/Logo';

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
    <div className="bodyPassword">
      <div className="password-panel">
        <div className="leftSideBoxPassword">
          <Logo />
        </div>
        <div className="rightSidepassword">
          <h2>Zapomniałeś hasło?</h2>
          <p>wyślemy ci link resetujący</p>
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
      </div>
    </div>
  );
};

export default ForgotPassword;
