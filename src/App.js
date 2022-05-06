import Footer from './components/Footer/Footer.js';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './data/db';
import { useState } from 'react';
import Logged from './components/Logged/Logged.js';

function App() {
  const [isAuth, setIsAuth] = useState(false);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setIsAuth(user.email);
    } else {
      setIsAuth(false);
    }
  });

  return (
    <div>
      {isAuth && <Logged isAuth={isAuth} setIsAuth={setIsAuth} />}

      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdashboard" element={<UserDashboard isAuth={isAuth} />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
