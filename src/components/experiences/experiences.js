import './experiences.css';
import beanStock from "/Users/ethantam/Desktop/etweb/src/assets/Experience_Beanstock.png";

function scrollToBottom() {
  window.scrollTo({
    top: document.body.scrollHeight,
    behavior: 'smooth'
  });
}

function ExperienceCard({ company, role, date, description }) {
  return (
    <div className="experience-card">
      <div className="experience-header">
        <div className="left">
          <h1 className="company">{company}</h1>
          <h2 className="role">{role}</h2>
          <p className="description">{description}</p>
        </div>
        <div className="right">
          <span className="date">{date}</span>
        </div>
      </div>
    </div>
  );
}

function Experiences() {
  return (
    <div className="experiences">
      <img className="beanstock-img" src={beanStock} alt="Bean Stock" />

      <div style={{ height: '76vh' }} /> {/* Spacer */}

      <ExperienceCard
        company="Adobe"
        role="Software Engineering Intern"
        date="May 2025 - August 2025"
        description="In my software engineering internship I built features, fixed bugs, and collaborated with cross-functional teams. I worked on improving frontend performance, developed tools for internal workflows, and participated in agile development cycles."
      />

      <button className="scroll-button" onClick={scrollToBottom}>
        ↓ Scroll to Bottom
      </button>
    </div>
  );
}

export default Experiences;
