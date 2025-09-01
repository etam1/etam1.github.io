import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import clickSound from './assets/Experiences_Sounds.mp3';


// Initialize audio but don't auto-play - let user control it
if (typeof window !== 'undefined' && !window.__entryAudioInitialized__) {
  try {
    const audio = new Audio(clickSound);
    audio.loop = true;
    window.__entryAudio__ = audio;
    window.__entryAudioInitialized__ = true;
  } catch (e) {
    // no-op; audio will simply not be available
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
