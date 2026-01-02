import './cmuPortfolio.css';
import ArtExperience from '../art/artExperience.js';
import ArtExperienceVideo from '../art/artExperienceVideo.js';
import ArtExperiencePortfolio from '../art/artExperiencePortfolio.js';
import ShootingSnailCover from "../../assets/ShootingSnailCover.png";
import alienShowCover from "../../assets/alienShowCover.png";
import ohloneAcornCover from "../../assets/ohloneAcornCover.png";
import SmokePic from "../../assets/SmokePic.png";
import DemoCover from "../../assets/DemoCover.png";
import CalhacksCover from "../../assets/CalhacksCover.png";
import CalHacksLanyard from "../../assets/CalHacksLanyard.png";
import Layard from "../../assets/Layard.png";
import CalhacksSticker from "../../assets/CalhacksSticker.png";
import instaposts from "../../assets/instaposts.png";
import clouds from "../../assets/Experiences_Clouds.png";
import downButton from "../../assets/Experience_ArrowDown.png";

function CmuPortfolio() {
  return (
    <div className="cmuPortfolio">
      <div className="cmuHeaderWrap">
        <div className="cmuHeader">CMU PORTFOLIO</div>
        <img src={clouds} alt="Clouds" className="clouds-img" />
        <img
          src={downButton}
          className="experience-down-button"
          alt="Scroll Down"
          onClick={() => {
              window.scrollBy({
                top: window.innerHeight * 0.8,
                left: 0,
                behavior: 'smooth',
              });
          }}
        />
      </div>

      <div className="cmuHeaderDescription">
        <ArtExperiencePortfolio 
          name="Cal Hacks 11.0"
          time="2024"
          image={CalhacksCover}
          subtitle="Visual Identity, Event Marketing"
          introText="Concept designs for all visual assets used during the 11th rendition of the world's largest collegiate hackathon with over 3,200+ attendees"
          duration="February 2025 - October 2025"
          role="Design Lead"
          tools="Illustrator, Photoshop, Figma"
          team="Rachael Chen, Elisa Kong, Mihir Putcha, Jin Lee"
          quote="Cal Hacks is the world's largest collegiate hackathon. Thousands of students. One giant room. 36 hours to build something amazing."
          leftParagraph1="As the Lead of Design, I was responsible for overseeing the entire design process from conception to execution. I shaped the event's visual identity, guiding the creation of assets at every stage, from brainstorming to production."
          leftParagraph2="My scope of work included producing a variety of visual elements, such as the event website, social media graphics, digital and physical signage, merchandise, attendee badges, and more."
          rightParagraph1="Key challenges included meaningfully incorporating existing design trends (gradients, pixels, geometric shapes) while maintaining consistency with the existing brand identity and creating a visual language that appealed to both young, aspiring hackers and corporate sponsors."
          rightParagraph2="Overall, our goal was to present a welcoming, beginner-friendly, and inclusive image while fostering an environment of innovation, social good, and collaboration."
          additionalImage={CalHacksLanyard}
          additionalImageCaption="lanyard"
          secondImage={Layard}
          secondImageCaption="lanyard card"
          thirdImage={CalhacksSticker}
          thirdImageCaption="sticker"
          fourthImage={instaposts}
          fourthImageCaption="instagram promotional posts"
        />
        <ArtExperienceVideo name="Joan Savvy's First Day on Earth" time="2025" image={DemoCover} text="An animated short film following Joan Savvy on her first day on Earth." video="https://www.youtube.com/embed/2TCr-e-rHlY?si=2NmPwKhBoxi3ySr6"/>
        <ArtExperience name="AI Art History" time="2025" image={DemoCover} text="Exploring the intersection of artificial intelligence and art history through interactive digital experiences." />
        <ArtExperience name="Ohlone Acorn Gathering" time="2025" image={ohloneAcornCover} text="Designed and implemented an interactive projection-mapping experience for BAMPFA that spans both a wall and floor. Prototyped the interactions using p5.js and deployed the final exhibit with Dataton WATCHOUT. Visitors collect falling acorns by tapping them on the floor projection, filling a virtual granary while animals react with movement and sound, teaching sustainable gathering practices and celebrating Ohlone culture." />
        <ArtExperienceVideo name="Shooting Snail" time="2024" image={ShootingSnailCover} text="UCBugg is an introductory animation course offered at UC Berkeley that provides students with the opportunity to develop their skills in animation software and techniques while learning about the animation industry. As the project manager in my group, we created a captivating animated short about a snail who strives to become a star. Throughout the course, we explored various animation techniques and software, and were able to apply our newfound skills to create a visually stunning and engaging animated story." video="https://www.youtube.com/embed/deqK3hyqebQ"/>
        <ArtExperienceVideo name="Alien Show" time="2024" image={alienShowCover} text="Designed and created a projection mapping project that is about a human? Or is it an alien? Watching… tv? Prototyped the experience using Luma Box and delivered the final presentation with MadMapper." video="https://www.youtube.com/embed/C3ivfEVFxe0?si=Y0i0yhV8kmPD2zmt"/>
        <ArtExperience name="Smoke Simulator" time="2024" image={SmokePic} text="We built a 3D smoke simulator using an Eulerian grid-based approach to model realistic fluid dynamics, following the Navier-Stokes equations. The project involves steps for diffusion, advection, and projection to conserve mass and simulate fluid motion, with OpenMP used to enhance speed. We expanded a cloth simulation framework to 3D, which presented unique challenges but taught us valuable skills in adapting physics-based systems to complex dimensions. The project was implemented in C++." />
        <ArtExperience name="VR + Art + Body Awareness" time="2024" image={DemoCover} text="An immersive virtual reality experience exploring the relationship between art, body awareness, and spatial perception through interactive digital environments." />
      </div>
    </div>
  );
}

export default CmuPortfolio;

