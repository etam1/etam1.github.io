import './cmuPortfolio.css';
import ArtExperiencePortfolio from '../art/artExperiencePortfolio.js';
import ShootingSnailCover from "../../assets/ShootingSnailCover.png";
import alienShowCover from "../../assets/alienShowCover.png";
import ohloneAcornCover from "../../assets/ohloneAcornCover.png";
import acorn1 from "../../assets/acorn1.png";
import acorn2 from "../../assets/acorn2.png";
import acorn3 from "../../assets/acorn3.png";
import JoanSaavyCover from "../../assets/JoanSaavyCover.png";
import ferriswheel from "../../assets/ferriswheel.png";
import space from "../../assets/space.png";
import amoeba from "../../assets/amoeba.png";
import calendar from "../../assets/calendar.png";
import mural from "../../assets/mural.png";
import SmokePic from "../../assets/SmokePic.png";
import calhacks12 from "../../assets/calhacks12.png";
import CalHacksLanyard from "../../assets/CalHacksLanyard.png";
import Layard from "../../assets/Layard.png";
import CalhacksSticker from "../../assets/CalhacksSticker.png";
import instaposts from "../../assets/instaposts.png";
import calhacksphotodesign from "../../assets/calhacksphotodesign.png";
import banners from "../../assets/banners.png";
import backdrop from "../../assets/backdrop.png";
import shirt from "../../assets/shirt.png";
import archwindow from "../../assets/archwindow.png";
import Pin from "../../assets/Pin.png";
import Website from "../../assets/Website.png";
import clouds from "../../assets/Experiences_Clouds.png";
import downButton from "../../assets/Experience_ArrowDown.png";
import outsideofthebox from "../../assets/outsideofthebox.png";
import vrArtBody from "../../assets/vr-art-body.png";
import vrFig01 from "../../assets/vr-fig-01.png";
import vrFig02 from "../../assets/vr-fig-02.png";
import vrScenes from "../../assets/vr-scenes.png";
import systemDiagram from "../../assets/System-1.png";

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
          name="Cal Hacks 12.0"
          time="2025"
          image={calhacks12}
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
          additionalImageCaption="lanyard card"
          secondImage={Layard}
          secondImageCaption="lanyard"
          thirdImage={CalhacksSticker}
          thirdImageCaption="sticker"
          fourthImage={instaposts}
          fourthImageCaption="instagram promotional posts"
          fifthImage={calhacksphotodesign}
          fifthImageCaption="photo booth strip"
          sixthImage={banners}
          sixthImageCaption="banners"
          seventhImage={backdrop}
          seventhImageCaption="backdrop"
          eighthImage={shirt}
          eighthImageCaption="shirt"
          ninthImage={archwindow}
          ninthImageCaption="semicircle window sticker"
          tenthImage={Pin}
          tenthImageCaption="pin"
          eleventhImage={Website}
          eleventhImageCaption="website"
          eleventhImageLink="https://www.calhacks.io/"
        />
        <ArtExperiencePortfolio 
          name="Ohlone Acorn Gathering"
          time="2025"
          image={ohloneAcornCover}
          subtitle="Interactive Projection Mapping, Museum Exhibit"
          introText="Designed and implemented an interactive projection-mapping experience for BAMPFA that spans both a wall and floor, teaching sustainable gathering practices and celebrating Ohlone culture."
          duration="March 2025 - October 2025"
          role="New Media Researcher"
          tools="p5.js, Dataton WATCHOUT, Illustrator"
          team="Yangyang Yang"
          quote="Visitors collect falling acorns by tapping them on the floor projection, filling a virtual granary while animals react with movement and sound."
          leftParagraph1="Designed and implemented an interactive projection-mapping experience for BAMPFA that spans both a wall and floor. Prototyped the interactions using p5.js and deployed the final exhibit with Dataton WATCHOUT."
          leftParagraph2="The experience engages visitors through interactive gameplay where they collect falling acorns by tapping them on the floor projection, filling a virtual granary while animals react with movement and sound."
          rightParagraph1="The project teaches sustainable gathering practices and celebrates Ohlone culture through an immersive, educational experience that combines traditional knowledge with modern interactive technology."
          rightParagraph2="The exhibit creates a meaningful connection between visitors and the cultural practices of the Ohlone people, using technology as a bridge to share important stories and traditions."
          additionalImage={acorn1}
          additionalImageCaption=""
          secondImage={acorn2}
          secondImageCaption=""
          thirdImage={acorn3}
          thirdImageCaption=""
        />
        <ArtExperiencePortfolio 
          name="Joan Savvy's First Day on Earth"
          time="2025"
          image={JoanSaavyCover}
          subtitle="Stop Motion Animation"
          introText="A stop motion animated short film about a reincarnated girl trying to find her purpose in life but instead finds friends. Created as part of a collaborative animation team."
          duration="September 2025 - December 2025"
          role="Stop Motion Animator/Designer, Assistant Editor"
          tools="Arts and Crafts, Camera, Dragonframe, Premiere Pro"
          team="Dylan Coty, Samuel Morales, Remy Reyes, Alyssa Park, Kate Anstett"
          quote="Reincarnated Girl who's trying to find her purpose in life but instead finds friends."
          leftParagraph1="Worked as part of the stop motion animation subteam to create an animated short film. Collaborated with team members to bring the story of Joan Savvy to life through frame-by-frame animation techniques. Served as Assistant Editor, handling basic editing between shots and transitions, piecing everything together and incorporating the score."
          leftParagraph2="Utilized a wide variety of arts and crafts materials including clay, fabric, glass, paint, paper, string, and wood to construct characters, sets, and props. Shot individual frames using a camera and assembled the stop motion sequences using Dragonframe software. Used Premiere Pro for editing and post-production work."
          rightParagraph1="The project required meticulous attention to detail, as each frame needed to be carefully positioned and photographed to create smooth animation. The diverse materials allowed for rich textures and visual storytelling."
          rightParagraph2="Through this collaborative process, we created a heartfelt narrative about finding connection and friendship, using the tactile and handcrafted nature of stop motion to enhance the emotional resonance of the story."
          additionalImage={amoeba}
          additionalImageCaption=""
          secondImage={calendar}
          secondImageCaption=""
          thirdImage={mural}
          thirdImageCaption=""
          fourthImage={ferriswheel}
          fourthImageCaption=""
          sixthImage={space}
          sixthImageCaption="images above are the stop motion scenes I helped craft and film"
          video="https://www.youtube.com/embed/2TCr-e-rHlY?si=2NmPwKhBoxi3ySr6"
          videoCaption="Joan Saavy's First Day on Earth Film"
        />
        <ArtExperiencePortfolio 
          name="Outside of the Box"
          time="2025"
          image={outsideofthebox}
          subtitle="24 Hour Animation Challenge"
          introText="Created an animated short film as part of the 24 hour animation challenge with the theme 'Flip Your Perspective!'. The project tells the life of a bunny and how her use of 'the' box ages with her perspective. Our team placed in the top 50."
          duration="October 3-4, 2025"
          role="Director, 2D and 3D Animator"
          tools="Procreate, Autodesk Maya, Premiere Pro, Media Encoder, After Effects"
          team="Stacey Lei, Elaine Shu, Khylie Aviles"
          quote="the life of a bunny and how her use of 'the' box ages with with her perspective"
          leftParagraph1="As Director and 2D/3D Animator, I led my team through the ideation process, helping to develop the concept that would explore the theme 'Flip Your Perspective!' through the story of a bunny and her relationship with a box that changes meaning as she ages."
          leftParagraph2="I was responsible for modeling, rigging, and animating the rabbit character in Autodesk Maya, bringing the 3D character to life. Additionally, I created the 2D animation on top of the 3D model, specifically animating the eyes to add expressive detail and emotional depth to the character."
          video="https://www.youtube.com/embed/c_X0GK8imc0?si=ceVp_GYypspJJN4v"
          videoCaption="Outside of the Box"
        />
        <ArtExperiencePortfolio 
          name="Shooting Snail"
          time="2023"
          image={ShootingSnailCover}
          subtitle="2D Animation"
          introText="Created a captivating animated short about a snail who strives to become a star as part of UCBugg, an introductory animation course at UC Berkeley. As the project manager, I coordinated the team's efforts to bring this story to life."
          duration="January 2023 - May 2023"
          role="Project Manager"
          tools="After Effects, Media Encoder, Maya, Illustrator, Premiere Pro, Procreate"
          team="Khylie Aviles, Guillem Seuba, Francis Basco, Aidan Meyer"
          quote="A snail who strives to become a star."
          leftParagraph1="As project manager, I coordinated the team's efforts throughout the production pipeline, managing timelines and ensuring all elements of the animation came together cohesively. This role involved organizing team members working on various aspects including storyboarding, character design, animation, and post-production."
          leftParagraph2="The final animated short tells the story of a snail's ambitious journey to stardom, combining humor, visual appeal, and technical animation skills. We explored various animation techniques and software including After Effects, Maya, and Illustrator to create smooth character animations, dynamic backgrounds, and polished visual effects."
          video="https://www.youtube.com/embed/deqK3hyqebQ"
          videoCaption="Shooting Snail"
        />
        <ArtExperiencePortfolio 
          name="Alien Show"
          time="2024"
          image={alienShowCover}
          subtitle="Projection Mapping"
          introText="Designed and created a projection mapping project that is about a human? Or is it an alien? Watching… tv? Prototyped the experience using Luma Box and delivered the final presentation."
          duration="August 2024 - December 2024"
          role="Designer, Creator"
          tools="Luma Box, Procreate, Autodesk Maya, Arts and Crafts"
          team="Myself"
          quote="A human? Or is it an alien? Watching… tv?"
          leftParagraph1="Designed and created a projection mapping project that explores the ambiguous nature of identity through visual storytelling. The project questions whether the subject is human or alien, creating an engaging narrative through projection mapping techniques. While the interpretation is open to user discretion, the original meaning explores how people become so hypnotized and engaged with television and news that they become inhuman and trapped."
          leftParagraph2="Built the physical TV using cardboard and arts and crafts materials, creating a tangible surface for the projection. Used Procreate to create the animation that was projected onto the TV screen, bringing the narrative to life through digital animation."
          rightParagraph1="Utilized Autodesk Maya to 3D model the alien/human character, creating the central figure that blurs the line between human and extraterrestrial. The character's eyes were animated using Procreate, adding expressive detail and life to the model."
          rightParagraph2="The final presentation combined digital projection with physical elements, creating an immersive experience that blurs the line between reality and fiction, human and alien, questioning our perceptions of identity and form. The work serves as a commentary on media consumption and its dehumanizing effects."
          video="https://www.youtube.com/embed/C3ivfEVFxe0?si=Y0i0yhV8kmPD2zmt"
          videoCaption="Alien Show"
        />
        <ArtExperiencePortfolio 
          name="3-Dimensional Smoke Simulator"
          time="2024"
          image={SmokePic}
          subtitle="Fluid Dynamics Simulation"
          introText="Implemented diffusion shader, projection, and vorticity code for a 3-dimensional interactive smoke simulator using the Eulerian-based method. Rather than using particle physics, we discretize smoke effects by using a grid that holds the density of a fluid, with another grid to hold a velocity field for interactive simulation."
          duration="January 2024 - May 2024"
          role="Graphics Developer"
          tools="C++, OpenMP, ClothSim Framework"
          team="Michael Huang, Geovanni Mojica, Kyle Wong, Ethan Tam"
          quote="A tool used to create smoke in a 3D environment"
          documentationLink="https://elpescadoperezoso1291.github.io/CS184-Final-Project-Website/final_website/index.html"
        />
        <ArtExperiencePortfolio 
          name="Breathing Flowers: VR + Art + Body Awareness"
          time="2025"
          image={vrArtBody}
          subtitle="Virtual Reality, Biosignal Visualization"
          introText="A biosignal-driven VR system that captures users' heart rate, breathing, and skin conductivity and visualizes these signals through dynamic, real-time scenes. The system helps users gain awareness of their body's involuntary signals through immersive environmental metaphors."
          duration="August 2025 - December 2025"
          role="Developer, Co-Author"
          tools="Unity HDRP, EmotiBit Sensor, C#"
          team="Vivian Chan, Xin Zhou, Stacey Lei"
          quote="Body awareness—the ability to perceive and understand one's own physiological state—has been shown to offer significant benefits for mental health and emotional regulation."
          leftParagraph1="Developed a real-time biosignal-to-environment mapping system in Unity HDRP that translates physiological signals into visual and atmospheric changes in a virtual environment. The system receives data from an EmotiBit wearable sensor, processes and normalizes the signals, and drives three distinct environmental mappings designed to build user awareness of involuntary bodily processes."
          leftParagraph2="Implemented three biosignal mappings: skin conductance controls sunlight and time of day (higher stress corresponds to nighttime), heart rate adjusts cloud coverage (lower heart rate produces clear skies), and breathing rate drives flower blooming (slow breathing maintains buds, deeper breaths result in blooming flowers and butterflies)."
          rightParagraph1="The system features a modular three-stage pipeline architecture: data acquisition (supporting both simulated and real biosignal input), data processing (with automatic calibration and personalized normalization), and environmental mapping. This separation enables independent development and testing while maintaining flexibility."
          rightParagraph2="The work explores how immersive VR environments can support body awareness and mental well-being. The dynamic scenery tied to physiological signals helps users notice and reflect on subtle changes in their body, creating a responsive environment that mirrors the user's physiological state."
          additionalImage={vrFig01}
          additionalImageCaption="Overview of biosignal mapped to the Virtual Reality environment. Heart rate controls sunlight and time of day, skin conductance adjusts cloud coverage, and breathing rate drives flower blooming. The resulting scene reflects the user's state, shown here for (A) active, (B) calm, and (C) stressed conditions."
          secondImage={vrFig02}
          secondImageCaption="Bio-physiological State to Scene Mapping"
          thirdImage={vrScenes}
          thirdImageCaption="(A)Calm state. (B)Rest state. (C)Active state. (D)Stress state."
          fourthImage={systemDiagram}
          fourthImageCaption="System architecture showing the data flow from EmotiBit wearable sensor through the Oscilloscope PC application to Unity's environmental mapping system."
        />
      </div>
    </div>
  );
}

export default CmuPortfolio;

