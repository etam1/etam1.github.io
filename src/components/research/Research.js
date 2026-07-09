import { useEffect, useRef, useState } from 'react';
import './Research.css';
import downButton from "../../assets/Experience_ArrowDown.png";
import ResearchSun from "../../assets/Research_Sun.svg";
import ResearchCloud from "../../assets/Research_Cloud.svg";
import ResearchCloud1 from "../../assets/Research_Cloud1.svg";
import ResearchCloud2 from "../../assets/Research_Cloud2.svg";
import ResearchCloud3 from "../../assets/Research_Cloud3.svg";
import ResearchCloud4 from "../../assets/Research_Cloud4.svg";
import ResearchCloud5 from "../../assets/Research_Cloud5.svg";
import ResearchGround from "../../assets/Research_Ground.svg";
import ResearchTreeMidLeft from "../../assets/Research_Tree_Mid_Left.svg";
import ResearchTreeMidRight from "../../assets/Research_Tree_Mid_Right.svg";
import ResearchBridgeLeft from "../../assets/Research_Bridge_Left.svg";
import ResearchBridgeRight from "../../assets/Research_Bridge_Right.svg";
import ResearchTreeMid2 from "../../assets/Research_Tree_Mid2.svg";
import ResearchTree from "../../assets/Research_Tree.svg";
import ResearchTreeFront from "../../assets/Research_Tree_Front.svg";

function Research() {
  const contentRef = useRef(null);
  const [bridgesHidden, setBridgesHidden] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    setBridgesHidden(false);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setBridgesHidden(window.scrollY > window.innerHeight * 0.1);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="research-page">
      <section className="research">
        <div className={`researchHeader ${bridgesHidden ? 'header-hide' : 'header-show'}`}>RESEARCH</div>
        <img src={ResearchSun} alt="Research Sun" className="research-sun" />
        <img src={ResearchCloud} alt="Research Cloud" className="research-cloud" />
        <img src={ResearchCloud1} alt="Research Cloud 1" className="research-cloud-1" />
        <img src={ResearchCloud2} alt="Research Cloud 2" className="research-cloud-2" />
        <img src={ResearchCloud3} alt="Research Cloud 3" className="research-cloud-3" />
        <img src={ResearchCloud4} alt="Research Cloud 4" className="research-cloud-4" />
        <img src={ResearchCloud5} alt="Research Cloud 5" className="research-cloud-5" />
        <img src={ResearchGround} alt="Research Ground" className="research-ground" />
        <img src={ResearchTreeMidLeft} alt="Research Tree Mid Left" className="research-tree-mid-left" />
        <img src={ResearchTreeMidRight} alt="Research Tree Mid Right" className="research-tree-mid-right" />
        <img src={ResearchBridgeLeft} alt="Research Bridge Left" className={`research-bridge-left ${bridgesHidden ? 'slide-out-left' : ''}`} />
        <img src={ResearchTree} alt="Research Tree" className="research-tree" />
        <img src={ResearchTree} alt="Research Tree" className="research-tree-2" />
        <img src={ResearchBridgeRight} alt="Research Bridge Right" className={`research-bridge-right ${bridgesHidden ? 'slide-out-right' : ''}`} />
        <img src={ResearchTreeMid2} alt="Research Tree Mid 2" className="research-tree-mid-2" />
        <img src={ResearchTreeFront} alt="Research Tree Front" className="research-tree-front" />
        <div className="research-front-plank" aria-hidden="true" />
        <button
          type="button"
          className="research-down-button"
          aria-label="Scroll Down"
          style={{
            WebkitMaskImage: `url(${downButton})`,
            maskImage: `url(${downButton})`,
          }}
          onClick={() => {
            contentRef.current?.scrollIntoView({ behavior: 'smooth' });
          }}
        />
      </section>

      <section className="research-content" ref={contentRef}>
        <div className="research-text-item">
          <span className="research-link">"Artifactor"</span> Coming Soon...
        </div>
        <div className="research-text-item">
          <a href="https://dl.acm.org/doi/full/10.1145/3715275.3732082" target="_blank" rel="noopener noreferrer" className="research-link">"Labor, Power, and Belonging: The Work of Voice in the Age of AI Reproduction"</a><span className="research-text-small">. Almeda, S., Netzorg, R., Li, I., Tam, E., Ma, S., Wei, B. ACM Conference on Fairness, Accountability, and Transparency (FAccT) 2025.</span>
        </div>
        <div className="research-text-item">
          <a href="https://dl.acm.org/doi/abs/10.1145/3672539.3686783" target="_blank" rel="noopener noreferrer" className="research-link">"Demonstration of Sympathetic Orchestra: An Interactive Conducting Education System for Responsive, Tacit Skill Development"</a><span className="research-text-small">. Wei, B. T., Almeda, S. G., Tam, E., Abrahamson, D. Adjunct Proceedings of the 37th Annual ACM Symposium on User Interface Software and Technology (UIST Adjunct), 2024.</span>
        </div>
      </section>
    </div>
  );
}

export default Research;
