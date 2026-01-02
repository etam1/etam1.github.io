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
              {props.documentationLink ? (
                <div className="art-portfolio-documentation-button-container">
                  <a href={props.documentationLink} target="_blank" rel="noopener noreferrer" className="art-portfolio-documentation-button">
                    Full Documentation
                  </a>
                </div>
              ) : (
                <div className="art-portfolio-bottom">
                  <div className="art-portfolio-column">
                    {props.leftParagraph1 && (
                      <div className="art-portfolio-paragraph">{props.leftParagraph1}</div>
                    )}
                    {props.leftParagraph2 && props.rightParagraph1 && (
                      <div className="art-portfolio-paragraph">{props.leftParagraph2}</div>
                    )}
                  </div>
                  <div className="art-portfolio-column">
                    {props.rightParagraph1 ? (
                      <>
                        <div className="art-portfolio-paragraph">{props.rightParagraph1}</div>
                        {props.rightParagraph2 && (
                          <div className="art-portfolio-paragraph">{props.rightParagraph2}</div>
                        )}
                      </>
                    ) : props.leftParagraph2 ? (
                      <div className="art-portfolio-paragraph">{props.leftParagraph2}</div>
                    ) : null}
                  </div>
                </div>
              )}
              {props.additionalImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.additionalImage} alt={props.additionalImageCaption || ""} />
                  {props.additionalImageCaption && (
                    <div className="art-portfolio-image-caption">{props.additionalImageCaption}</div>
                  )}
                </div>
              )}
              {props.secondImage && props.thirdImage ? (
                <div className="art-portfolio-images-row">
                  <div className="art-portfolio-image-section">
                    <img className="art-portfolio-additional-image" src={props.secondImage} alt={props.secondImageCaption || ""} />
                    {props.secondImageCaption && (
                      <div className="art-portfolio-image-caption">{props.secondImageCaption}</div>
                    )}
                  </div>
                  <div className="art-portfolio-image-section">
                    <img className="art-portfolio-additional-image" src={props.thirdImage} alt={props.thirdImageCaption || ""} />
                    {props.thirdImageCaption && (
                      <div className="art-portfolio-image-caption">{props.thirdImageCaption}</div>
                    )}
                  </div>
                </div>
              ) : (
                <>
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
                </>
              )}
              {props.fourthImage && props.fifthImage ? (
                <div className="art-portfolio-images-row">
                  <div className="art-portfolio-image-section">
                    <img className="art-portfolio-additional-image" src={props.fourthImage} alt={props.fourthImageCaption || ""} />
                    {props.fourthImageCaption && (
                      <div className="art-portfolio-image-caption">{props.fourthImageCaption}</div>
                    )}
                  </div>
                  <div className="art-portfolio-image-section art-portfolio-image-small">
                    <img className="art-portfolio-additional-image" src={props.fifthImage} alt={props.fifthImageCaption || ""} />
                    {props.fifthImageCaption && (
                      <div className="art-portfolio-image-caption">{props.fifthImageCaption}</div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {props.fourthImage && (
                    <div className="art-portfolio-image-section">
                      <img className="art-portfolio-additional-image" src={props.fourthImage} alt={props.fourthImageCaption || ""} />
                      {props.fourthImageCaption && (
                        <div className="art-portfolio-image-caption">{props.fourthImageCaption}</div>
                      )}
                    </div>
                  )}
                  {props.fifthImage && (
                    <div className="art-portfolio-image-section">
                      <img className="art-portfolio-additional-image" src={props.fifthImage} alt={props.fifthImageCaption || ""} />
                      {props.fifthImageCaption && (
                        <div className="art-portfolio-image-caption">{props.fifthImageCaption}</div>
                      )}
                    </div>
                  )}
                </>
              )}
              {props.sixthImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.sixthImage} alt={props.sixthImageCaption || ""} />
                  {props.sixthImageCaption && (
                    <div className="art-portfolio-image-caption">{props.sixthImageCaption}</div>
                  )}
                </div>
              )}
              {props.seventhImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.seventhImage} alt={props.seventhImageCaption || ""} />
                  {props.seventhImageCaption && (
                    <div className="art-portfolio-image-caption">{props.seventhImageCaption}</div>
                  )}
                </div>
              )}
              {props.eighthImage && props.tenthImage ? (
                <div className="art-portfolio-images-row">
                  <div className="art-portfolio-image-section">
                    <img className="art-portfolio-additional-image" src={props.eighthImage} alt={props.eighthImageCaption || ""} />
                    {props.eighthImageCaption && (
                      <div className="art-portfolio-image-caption">{props.eighthImageCaption}</div>
                    )}
                  </div>
                  <div className="art-portfolio-image-section">
                    <img className="art-portfolio-additional-image" src={props.tenthImage} alt={props.tenthImageCaption || ""} />
                    {props.tenthImageCaption && (
                      <div className="art-portfolio-image-caption">{props.tenthImageCaption}</div>
                    )}
                  </div>
                </div>
              ) : (
                <>
                  {props.eighthImage && (
                    <div className="art-portfolio-image-section">
                      <img className="art-portfolio-additional-image" src={props.eighthImage} alt={props.eighthImageCaption || ""} />
                      {props.eighthImageCaption && (
                        <div className="art-portfolio-image-caption">{props.eighthImageCaption}</div>
                      )}
                    </div>
                  )}
                  {props.tenthImage && (
                    <div className="art-portfolio-image-section">
                      <img className="art-portfolio-additional-image" src={props.tenthImage} alt={props.tenthImageCaption || ""} />
                      {props.tenthImageCaption && (
                        <div className="art-portfolio-image-caption">{props.tenthImageCaption}</div>
                      )}
                    </div>
                  )}
                </>
              )}
              {props.eleventhImage && (
                <div className="art-portfolio-image-section">
                  {props.eleventhImageLink ? (
                    <a href={props.eleventhImageLink} target="_blank" rel="noopener noreferrer" className="art-portfolio-image-link">
                      <img className="art-portfolio-additional-image" src={props.eleventhImage} alt={props.eleventhImageCaption || ""} />
                    </a>
                  ) : (
                    <img className="art-portfolio-additional-image" src={props.eleventhImage} alt={props.eleventhImageCaption || ""} />
                  )}
                  {props.eleventhImageCaption && props.eleventhImageLink ? (
                    <a href={props.eleventhImageLink} target="_blank" rel="noopener noreferrer" className="art-portfolio-image-caption-link">
                      <div className="art-portfolio-image-caption">{props.eleventhImageCaption}</div>
                    </a>
                  ) : props.eleventhImageCaption ? (
                    <div className="art-portfolio-image-caption">{props.eleventhImageCaption}</div>
                  ) : null}
                </div>
              )}
              {props.ninthImage && (
                <div className="art-portfolio-image-section">
                  <img className="art-portfolio-additional-image" src={props.ninthImage} alt={props.ninthImageCaption || ""} />
                  {props.ninthImageCaption && (
                    <div className="art-portfolio-image-caption">{props.ninthImageCaption}</div>
                  )}
                </div>
              )}
              {props.video && (
                <div className="art-portfolio-image-section">
                  <div className="art-portfolio-video">
                    <iframe title={props.videoCaption || "Video"} width="100%" height="400" src={props.video}></iframe>
                  </div>
                  {props.videoCaption && (
                    <div className="art-portfolio-image-caption">{props.videoCaption}</div>
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

