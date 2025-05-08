// import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header.jsx';
import Footer from './components/Footer/Footer.jsx';
import Home from './Pages/Home/Home.jsx';
import About from './pages/About/About.jsx';
import Work from './pages/Work/Work.jsx';
import ContactPage from './pages/Contact/ContactPage.jsx';
import  useDarkMode  from './hooks/useDarkMode.jsx';
import StorePage from './pages/StorePage/StorePage.jsx';
import './assets/styles/global.css';

function App() {
  const [darkMode, toggleDarkMode] = useDarkMode();
  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <Header darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/work" element={<Work />} />
        <Route path="/store" element={<StorePage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
