import { useState } from 'react';
import { createPortal } from 'react-dom';
import './newCsExperience.css';

function NewCsExperience({
  title,
  image,
  tag1,
  tag2,
  tag3,
  role,
  timeline,
  organization,
  team,
  toolsSkills,
  shortDescription,
  overlayIds = [],
  onOverlayHover,
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  const tags = [tag1, tag2, tag3].filter(Boolean);

  const handleHoverChange = (isHovered) => {
    if (!onOverlayHover || !overlayIds.length) return;
    onOverlayHover(isHovered ? overlayIds : []);
  };

  const detailFields = [
    { label: 'Role', value: role },
    { label: 'Timeline', value: timeline },
    { label: 'Organization', value: organization },
    { label: 'Team', value: team },
    { label: 'Tools/Skills', value: toolsSkills },
    { label: 'Short Description', value: shortDescription },
  ].filter((field) => field.value);

  return (
    <>
      <div className="newCsExperience">
        <div
          className="new-cs-card"
          onClick={toggleExpanded}
          onMouseEnter={() => handleHoverChange(true)}
          onMouseLeave={() => handleHoverChange(false)}
        >
          <div className="new-cs-card-image">
            {image && <img src={image} alt={title} />}
          </div>
          <div className="new-cs-card-title-bar">
            <span className="new-cs-card-title-dot" aria-hidden="true" />
            <div className="new-cs-card-title">{title}</div>
            <span className="new-cs-card-title-dot" aria-hidden="true" />
          </div>
        </div>
      </div>

      {isExpanded && createPortal(
        <div className="new-cs-modal-overlay" onClick={toggleExpanded}>
          <div className="new-cs-modal" onClick={(e) => e.stopPropagation()}>
            <button className="new-cs-close-x" onClick={toggleExpanded}>
              ×
            </button>

            <div className="new-cs-modal-body">
              <div className="new-cs-modal-left">
                <div className="new-cs-title-block">
                  <span className="new-cs-title-dot" aria-hidden="true" />
                  <h2 className="new-cs-title">{title}</h2>
                  <span className="new-cs-title-dot" aria-hidden="true" />
                </div>

                {tags.length > 0 && (
                  <div className="new-cs-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="new-cs-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <div className="new-cs-divider" aria-hidden="true" />

                <div className="new-cs-details">
                  {detailFields.map((field) => (
                    <div
                      key={field.label}
                      className={`new-cs-detail-item${
                        field.label === 'Short Description' ? ' new-cs-detail-item-stacked' : ''
                      }`}
                    >
                      <div className="new-cs-detail-label">{field.label}</div>
                      <div className="new-cs-detail-value">{field.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="new-cs-modal-divider" aria-hidden="true" />

              <div className="new-cs-modal-right" />
            </div>
          </div>
        </div>,
        document.body
      )}
    </>
  );
}

export default NewCsExperience;
