import { useState, useRef } from 'react';
import './art.css';
import ArtExperience from './artExperience.js';
import ArtExperienceVideo from './artExperienceVideo.js';
import ArtExperienceWithLink from './artExperienceWithLink.js';
import ArtExperienceVideoWithLink from './artExperienceVideoWithLink.js';
import EtsyPic from "../../assets/Etsy.png";
import Kodama from "../../assets/ProjectionMapping.png";
import Bubbles from "../../assets/Bubbles1.png";
import Star from "../../assets/Star.png";
import downButton from "../../assets/Experience_ArrowDown.png";
import DemoCover from "../../assets/DemoCover.png";
import BampfaWaterStamp from "../../assets/bampfaImage.jpg";
import AlienShowCover from "../../assets/alienShowCover.png";
import binaryButtonCover from "../../assets/binaryButtonCover.png";
import myHouseCover from "../../assets/myHouse.png";
import smileCover from "../../assets/smileCover.png";
import shmImage from "../../assets/shmImage.png";
import escapeRoom from "../../assets/escapeRoom.png";
import ohloneAcornCover from "../../assets/ohloneAcornCover.png";
import artMuseum from "../../assets/artMuseum.png";

const PROJECTS_PER_PAGE = 4;

const projects = [
  {
    type: 'experience',
    name: "Ohlone Acorn Gathering Exhibit",
    time: "2025",
    image: ohloneAcornCover,
    text: "Designed and implemented an interactive projection-mapping experience for BAMPFA that spans both a wall and floor. Prototyped the interactions using p5.js and deployed the final exhibit with Dataton WATCHOUT. Visitors collect falling acorns by tapping them on the floor projection, filling a virtual granary while animals react with movement and sound, teaching sustainable gathering practices and celebrating Ohlone culture.",
  },
  {
    type: 'video',
    name: "🙂",
    time: "2025",
    image: smileCover,
    text: "A smiling stamp. Smiles made possible using Arduino, C++, and crafting :)",
    video: "https://www.youtube.com/embed/rNllduvvl28?si=7bstnkG1TT8rxuP_",
  },
  {
    type: 'videoLink',
    name: "my house",
    time: "2025",
    image: myHouseCover,
    text: "Designed and created a projection mapping project with the purpose of decorating your miniature house for the perfect occasion. Do you want a gingerbread house? Or a haunted one? Maybe a doll house? Developed the interactive, customizable display using Luma Box and p5.js.",
    video: "https://www.youtube.com/embed/qrA6FyvRLtw?si=eRdh3zuiq_4Cf0G_",
    link: "http://editor.p5js.org/etam1/sketches/IKCvh6jKw",
  },
  {
    type: 'video',
    name: "Binary Button",
    time: "2025",
    image: binaryButtonCover,
    text: "Engineered a compact fidget clicker that counts in binary with each press. Built using Arduino, C++, circuitry, and counting to bring it to life.",
    video: "https://www.youtube.com/embed/s-DzmXTR7JE?si=5Nq1-LVyeLsQGrY4",
  },
  {
    type: 'video',
    name: "Bampfa Water Stamp",
    time: "2025",
    image: BampfaWaterStamp,
    text: "In Spring 2025, I created an advertisement for the Berkeley Art Museum and Pacific Film Archive (BAMPFA). The piece highlights the museum's stamp-making section, where visitors carve their own stamps and press them onto a communal wall. I produced the project using Blender, Maya, and Premiere Pro to bring the experience to life.",
    video: "https://www.youtube.com/embed/AuRxLpHrW_Q?si=ZM2IpzcOEYt0tog1",
  },
  {
    type: 'video',
    name: "Demo Reel / Portfolio",
    time: "2025",
    image: DemoCover,
    text: "A demo reel of my best work for far!",
    video: "https://www.youtube.com/embed/NwFRVDcApRA?si=lLuu6PBRLou0d5Nd",
  },
  {
    type: 'experience',
    name: "Special Thanks",
    time: "2024",
    image: shmImage,
    text: "Merry Christmas and Thank You for your mentorship Shm!",
  },
  {
    type: 'link',
    name: "Escape Room",
    time: "2024",
    image: escapeRoom,
    text: "Built a crazy hard escape room game in p5.js just for fun! Designed the visuals in Illustrator and Procreate, and used JavaScript to bring it to life.",
    link: "https://editor.p5js.org/etam1/sketches/ixS7dQO_u",
  },
  {
    type: 'link',
    name: "Pikachu Face Mapping",
    time: "2024",
    image: Kodama,
    text: "For this project, I implemented a real-time face tracker using clmtrackr and p5.js to bring Pikachu to life. By capturing a live webcam feed and tracking facial landmarks like the eyes and mouth, Pikachu reacts playfully to user movements. This setup dynamically aligns Pikachu's features, creating an interactive experience that highlights its charm and energy, making users feel more connected to the character in a fun, engaging way.",
    link: "https://editor.p5js.org/etam1/sketches/GGh6VUG3c",
  },
  {
    type: 'link',
    name: "Bubbles!",
    time: "2024",
    image: Bubbles,
    text: "In this project, I used JavaScript and p5.js to create an interactive, immersive display of floating bubbles. Each bubble moves fluidly with gentle, noise-based drifting, bouncing off the canvas edges, and users can click and drag them around for a dynamic experience. The bubbles subtly change in size, adding to their lifelike motion, while layered, semi-transparent ellipses give each one a soft, glowing effect. Occasionally, new bubbles appear, keeping the display visually engaging and allowing users to feel immersed in a fluid, organic environment.",
    link: "https://editor.p5js.org/etam1/sketches/zfDKryQAF",
  },
  {
    type: 'videoLink',
    name: "Constellation Drawer",
    time: "2024",
    image: Star,
    text: "In this project, I used JavaScript and p5.js to create an interactive night sky scene with twinkling stars and user-generated constellations. Users can click on the canvas to place points and draw their own constellations, with each completed set of four points saved as a unique constellation with a 3D Bezier Curve. The combination of twinkling stars, a dynamic background, and interactive constellation drawing makes for an engaging and immersive stargazing experience.",
    video: "https://www.youtube.com/embed/UVYjqKKEMa4?si=Hxnjs_cXmhAyA9A8",
    link: "https://editor.p5js.org/etam1/sketches/GGh6VUG3c",
  },
  {
    type: 'video',
    name: "Alien Show",
    time: "2024",
    image: AlienShowCover,
    text: "Designed and created a projection mapping project that is about a human? Or is it an alien? Watching… tv? Prototyped the experience using Luma Box.",
    video: "https://www.youtube.com/embed/C3ivfEVFxe0?si=Y0i0yhV8kmPD2zmt",
  },
  {
    type: 'experience',
    name: "Etsy",
    time: "2020 - 2022",
    image: EtsyPic,
    text: "My Etsy shop is the result of months of fundraising and hard work, where I conceptualize product ideas and execute the design. Every product is carefully prepared for the shop through photography, cost analysis, and online listing to ensure that each piece is unique and of the highest quality. As someone who feels strongly about the social climate, I donate 20% of my profits to nonprofit organizations that align with the themes of my stickers. With a focus on quality and timely shipping, I meticulously organize, package, and ship orders for customers to ensure the best possible shopping experience.",
  },
];

function renderProject(project) {
  const commonProps = {
    key: project.name,
    name: project.name,
    time: project.time,
    image: project.image,
    text: project.text,
  };

  switch (project.type) {
    case 'video':
      return <ArtExperienceVideo {...commonProps} video={project.video} />;
    case 'link':
      return <ArtExperienceWithLink {...commonProps} link={project.link} />;
    case 'videoLink':
      return (
        <ArtExperienceVideoWithLink
          {...commonProps}
          video={project.video}
          link={project.link}
        />
      );
    default:
      return <ArtExperience {...commonProps} />;
  }
}

function Art() {
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const [page, setPage] = useState(0);
  const contentRef = useRef(null);

  const visibleProjects = projects.slice(
    page * PROJECTS_PER_PAGE,
    page * PROJECTS_PER_PAGE + PROJECTS_PER_PAGE
  );

  const goToPreviousPage = () => {
    setPage((currentPage) => (currentPage === 0 ? totalPages - 1 : currentPage - 1));
  };

  const goToNextPage = () => {
    setPage((currentPage) => (currentPage === totalPages - 1 ? 0 : currentPage + 1));
  };

  const scrollDown = () => {
    if (window.matchMedia('(max-width: 900px)').matches) {
      contentRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      return;
    }

    window.scrollBy({
      top: window.innerHeight,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="art">
      <div className="artHeaderWrap">
        <div className="artHeaderContent">
          <div className="artHeaderLeft">
            <div className="artHeader">ART MUSEUM</div>
            <img
              src={downButton}
              className="art-down-button"
              alt="Scroll Down"
              onClick={scrollDown}
            />
          </div>
          <div className="art-museum-slot" aria-hidden="true" />
        </div>
      </div>

      <div className="artContentSection" ref={contentRef}>
        <img src={artMuseum} alt="Art museum" className="art-museum-img" />

        <div className="artProjectsSection">
          <img
            src={downButton}
            className="art-projects-arrow art-projects-arrow-left"
            alt="Previous projects"
            onClick={goToPreviousPage}
          />
          <div className="artProjectsContent">
            <div className="artHeaderDescription" key={page}>
              {visibleProjects.map((project) => renderProject(project))}
            </div>
            <div className="art-page-dots">
              {Array.from({ length: totalPages }, (_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`art-page-dot${index === page ? ' art-page-dot-active' : ''}`}
                  aria-label={`Go to project page ${index + 1}`}
                  aria-current={index === page ? 'true' : undefined}
                  onClick={() => setPage(index)}
                />
              ))}
            </div>
          </div>
          <img
            src={downButton}
            className="art-projects-arrow art-projects-arrow-right"
            alt="Next projects"
            onClick={goToNextPage}
          />
        </div>
      </div>
    </div>
  );
}

export default Art;
