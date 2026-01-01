import React, { useState, useEffect } from 'react';
import './home.css';
import welcome from "../../assets/Welcome.png";
import art from "../../assets/Art.png";
import cs from "../../assets/Computer Science.png";
// import contact from "../../assets/Contact.png";
// import LinkedInLogo from "../../assets/LinkedInLogo.png";
// import GithubLogo from "../../assets/GithubLogo.png";
// import MailLogo from "../../assets/MailLogo.png";
import LeafBack from "../../assets/LEAF_BACKGROUND.png";
import FallBack from "../../assets/FALL_BACKGROUND.png";
import Bridge from "../../assets/BRIDGE.png";
import GreekBack from "../../assets/GREEK_BACKGROUND.png";
import WoodBack from "../../assets/WOOD_BACKGROUND.png";
import wood from "../../assets/Interest.png";
import heartAndStamina from "../../assets/StaminaAndHeart.png";
import lastUpdateData from "../../last-update.json";

function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [csTitleVisible, setCsTitleVisible] = useState(false);
  const [greekBackVisible, setGreekBackVisible] = useState(false);
  const [artTitleVisible, setArtTitleVisible] = useState(false);
  const [woodTitleVisible, setWoodTitleVisible] = useState(false);
  const [woodBackVisible, setWoodBackVisible] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top of the page on load

    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 100); // Delay to trigger the fade-in effect

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const csTitle = document.querySelector('.csTitle');
      const greekBack = document.querySelector('.GreekBack');
      const artTitle = document.querySelector('.artTitle');
      const woodTitle = document.querySelector('.woodTitle');
      const woodBack = document.querySelector('.woodBack');
      const windowHeight = window.innerHeight;

      if (csTitle) {
        const csTitleTop = csTitle.getBoundingClientRect().top;
        if (csTitleTop < windowHeight) {
          setCsTitleVisible(true);
        }
      }

      if (greekBack) {
        const greekBackTop = greekBack.getBoundingClientRect().top;
        if (greekBackTop < windowHeight) {
          setGreekBackVisible(true);
        }
      }

      if (artTitle) {
        const artTitleTop = artTitle.getBoundingClientRect().top;
        if (artTitleTop < windowHeight) {
          setArtTitleVisible(true);
        }
      }

      if (woodBack) {
        const woodBackTop = woodBack.getBoundingClientRect().top;
        if (woodBackTop < windowHeight) {
          setWoodBackVisible(true);
        }
      }

      if (woodTitle) {
        const woodTitleTop = woodTitle.getBoundingClientRect().top;
        if (woodTitleTop < windowHeight) {
          setWoodTitleVisible(true);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="home">
      <div className="topDivision">
        <div className="welcomeDescription">
          <img
            className={`welcome fade-in ${isVisible ? 'visible' : ''}`}
            src={welcome}
            alt="Welcome"
          />
          <img
            className={`FallBack ${isVisible ? 'slide-in-left fade-in visible' : ''}`}
            src={FallBack}
            alt="Fall Back"
          />
          <img
            className={`Bridge fade-in slide-in-top ${isVisible ? 'visible' : ''}`}
            src={Bridge}
            alt="Bridge"
          />
          <img
            className={`LeafBack ${isVisible ? 'slide-in-right fade-in visible' : ''}`}
            src={LeafBack}
            alt="Leaf Back"
          />
        </div>
      </div>

      <div className="csDescription">
        <img className={`csTitle fade-in ${csTitleVisible ? 'visible' : ''}`} src={cs} alt="Computer Science" />
        <h1 className={`fade-in ${csTitleVisible ? 'visible' : ''}`}>
        I am a UC Berkeley student pursuing a Bachelors of Arts in Computer Science and a Bachelors of Arts in Film & Media. Since engaging in technology at an early age, I was inspired to explore the branches of computer science. My interests include human computer interaction, machine learning, AI, computer graphics & animation, AR/VR, and many more of the interdisciplinary applications of CS.
        </h1>
      </div>

      <div className="artDescription">
        <img className={`GreekBack ${greekBackVisible ? 'slide-in-left fade-in visible' : ''}`} src={GreekBack} alt="Greek Back" />
        <img className={`artTitle fade-in ${artTitleVisible ? 'visible' : ''}`} src={art} alt="Art" />
        <p className={`artDescriptionText fade-in ${artTitleVisible ? 'visible' : ''}`} >
        Since childhood, art has both fascinated me with its diverse mediums and acted as a source of comfort. Most of my inspirations are drawn from the animated films and shows I grew up with. Today, I’m interested in exploring the intersections between Creativity and Tech.
        </p>
      </div>

      <div className="interestDescription">
        <img className={`woodBack ${woodBackVisible ? 'slide-in-right fade-in visible' : ''}`} src={WoodBack} alt="Wood Back" />
        <img className={`woodTitle fade-in ${woodTitleVisible ? 'visible' : ''}`} src={wood} alt="wood" />
        <h1 className={`fade-in ${woodTitleVisible ? 'visible' : ''}`}>
        In my free time, I love creating art, bullet journaling, jamming out to music, going to my local theatre, and following award season. Outside of the arts, I’m a Nintendo geek who loves traveling, cooking, board games, and being a father to my plant succulent Frederick!
        </h1>
      </div>

      {/* <div className="contactDescription">
        <img className="contact" src={contact} alt="chopper" />
        <ul className="contact-links">
          <li><a href="mailto:ethantam9@gmail.com"><img className="contactLogo" src={MailLogo} alt="Email" /></a></li>
          <li><a href="https://github.com/etam1"><img className="contactLogo" src={GithubLogo} alt="GitHub" /></a></li>
          <li><a href="https://www.linkedin.com/in/ethan-tam-0420791a6/"><img className="contactLogo" src={LinkedInLogo} alt="LinkedIn" /></a></li>
        </ul>
      </div> */}

      <p className="lastLine">
        <img className="heartAndStamina" src={heartAndStamina} alt="chopper" />
        coded with &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; by ethan tam
        <br />
        <span className="lastUpdated">( last updated : {lastUpdateData.lastUpdated} )</span>
      </p>
    </div>
  );
}

export default Home;