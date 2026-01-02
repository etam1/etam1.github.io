import { useState } from 'react';
import { createPortal } from 'react-dom';
import './artExperiencePortfolio.css';

function ArtExperiencePortfolio(props) {
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
          <div className="art-portfolio-modal" onClick={(e) => e.stopPropagation()}>
            <button className="art-close-x" onClick={toggleExpanded}>
              ×
            </button>
            <div className="art-portfolio-content">
              <div className="art-portfolio-top">
                <div className="art-portfolio-left">
                  <div className="art-portfolio-title">{props.name}</div>
                  <div className="art-portfolio-subtitle">{props.subtitle}</div>
                  <div className="art-portfolio-intro">{props.introText}</div>
                </div>
                <div className="art-portfolio-details">
                  <div className="art-portfolio-detail-item">
                    <span className="art-portfolio-detail-label">DURATION:</span> {props.duration}
                  </div>
                  <div className="art-portfolio-detail-item">
                    <span className="art-portfolio-detail-label">ROLE:</span> {props.role}
                  </div>
                  <div className="art-portfolio-detail-item">
                    <span className="art-portfolio-detail-label">TOOLS:</span> {props.tools}
                  </div>
                  <div className="art-portfolio-detail-item">
                    <span className="art-portfolio-detail-label">TEAM:</span> {props.team}
                  </div>
                </div>
              </div>
              <div className="art-portfolio-divider"></div>
              <div className="art-portfolio-quote">{props.quote}</div>
              <div className="art-portfolio-bottom">
                <div className="art-portfolio-column">
                  <div className="art-portfolio-paragraph">{props.leftParagraph1}</div>
                  <div className="art-portfolio-paragraph">{props.leftParagraph2}</div>
                </div>
                <div className="art-portfolio-column">
                  <div className="art-portfolio-paragraph">{props.rightParagraph1}</div>
                  <div className="art-portfolio-paragraph">{props.rightParagraph2}</div>
                </div>
              </div>
              {props.additionalImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.additionalImage} alt={props.additionalImageCaption || ""} />
                  {props.additionalImageCaption && (
                    <div className="art-portfolio-image-caption">{props.additionalImageCaption}</div>
                  )}
                </div>
              )}
              {props.secondImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.secondImage} alt={props.secondImageCaption || ""} />
                  {props.secondImageCaption && (
                    <div className="art-portfolio-image-caption">{props.secondImageCaption}</div>
                  )}
                </div>
              )}
              {props.thirdImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.thirdImage} alt={props.thirdImageCaption || ""} />
                  {props.thirdImageCaption && (
                    <div className="art-portfolio-image-caption">{props.thirdImageCaption}</div>
                  )}
                </div>
              )}
              {props.fourthImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.fourthImage} alt={props.fourthImageCaption || ""} />
                  {props.fourthImageCaption && (
                    <div className="art-portfolio-image-caption">{props.fourthImageCaption}</div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default ArtExperiencePortfolio;

