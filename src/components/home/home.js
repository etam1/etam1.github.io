import './home.css';
import welcome from "/Users/ethantam/Desktop/etweb/src/assets/Welcome.png";
import art from "/Users/ethantam/Desktop/etweb/src/assets/Art.png";
import contact from "/Users/ethantam/Desktop/etweb/src/assets/Contact.png";
import LinkedInLogo from "/Users/ethantam/Desktop/etweb/src/assets/LinkedInLogo.png";
import GithubLogo from "/Users/ethantam/Desktop/etweb/src/assets/GithubLogo.png";
import MailLogo from "/Users/ethantam/Desktop/etweb/src/assets/MailLogo.png";
import MePic from "/Users/ethantam/Desktop/etweb/src/assets/MePicture.png";

function home() {
  return (
    <div className="home">
        <div className="welcomeDescription">
        <img className="welcome" src={welcome} alt="chopper"></img>
        <img className="mePic" src={MePic} alt="chopper"></img>
        </div>
      
        <div className="csDescription">
          <h1>I am a UC Berkeley student pursuing a BA in Computer Science. Since seeing how computer graphics shaped animation, I was inspired to explore other branches of computer science at a young age. My interests include machine learning, AI, computer security, computer graphics, and many more of the interdisciplinary applications of CS. Check out my projects!</h1>
        </div>

        <div className="artDescription">
          <img className="artHomepage" src={art} alt="chopper"></img>
        </div>

        <p className="artDescriptionText">
        Since childhood, art has both fascinated me with its diverse mediums and acted as a source of comfort. Most of my inspirations are drawn from the animated films and shows I grew up with. Today, I’m interested in exploring the intersections between Art and Computer Science. You can check out some of my art projects here!
        </p>

        <div className="interestDescription">
          <h1>In my free time, I love creating art, bullet journaling, jamming out to music, watching the latest movies, and following award season. Outside of the arts, I’m a Nintendo geek who loves traveling, cooking, board games, and raising my plant succulent Frederick!</h1>
        </div>

        <div className="contactDescription">
          <img className="contact" src={contact} alt="chopper"></img>
          <ul className="contact-links">
            <f><a href="mailto:ethantam9@gmail.com"><img className="contactLogo" src={MailLogo} alt="Email"></img></a></f>
            <f><a href="https://github.com/etam1"><img className="contactLogo" src={GithubLogo} alt="GitHub"></img></a></f>
            <f><a href="https://www.linkedin.com/in/ethan-tam-0420791a6/"><img className="contactLogo" src={LinkedInLogo} alt="LinkedIn"></img></a></f>
          </ul>
        </div>

        <p className="lastLine">
          coded with &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; by ethan tam
        </p> 

    </div>
  );
}

export default home;