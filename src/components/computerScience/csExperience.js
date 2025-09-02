import { useState } from 'react';
import { createPortal } from 'react-dom';
import './csExperience.css';

function CsExperience(props) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <>
      <div className="csExperience">
        <div className="cs-card" onClick={toggleExpanded}>
          <img className="cs-card-image" src={props.image} alt={props.name} />
          <div className="cs-card-name">{props.name}</div>
          <div className="cs-card-time">{props.time}</div>
        </div>
      </div>
      
      {isExpanded && createPortal(
        <div className="cs-modal-overlay" onClick={toggleExpanded}>
          <div className="cs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="cs-close-x" onClick={toggleExpanded}>
              ×
            </button>
            <div className="cs-modal-content">
              <div className="cs-modal-text">
                <div className="cs-Project-Name">{props.name}</div>
                <div className="cs-Project-Time">{props.time}</div>
                <div className="cs-Project-Text">{props.text}</div>
              </div>
              <div className="cs-modal-image">
                <img className="csPic" src={props.image} alt={props.name} />
              </div>
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default CsExperience;