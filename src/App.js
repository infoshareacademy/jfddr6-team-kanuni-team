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
import AddNewVisit from './components/AddNewVisit/AddNewVisit.js';
import AuthProvider from './components/Auxiliary/AuthProvider.js';
import Header from './components/Header/Header.js';

function App() {
  //poniżej logika do ustawienia stanu w którym przechowywana jest informacja czy jesteśmy zalogowani
  const [isAuth, setIsAuth] = useState(false);
  const [userUid, setUserUid] = useState(false);
  onAuthStateChanged(auth, (user) => {
    if (user) {
      setUserUid(user.uid);
      setIsAuth(user.email);
    } else {
      setIsAuth(false);
    }
  });

  return (
    <div>
      <BrowserRouter>
        <Navbar isAuth={isAuth} />
        <Header />
        <Routes>
          <Route
            path="/userdashboard"
            element={
              <AuthProvider isAuth={isAuth}>
                <UserDashboard user={isAuth} />
              </AuthProvider>
            }
          />

          <Route
            path="/userdashboard/addnewvisit"
            element={
              <AuthProvider isAuth={isAuth}>
                <AddNewVisit userUid={userUid} />
              </AuthProvider>
            }
          />

          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login isAuth={isAuth} />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
