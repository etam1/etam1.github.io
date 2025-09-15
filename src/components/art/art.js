import './art.css';
import ArtExperience from './artExperience.js';
import ArtExperienceVideo from './artExperienceVideo.js';
import ArtExperienceWithLink from './artExperienceWithLink.js';
import ArtExperienceVideoWithLink from './artExperienceVideoWithLink.js';
import EtsyPic from "../../assets/Etsy.png";
import Kodama from "../../assets/ProjectionMapping.png";
import Bubbles from "../../assets/Bubbles1.png";
import Star from "../../assets/Star.png";
import clouds from "../../assets/Experiences_Clouds.png";
import downButton from "../../assets/Experience_ArrowDown.png"; 
import BrokenHeartAlgorithmCover from "../../assets/BrokenHeartAlgorithmCover.png";
import ShootingSnailCover from "../../assets/ShootingSnailCover.png";
import HappyPickleCover from "../../assets/HappyPickleCover.png";
import DemoCover from "../../assets/DemoCover.png";
import BampfaWaterStamp from "../../assets/bampfaImage.jpg";
import AlienShowCover from "../../assets/alienShowCover.png";
import TheReplacementCover from "../../assets/theReplacementCover.png";
import binaryButtonCover from "../../assets/binaryButtonCover.png";
import myHouseCover from "../../assets/myHouse.png";
import smileCover from "../../assets/smileCover.png";
import shmImage from "../../assets/shmImage.png";
import escapeRoom from "../../assets/escapeRoom.png";
import ohloneAcornCover from "../../assets/ohloneAcornCover.png";
import liveAtChinatown from "../../assets/liveAtChinatownImage.png";

function art() {

    return (
      <div className="art">

        <div className="artHeaderWrap">
          <div className="artHeader">ART</div>
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

        <div className="artHeaderDescription">
          <ArtExperience name="Ohlone Acorn Gathering Exhibit" time="2025" image={ohloneAcornCover} text="Designed and implemented an interactive projection-mapping experience for BAMPFA that spans both a wall and floor. Prototyped the interactions using p5.js and deployed the final exhibit with Dataton WATCHOUT. Visitors collect falling acorns by tapping them on the floor projection, filling a virtual granary while animals react with movement and sound, teaching sustainable gathering practices and celebrating Ohlone culture." />
          <ArtExperienceVideo name="🙂" time="2025" image={smileCover} text="A smiling stamp. Smiles made possible using Arduino, C++, and crafting :)" video="https://www.youtube.com/embed/rNllduvvl28?si=7bstnkG1TT8rxuP_"/>
          <ArtExperienceVideoWithLink name="my house" time="2025" image={myHouseCover} text="Designed and created a projection mapping project with the purpose of decorating your miniature house for the perfect occasion. Do you want a gingerbread house? Or a haunted one? Maybe a doll house? Developed the interactive, customizable display using Luma Box and p5.js." video="https://www.youtube.com/embed/qrA6FyvRLtw?si=eRdh3zuiq_4Cf0G_" link="http://editor.p5js.org/etam1/sketches/IKCvh6jKw"/>
          <ArtExperienceVideo name="Binary Button" time="2025" image={binaryButtonCover} text="Engineered a compact fidget clicker that counts in binary with each press. Built using Arduino, C++, circuitry, and counting to bring it to life." video="https://www.youtube.com/embed/s-DzmXTR7JE?si=5Nq1-LVyeLsQGrY4"/>
          <ArtExperienceVideo name="The Replacement" time="2025" image={TheReplacementCover} text="Wrote and produced an original short film about my twin? Created visuals in Illustrator and brought the story to life using Premiere Pro and After Effects." video="https://www.youtube.com/embed/bnyFYbi3RsI?si=PM6fATD8KJnki_h"/>
          <ArtExperienceVideo name="Bampfa Water Stamp" time="2025" image={BampfaWaterStamp} text="In Spring 2025, I created an advertisement for the Berkeley Art Museum and Pacific Film Archive (BAMPFA). The piece highlights the museum's stamp-making section, where visitors carve their own stamps and press them onto a communal wall. I produced the project using Blender, Maya, and Premiere Pro to bring the experience to life." video="https://www.youtube.com/embed/AuRxLpHrW_Q?si=ZM2IpzcOEYt0tog1"/>
          <ArtExperienceVideo name="Demo Reel / Portfolio" time="2025" image={DemoCover} text="A demo reel of my best work for far!" video="https://www.youtube.com/embed/NwFRVDcApRA?si=lLuu6PBRLou0d5Nd"/>
          <ArtExperience name="Special Thanks" time="2024" image={shmImage} text="Merry Christmas and Thank You for your mentorship Shm!" />
          <ArtExperienceWithLink name="Escape Room" time="2024" image={escapeRoom} text="Built a crazy hard escape room game in p5.js just for fun! Designed the visuals in Illustrator and Procreate, and used JavaScript to bring it to life." link="https://editor.p5js.org/etam1/sketches/ixS7dQO_u" />
          <ArtExperienceWithLink name="Pikachu Face Mapping" time="2024" image={Kodama}  text="For this project, I implemented a real-time face tracker using clmtrackr and p5.js to bring Pikachu to life. By capturing a live webcam feed and tracking facial landmarks like the eyes and mouth, Pikachu reacts playfully to user movements. This setup dynamically aligns Pikachu's features, creating an interactive experience that highlights its charm and energy, making users feel more connected to the character in a fun, engaging way." link="https://editor.p5js.org/etam1/sketches/GGh6VUG3c" />
          <ArtExperienceWithLink name="Bubbles!" time="2024" image={Bubbles}  text="In this project, I used JavaScript and p5.js to create an interactive, immersive display of floating bubbles. Each bubble moves fluidly with gentle, noise-based drifting, bouncing off the canvas edges, and users can click and drag them around for a dynamic experience. The bubbles subtly change in size, adding to their lifelike motion, while layered, semi-transparent ellipses give each one a soft, glowing effect. Occasionally, new bubbles appear, keeping the display visually engaging and allowing users to feel immersed in a fluid, organic environment." link="https://editor.p5js.org/etam1/sketches/zfDKryQAF" />
          <ArtExperienceVideoWithLink name="Constellation Drawer" time="2024" image={Star}  text="In this project, I used JavaScript and p5.js to create an interactive night sky scene with twinkling stars and user-generated constellations. Users can click on the canvas to place points and draw their own constellations, with each completed set of four points saved as a unique constellation with a 3D Bezier Curve. The combination of twinkling stars, a dynamic background, and interactive constellation drawing makes for an engaging and immersive stargazing experience." video="https://www.youtube.com/embed/UVYjqKKEMa4?si=Hxnjs_cXmhAyA9A8" link="https://editor.p5js.org/etam1/sketches/GGh6VUG3c" />
          
          <ArtExperienceVideo name="Alien Show" time="2024" image={AlienShowCover} text="Designed and created a projection mapping project that is about a human? Or is it an alien? Watching… tv? Prototyped the experience using Luma Box and delivered the final presentation with MadMapper." video="https://www.youtube.com/embed/C3ivfEVFxe0?si=Y0i0yhV8kmPD2zmt"/>
          <ArtExperienceVideo name="Broken Heart Algorithm" time="2024" image={BrokenHeartAlgorithmCover} text="Created an animated short for the 2024 24-Hour Animation Challenge, exploring the theme of AI (good or bad). For the project, we used Maya for modeling, Blender for shading and animation, After Effects for compositing, and Premiere Pro for editing and adding visual effects." video="https://www.youtube.com/embed/0zljpSqJgHc?si=L5TI2EHVvSTTPqS9"/>
          <ArtExperienceVideo name="Shooting Snail Animation" time="2023" image={ShootingSnailCover} text="UCBugg is an introductory animation course offered at UC Berkeley that provides students with the opportunity to develop their skills in animation software and techniques while learning about the animation industry. As the project manager in my group, we created a captivating animated short about a snail who strives to become a star. Throughout the course, we explored various animation techniques and software, and were able to apply our newfound skills to create a visually stunning and engaging animated story." video="https://www.youtube.com/embed/deqK3hyqebQ"/>
          <ArtExperienceVideo name="Happy Pickle Animation Trailer" time="2023" image={HappyPickleCover} text="UCBugg advanced animation course offered at UC Berkeley. In this project, I'm working with a team to create a short about a pickle who works a 9 to 5 but with a tragic twist. I worked mainly on the set production, modeling, animating, and shading. Full short coming soon!" video="https://www.youtube.com/embed/DSgmxClFaQM?si=ozyC7RfRLgj95rLp"/>
          <ArtExperience name="Live at Chinatown Music Festival" time="2021" image={liveAtChinatown} text="Designed three distinct visual themes for a client hosting Chicago's Chinatown Music Festival. Developed the designs using Procreate and Canva to capture the festival's cultural and musical spirit." />
          <ArtExperience name="Etsy" time="2020 - 2022" image={EtsyPic}  text="My Etsy shop is the result of months of fundraising and hard work, where I conceptualize product ideas and execute the design. Every product is carefully prepared for the shop through photography, cost analysis, and online listing to ensure that each piece is unique and of the highest quality. As someone who feels strongly about the social climate, I donate 20% of my profits to nonprofit organizations that align with the themes of my stickers. With a focus on quality and timely shipping, I meticulously organize, package, and ship orders for customers to ensure the best possible shopping experience. " />
          </div>
      </div>
    );
  }
  
  export default art;