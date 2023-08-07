import './art.css';
import artHeader from "/Users/ethantam/Desktop/etweb/src/assets/artHeader.png";
import ArtExperience from '/Users/ethantam/Desktop/etweb/src/components/art/artExperience.js';
import ArtExperienceVideo from '/Users/ethantam/Desktop/etweb/src/components/art/artExperienceVideo.js';
import EtsyPic from "/Users/ethantam/Desktop/etweb/src/assets/Etsy.png";
import IITBridgePic from "/Users/ethantam/Desktop/etweb/src/assets/IITBridgePic.png";


function art() {
    return (
      <div className="art">
        <div className="artHeaderDescription">
          <img className="artHeader" src={artHeader} alt="chopper"></img>
          <ArtExperience name="Etsy" time="2020 - 2022" title="Producer/Manager" image={EtsyPic}  text="My Etsy shop is the result of months of fundraising and hard work, where I conceptualize product ideas and execute the design. Every product is carefully prepared for the shop through photography, cost analysis, and online listing to ensure that each piece is unique and of the highest quality. As someone who feels strongly about the social climate, I donate 20% of my profits to nonprofit organizations that align with the themes of my stickers. With a focus on quality and timely shipping, I meticulously organize, package, and ship orders for customers to ensure the best possible shopping experience. "/>
          <ArtExperienceVideo name="Shooting Snail Animation" time="2023" title="Project Manager"  text="UCBugg is an introductory animation course offered at UC Berkeley that provides students with the opportunity to develop their skills in animation software and techniques while learning about the animation industry. As the project manager in my group, we created a captivating animated short about a snail who strives to become a star. Throughout the course, we explored various animation techniques and software, and were able to apply our newfound skills to create a visually stunning and engaging animated story."/>
          <ArtExperience name="IIT Bridge Building" time="2018-2020" image={IITBridgePic} text="From an early age, growing up in a family passionate about construction, I've been deeply fascinated by the intricate designs of buildings and architecture. The IIT Bridge Building contest offered a rare chance to merge my creative talents in design with my family's expertise in efficient structures, providing a profound insight into the artistic nature that underpins construction, and a deeper understanding of my father and brother's work."/>
        </div>
      </div>
    );
  }
  
  export default art;