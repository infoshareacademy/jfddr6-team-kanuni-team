import Footer from './components/Footer/Footer.js';
import Home from './components/Home';
import UserDashboard from './components/UserDashboard';
import Navbar from './components/Navbar/Navbar.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login/Login.js';

function App() {
  return (
    <div>
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/userdashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
