import React from 'react';
import './LoadingScreen.css';
import loadingGif from '/Users/ethantam/Desktop/etweb/src/assets/loading.gif';

export default function LoadingScreen() {
  return (
    <div className="loading-screen">
      <img src={loadingGif} alt="Loading..." />
    </div>
  );
}