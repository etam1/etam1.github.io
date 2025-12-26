import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import NavBar from './components/navigationBar/NavBar';
import Home from './components/home/home';
import ComputerScience from './components/computerScience/computerScience';
import Art from './components/art/art';
import Film from './components/film/film';
import Contacts from './components/contacts/contacts';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import Experiences from './components/experiences/experiences';
import clickSound from './assets/Experiences_Sounds.mp3';

function AppContent() {
  const location = useLocation();
  const isFilmPage = location.pathname === '/film' || location.hash === '#/film';

  return (
    <div className={`App ${isFilmPage ? 'film-page' : ''}`}>
      <div className="NavBar">
        <NavBar/>
      </div>

      <Routes>
        <Route path="/experiences" element={<Experiences />} />
        <Route exact path="/" element={<Home />} />
        <Route path="/csPortfolio" element={<ComputerScience />} />
        <Route path="/artPortfolio" element={<Art />} />
        <Route path="/film" element={<Film />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </div>
  );
}

function App() {
  const [loading, setLoading] = useState(true);
  const entryAudioRef = useRef(new Audio(clickSound));

  useEffect(() => {
    window.history.scrollRestoration = 'manual';

    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000); // simulate 2s load time

    return () => clearTimeout(timeout);
  }, []);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
