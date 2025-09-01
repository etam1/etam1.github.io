import './contacts.css';
import rightIsland from "../../assets/Contacts.png";
import leftIsland from "../../assets/Contacts2.png";
// import title from "../../assets/ContactsTitle.png";
import LinkedInLogo from "../../assets/LinkedInLogo.png";
import GithubLogo from "../../assets/GithubLogo.png";
import MailLogo from "../../assets/MailLogo.png";
import GoogleScholarsLogo from "../../assets/GoogleScholarsLogo.png";

function Contacts() {
  return (
    <div className="contacts">
      {/* <img src={title} alt="Title" className="title" /> */}
      <div className="background-contact-title">CONNECT!</div>

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
        <a href="https://scholar.google.com/citations?hl=en&view_op=list_works&gmla=AH8HC4yl16lnSq6tlCDN8bS2upy-DEYlJYZyBivq0BxjEKv0dbx065mir_IO81itXYKv0VnY5FQFgAYFUPGoUQ&user=ZeXj2QMAAAAJ" target="_blank" rel="noopener noreferrer">
          <img className="googleScholarsLogo" src={GoogleScholarsLogo} alt="LinkedIn" />
        </a>

      </div>
    </div>
  );
}

export default Contacts;
