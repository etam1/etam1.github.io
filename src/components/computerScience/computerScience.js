import './computerScience.css';
import csHeader from "/Users/ethantam/Desktop/etweb/src/assets/CsHeader.png";
import CsExperience from '/Users/ethantam/Desktop/etweb/src/components/computerScience/csExperience.js'
import JonesJamPic from "/Users/ethantam/Desktop/etweb/src/assets/JonesJamPicture.png"
import BYOWPic from "/Users/ethantam/Desktop/etweb/src/assets/BYOWPic.png"
import PersonalWebsitePic from "/Users/ethantam/Desktop/etweb/src/assets/PersonalWebsitePic.png";

function computerScience() {
  return (
    <div className="computerScience">
      <div className="csHeaderDescription">
        <img className="csHeader" src={csHeader} alt="chopper"></img>
        <CsExperience name="Jones Jam" time="2018 - 2022" title="Head Coordinator" image={JonesJamPic} text="Jones Jam, hosted by Jones High School's Computer Science Honor Society (CSHS), is an annual city-wide hackathon promoting and advancing STEM education through the exploration of new technology in a collaborative and inclusive environment. I played a pivotal role in organizing and overseeing the event, which included interactive workshops collaborated with Jones' own STEM clubs, industry panels with computer scientists from various companies, and lots of fun activities. In addition, I manage logistics, including purchasing materials, securing funding, and coordinating volunteers."/>
        <CsExperience name="Personal Website" time="2023" image={PersonalWebsitePic} text="My personal website serves as a dynamic showcase of my passions, accomplishments, and creativity. It functions as a professional portfolio, showcasing my skills and contributions to various fields. I self-taught myself HTML, CSS, JavaScript, and React to build my personal website, where I also designed every image and visual feature."/>
        <CsExperience name="Build Your Own World" time="2023" image={BYOWPic} text="In my Build Your Own World project, I created a game from scratch using Java. I took on the challenge of designing and developing all aspects, including graphics, interaction controls, and world-building. This game offers the unique ability to generate different worlds using various seeds, ensuring a fresh experience with every playthrough. Exploring the expansive map, players will encounter trap rooms that add an element of danger and excitement. To enhance usability, I implemented save, load, new, and quit options, allowing players to conveniently manage their progress."/>
      </div>
    </div>
  );
}

export default computerScience;