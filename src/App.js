import Footer from './components/Footer/Footer.js';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './data/db';
import { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';
import './style.css';
function App() {
  //poniżej logika do ustawienia stanu w którym przechowywana jest informacja czy jesteśmy zalogowani
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
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuth ? <Navigate to="/userdashboard" /> : <Home />} />
          <Route
            path="/userdashboard"
            element={!isAuth ? <Navigate to="/" /> : <UserDashboard />}
          />
          <Route path="/login" element={isAuth ? <Navigate to="/userdashboard" /> : <Login />} />
          <Route
            path="/register"
            element={isAuth ? <Navigate to="/userdashboard" /> : <Register />}
          />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
