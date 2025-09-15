import { useState } from 'react';
import { createPortal } from 'react-dom';
import './artExperience.css';

function ArtExperienceVideoWithLink(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="artExperience">
        <div className="art-card" onClick={toggleExpanded}>
          <img className="art-card-image" src={props.image} alt={props.name} />
          <div className="art-card-name">{props.name}</div>
          <div className="art-card-time">{props.time}</div>
        </div>
      </div>
      
      {isExpanded && createPortal(
        <div className="art-modal-overlay" onClick={toggleExpanded}>
          <div className="art-modal" onClick={(e) => e.stopPropagation()}>
            <button className="art-close-x" onClick={toggleExpanded}>
              ×
            </button>
            <div className="art-modal-content">
              <div className="art-modal-text">
                <div className="art-Project-Name">{props.name}</div>
                <div className="art-Project-Time">{props.time}</div>
                <div className="art-Project-Text">{props.text}</div>
                <div className="art-Project-Link">
                  <a href={props.link} target="_blank" rel="noopener noreferrer">
                    Click here to see my project in detail!
                  </a>
                </div>
              </div>
              <div className="art-modal-video">
                <iframe title="videoTitle" width="100%" height="400"
                  src={props.video}>
                </iframe>
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}
  
  export default ArtExperienceVideoWithLink;
