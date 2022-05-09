import Footer from './components/Footer/Footer.js';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from './data/db';
import { useState } from 'react';
import Login from './components/Login/Login';
import Register from './components/Register/Register';

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
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdashboard" element={<UserDashboard isAuth={isAuth} />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
