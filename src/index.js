import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clickSound from './assets/Experiences_Sounds.mp3';


// plays music on loop once enter
if (typeof window !== 'undefined' && !window.__entryAudioInitialized__) {
  try {
    const audio = new Audio(clickSound);
    audio.loop = true;
    window.__entryAudio__ = audio;

    const markPlayed = () => {
      window.__entryAudioInitialized__ = true;
      window.removeEventListener('pointerdown', onInteract);
      window.removeEventListener('keydown', onInteract);
      window.removeEventListener('touchstart', onInteract);
    };

    const onInteract = () => {
      audio.currentTime = 0;
      audio.play().finally(markPlayed);
    };

    audio.play().then(markPlayed).catch(() => {
      window.addEventListener('pointerdown', onInteract, { once: true });
      window.addEventListener('keydown', onInteract, { once: true });
      window.addEventListener('touchstart', onInteract, { once: true });
    });
  } catch (e) {
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
