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
      // Hide any sound prompt
      const soundPrompt = document.getElementById('sound-prompt');
      if (soundPrompt) soundPrompt.remove();
    };

    const onInteract = () => {
      audio.currentTime = 0;
      audio.play().finally(markPlayed);
    };

    const showSoundPrompt = () => {
      // Create a subtle prompt
      const prompt = document.createElement('div');
      prompt.id = 'sound-prompt';
      prompt.innerHTML = '🎵 Tap anywhere to enable sound';
      prompt.style.cssText = `
        position: fixed;
        bottom: 20px;
        right: 20px;
        background: rgba(0,0,0,0.8);
        color: white;
        padding: 10px 15px;
        border-radius: 25px;
        font-family: 'Neucha', cursive;
        font-size: 14px;
        z-index: 999999999;
        animation: fadeInOut 4s ease-in-out;
        pointer-events: none;
      `;
      
      // Add CSS animation
      if (!document.getElementById('sound-prompt-styles')) {
        const style = document.createElement('style');
        style.id = 'sound-prompt-styles';
        style.textContent = `
          @keyframes fadeInOut {
            0% { opacity: 0; transform: translateY(20px); }
            20% { opacity: 1; transform: translateY(0); }
            80% { opacity: 1; transform: translateY(0); }
            100% { opacity: 0; transform: translateY(-20px); }
          }
        `;
        document.head.appendChild(style);
      }
      
      document.body.appendChild(prompt);
      
      // Auto-remove after animation
      setTimeout(() => {
        if (prompt.parentNode) prompt.remove();
      }, 4000);
    };

    audio.play().then(markPlayed).catch(() => {
      showSoundPrompt();
      window.addEventListener('pointerdown', onInteract, { once: true });
      window.addEventListener('keydown', onInteract, { once: true });
      window.addEventListener('touchstart', onInteract, { once: true });
    });
  } catch (e) {
    // no-op
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
