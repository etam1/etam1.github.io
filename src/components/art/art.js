import './art.css';
import ArtExperience from './artExperience.js';
import ArtExperienceVideo from './artExperienceVideo.js';
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
          <ArtExperienceVideo name="Demo Reel / Portfolio" time="2025" image={DemoCover} text="A demo reel of my best work for far!" video="https://www.youtube.com/embed/NwFRVDcApRA?si=lLuu6PBRLou0d5Nd"/>
          <ArtExperience name="Kodama Face Mapping" time="2024" image={Kodama}  text="For this project, I implemented a real-time face tracker using clmtrackr and p5.js to bring Kodama, a character that conveys deep emotions without facial expressions, to life. By capturing a live webcam feed and tracking facial landmarks like the eyes and mouth, Kodama subtly responds to user movements. This setup dynamically aligns Kodama’s features, inviting viewers to interpret its emotions and reflect on the importance of inner feeling, adding a layer of mystery and emotional depth central to my art style." />
          <ArtExperience name="Bubbles!" time="2024" image={Bubbles}  text="In this project, I used JavaScript and p5.js to create an interactive, immersive display of floating bubbles. Each bubble moves fluidly with gentle, noise-based drifting, bouncing off the canvas edges, and users can click and drag them around for a dynamic experience. The bubbles subtly change in size, adding to their lifelike motion, while layered, semi-transparent ellipses give each one a soft, glowing effect. Occasionally, new bubbles appear, keeping the display visually engaging and allowing users to feel immersed in a fluid, organic environment." />
          <ArtExperience name="Constellation Drawer" time="2024" image={Star}  text="In this project, I used JavaScript and p5.js to create an interactive night sky scene with twinkling stars and user-generated constellations. Users can click on the canvas to place points and draw their own constellations, with each completed set of four points saved as a unique constellation with a 3D Bezier Curve. The combination of twinkling stars, a dynamic background, and interactive constellation drawing makes for an engaging and immersive stargazing experience." />
          
          <ArtExperienceVideo name="Broken Heart Algorithm" time="2024" image={BrokenHeartAlgorithmCover} text="Created an animated short for the 2024 24-Hour Animation Challenge, exploring the theme of AI (good or bad). For the project, we used Maya for modeling, Blender for shading and animation, After Effects for compositing, and Premiere Pro for editing and adding visual effects." video="https://www.youtube.com/embed/0zljpSqJgHc?si=L5TI2EHVvSTTPqS9"/>
          <ArtExperienceVideo name="Shooting Snail Animation" time="2023" image={ShootingSnailCover} text="UCBugg is an introductory animation course offered at UC Berkeley that provides students with the opportunity to develop their skills in animation software and techniques while learning about the animation industry. As the project manager in my group, we created a captivating animated short about a snail who strives to become a star. Throughout the course, we explored various animation techniques and software, and were able to apply our newfound skills to create a visually stunning and engaging animated story." video="https://www.youtube.com/embed/deqK3hyqebQ"/>
          <ArtExperienceVideo name="Happy Pickle Animation Trailer" time="2023" image={HappyPickleCover} text="UCBugg advanced animation course offered at UC Berkeley. In this project, I'm working with a team to create a short about a pickle who works a 9 to 5 but with a tragic twist. I worked mainly on the set production, modeling, animating, and shading. Full short coming soon!" video="https://www.youtube.com/embed/DSgmxClFaQM?si=ozyC7RfRLgj95rLp"/>
          <ArtExperience name="Etsy" time="2020 - 2022" image={EtsyPic}  text="My Etsy shop is the result of months of fundraising and hard work, where I conceptualize product ideas and execute the design. Every product is carefully prepared for the shop through photography, cost analysis, and online listing to ensure that each piece is unique and of the highest quality. As someone who feels strongly about the social climate, I donate 20% of my profits to nonprofit organizations that align with the themes of my stickers. With a focus on quality and timely shipping, I meticulously organize, package, and ship orders for customers to ensure the best possible shopping experience. " />
          </div>
      </div>
    );
  }
  
  export default art;