import './contacts.css';
import rightIsland from "../../assets/Contacts.png";
import leftIsland from "../../assets/Contacts2.png";
// import title from "../../assets/ContactsTitle.png";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import GithubLogo from "../../assets/GithubLogo.png";
import MailLogo from "../../assets/MailLogo.png";

function Contacts() {
  return (
    <div className="contacts">
      {/* <img src={title} alt="Title" className="title" /> */}
      <div className="background-contact-title">CONTACTS</div>

      <div className="islands">
        <img src={leftIsland} alt="Island" className="leftSideIsland" />
        <img src={rightIsland} alt="Island" className="centerIsland" />
      </div>
      <div className="contactDescription">
        <a href="mailto:ethantam9@gmail.com" target="_blank" rel="noopener noreferrer">
          <img className="mailLogo" src={MailLogo} alt="Email" />
        </a>
        <a href="https://github.com/etam1" target="_blank" rel="noopener noreferrer">
          <img className="githubLogo" src={GithubLogo} alt="GitHub" />
        </a>
        <a href="https://www.linkedin.com/in/ethan-tam-0420791a6/" target="_blank" rel="noopener noreferrer">
          <img className="linkedinLogo" src={LinkedInLogo} alt="LinkedIn" />
        </a>

      </div>
    </div>
  );
}

export default Contacts;
