import React, { useEffect, useState, useRef } from 'react';
import './App.css';
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import NavBar from './components/navigationBar/NavBar';
import Home from './components/home/home';
import ComputerScience from './components/computerScience/computerScience';
import Art from './components/art/art';
import Contacts from './components/contacts/contacts';
import LoadingScreen from './components/loadingScreen/LoadingScreen';
import Experiences from './components/experiences/experiences';
import clickSound from './assets/Experiences_Sounds.mp3';

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

  // Attempt to play an entry sound once, after loading screen finishes.
  useEffect(() => {
    if (loading) return;

    const alreadyPlayed = sessionStorage.getItem('entrySoundPlayed') === 'true';
    if (alreadyPlayed) return;

    const audio = entryAudioRef.current;
    audio.currentTime = 0;

    audio.play().then(() => {
      sessionStorage.setItem('entrySoundPlayed', 'true');
    }).catch(() => {
      const onInteract = () => {
        audio.currentTime = 0;
        audio.play().finally(() => {
          sessionStorage.setItem('entrySoundPlayed', 'true');
          window.removeEventListener('pointerdown', onInteract);
          window.removeEventListener('keydown', onInteract);
          window.removeEventListener('touchstart', onInteract);
        });
      };
      window.addEventListener('pointerdown', onInteract, { once: true });
      window.addEventListener('keydown', onInteract, { once: true });
      window.addEventListener('touchstart', onInteract, { once: true });
    });
  }, [loading]);

  if (loading) return <LoadingScreen />;

  return (
    <Router>
      <div className="App">
        <div className="NavBar">
            <NavBar/>
        </div>

        <Routes>
          <Route path="/experiences" element={<Experiences />} />
          <Route exact path="/" element={<Home />} />
          <Route path="/csPortfolio" element={<ComputerScience />} />
          <Route path="/artPortfolio" element={<Art />} />
          <Route path="/contacts" element={<Contacts />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
