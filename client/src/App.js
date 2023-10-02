import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from './functionality/UserContext';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import Authentication from './pages/Authentication';
import UserOnly from './pages/UserOnly';
import Home from './pages/Home';
import './App.css'
import Root from './pages/Root';
import Dictaphone from './functionality/Dictaphone';
import CarouselDisplay from './components/Carousel/CarouselDisplay';

export default function App() {
  const { user } = useContext(UserContext) || { user: null }; 
  
  return (
    <div className="App">
      <Dictaphone />
      <Router>
        <Header />
          <Routes>
            <Route path="/" element={<Root />} />
            <Route path="/auth" element={<Authentication />} />
            <Route path="/home" element={<Home />} />
            {user && <Route path="/useronly" element={<UserOnly />} />}
          </Routes>
        <Footer />
      </Router>
    </div>
  );
}