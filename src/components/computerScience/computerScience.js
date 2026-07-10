import { useState } from 'react';
import './computerScience.css';
import CsExperience from './csExperience.js';
import CsExperienceWithLink from './csExperienceWithLink.js';
import BYOWPic from "../../assets/BYOWPic.png";
import PersonalWebsitePic from "../../assets/PersonalWebsitePic.png";
import GitletPic from "../../assets/gitlet_Project_Image.jpeg";
import MLDCPic from "../../assets/Machine_Learning_Data_Compression_Project.jpeg";
import Chess_Endgame_Pic from "../../assets/Chess_Endgame_Project.png";
import CPU_Pic from "../../assets/CPU_Project.png";
import Scheme_Interpreter_Pic from "../../assets/Scheme_Interpreter_Pic.png";
import Typing_Pic from "../../assets/Typing_Project.png";
import AntVsBee_Pic from "../../assets/AntBeeProject.png";
import Mesh_Pic from "../../assets/TEAPOT.png";
import Rasterizer_Pic from "../../assets/mascotimage.jpeg";
import PathTracer_Pic from "../../assets/PathTracer.png";
import Cloth_Pic from "../../assets/ClothPic.png";
import Smoke_Pic from "../../assets/SmokePic.png";
import MS1_Pic from "../../assets/MayaScript1.png";
import MS2_Pic from "../../assets/MayaScript2.png";
import downButton from "../../assets/Experience_ArrowDown.png";
import csBasement from "../../assets/csBasement.png";

const PROJECTS_PER_PAGE = 4;

const projects = [
  {
    name: "Randomize Duplicator Maya Script",
    time: "2024",
    image: MS2_Pic,
    text: "Created a Maya tool that duplicates a selected object in a radius with six surrounding copies. The tool allows for flexible placement with options for equal or random distances, unique rotations, and variable heights. A simple UI gives users control over distance and scale, making it easy to add varied, balanced arrangements around the original object, ideal for creating grass and dynamic scene with a lot of repeated background objects.",
  },
  {
    name: "Mirror Maya Script",
    time: "2024",
    image: MS1_Pic,
    text: "Developed a Python-based modeling tool with a straightforward UI to duplicate and mirror selected objects across the x, y, and z axes, in world space. This tool streamlined my character modeling workflow, particularly for mirroring separate objects like eyes along the x-axis. It also supports mirroring multiple selections at once.",
  },
  {
    name: "Smoke Simulator",
    time: "2024",
    image: Smoke_Pic,
    text: "We built a 3D smoke simulator using an Eulerian grid-based approach to model realistic fluid dynamics, following the Navier-Stokes equations. The project involves steps for diffusion, advection, and projection to conserve mass and simulate fluid motion, with OpenMP used to enhance speed. We expanded a cloth simulation framework to 3D, which presented unique challenges but taught us valuable skills in adapting physics-based systems to complex dimensions. The project was implemented in C++.",
    link: "https://elpescadoperezoso1291.github.io/CS184-Final-Project-Website/final_website/index.html",
  },
  {
    name: "Cloth Simulator",
    time: "2024",
    image: Cloth_Pic,
    text: "Developed a cloth simulator using point masses and springs, incorporating self-collision, object collisions, and the effects of gravity and wind fields. Additionally, implemented various GLSL shaders, including Lambert, Blinn-Phong, texture mapping, bump mapping, displacement mapping, toon shading, and environment reflection maps. The project was implemented in C++.",
    link: "https://cal-cs184-student.github.io/hw-webpages-sp24-etam1/hw4/index.html",
  },
  {
    name: "Path Tracer",
    time: "2024",
    image: PathTracer_Pic,
    text: "Developed a physics-based pathtracer capable of rendering realistic interactions with diffuse and conductive materials. The pathtracer incorporates advanced techniques like ray-primitive intersections, performance-enhancing bounding volume hierarchies, and Monte Carlo estimators for precise light calculations. Direct and global illumination methods were implemented to capture realistic light behavior, while adaptive sampling was used to minimize noise in the final render. The project was implemented using C++.",
    link: "https://cal-cs184-student.github.io/hw-webpages-sp24-etam1/hw3/index.html",
  },
  {
    name: "Mesh Editor",
    time: "2024",
    image: Mesh_Pic,
    text: "Developed a .dae file viewer leveraging advanced techniques for mesh manipulation, including edge flipping, edge splitting, Loop subdivision, surface smoothing, as well as modeling Bezier curves and surfaces. The project was implemented in C++.",
    link: "https://cal-cs184-student.github.io/hw-webpages-sp24-etam1/hw2/index.html",
  },
  {
    name: "SVG Rasterizer",
    time: "2024",
    image: Rasterizer_Pic,
    text: "I developed a software application for rasterizing SVG files, employing a range of sampling techniques including supersampling, pixel sampling, and mipmapping to accurately render SVG classes and textures. The project was implemented in C++.",
    link: "https://cal-cs184-student.github.io/hw-webpages-sp24-oligonagon/hw1/index.html",
  },
  {
    name: "Chess Endgame Solver",
    time: "2023",
    image: Chess_Endgame_Pic,
    text: "In a team of 3, we generated an original 6-man chess endgame database using C, addressing significant deficiencies present in online chess endgame databases. This was achieved by conceptualizing and implementing an algorithm that facilitated swift traversal of the database, significantly enhancing storage and retrieval processes. Presently, our focus lies in enhancing project interactivity through animation refinement, while concurrently optimizing the algorithm via parallelization techniques. Additionally, we are expanding the project scope to encompass 7-man endgames by addressing edge cases, debugging intricacies, and strategically reducing our solver's storage requirements by a substantial tenfold.",
    link: "https://nyc.cs.berkeley.edu/uni/games/chess/variants/endgame1",
  },
  {
    name: "Personal Website",
    time: "2023",
    image: PersonalWebsitePic,
    text: "My personal website serves as a dynamic showcase of my passions, accomplishments, and creativity. It functions as a professional portfolio, showcasing my skills and contributions to various fields. I self-taught myself HTML, CSS, JavaScript, and React to build my personal website, where I also designed every image and visual feature.",
  },
  {
    name: "Machine Learning Database Compression",
    time: "2023",
    image: MLDCPic,
    text: "With a team of 7, we created a game database compression by using PyTorch to combine a model and an exceptions table. We trained neural networks to categorize game positions into value-remoteness categories, ensuring vital game data preservation. One model employed regression techniques and delta calculations for exceptions, while another assessed primitive values and remoteness, using a temporary exceptions table. Trained initially on a small tic-tac-toe dataset, our third model trained on the larger Dao game dataset, has shown promising results in advancing compression techniques.",
  },
  {
    name: "Build Your Own World",
    time: "2023",
    image: BYOWPic,
    text: "In my Build Your Own World project, I created a game from scratch using Java. I took on the challenge of designing and developing all aspects, including graphics, interaction controls, and world-building. This game offers the unique ability to generate different worlds using various seeds, ensuring a fresh experience with every playthrough. Exploring the expansive map, players will encounter trap rooms that add an element of danger and excitement. To enhance usability, I implemented save, load, new, and quit options, allowing players to conveniently manage their progress.",
  },
  {
    name: "Central Processing Unit Simulation (CPU)",
    time: "2023",
    image: CPU_Pic,
    text: "In this Logisim project, I developed fundamental components of a pipelined processor. I constructed an ALU handling arithmetic, logical, and bitwise operations, a 32-register Register File, and an Immediate Generator for addi instructions. Additionally, I created a CPU Datapath featuring a pipelined architecture with five stages to execute addi instructions. This involved fetching, decoding, utilizing the ALU, and writing back results to designated registers. I conducted thorough testing and debugging using provided test benches and the test.sh script to ensure circuit accuracy.",
  },
  {
    name: "Gitlet (Simplified Control System)",
    time: "2023",
    image: GitletPic,
    text: "I created a custom version control system based on Github using Java. This system provides a range of functionalities such as init, add, remove, restore, reset, status, log, branch, and merge. Additionally, it enables users to locate commits based on commit messages, enhancing accessibility and usability.",
  },
  {
    name: "Typing Speed Test",
    time: "2022",
    image: Typing_Pic,
    text: "I created a Python program for typing speed measurement and spelling error correction using code written in the 'cats.py' file. Implemented within UC Berkeley's CS61A course framework, the project involved text samples for typing exercises and a web server for a graphical user interface. My responsibilities revolved around file handling, string manipulation, debugging, and rigorous code testing using the 'ok' autograder to ensure accurate functionality and track progress throughout the development process.",
  },
  {
    name: "Scheme Interpreter",
    time: "2022",
    image: Scheme_Interpreter_Pic,
    text: "I developed an interpreter for a subset of the Scheme programming language using Python. My responsibilities included implementing Scheme expression evaluation, managing special forms, and defining Scheme expression classes. I gained insights into language design issues impacting interpreter implementation and quirks in languages due to interpreter decisions.",
  },
  {
    name: "Ants vs. Bees",
    time: "2022",
    image: AntVsBee_Pic,
    text: "I crafted 'Ants vs. Bees,' a strategic computer game centered on defending a colony against bee invasions, utilizing an object-oriented programming methodology. This involved implementing diverse ant types, each possessing unique abilities. Additionally, I devised a systematic approach enabling bees to navigate through tunnels and strategically engage ants. By integrating essential concepts like health, food costs, and turn order, I ensured the game's functionality and captivating gameplay experience.",
  },
];

function ComputerScience() {
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const [page, setPage] = useState(0);

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

  return (
    <div className="computerScience">
      <div className="csHeaderWrap">
        <div className="csHeaderContent">
          <div className="csHeaderLeft">
            <div className="csHeader">COMPUTER SCIENCE BASEMENT</div>
            <img
              src={downButton}
              className="cs-down-button"
              alt="Scroll Down"
              onClick={() => {
                window.scrollBy({
                  top: window.innerHeight,
                  left: 0,
                  behavior: 'smooth',
                });
              }}
            />
          </div>
          <div className="cs-basement-slot" aria-hidden="true" />
        </div>
      </div>
      <img src={csBasement} alt="Computer science basement" className="cs-basement-img" />

      <div className="csProjectsSection">
        <img
          src={downButton}
          className="cs-projects-arrow cs-projects-arrow-left"
          alt="Previous projects"
          onClick={goToPreviousPage}
        />
        <div className="csProjectsContent">
          <div className="csHeaderDescription" key={page}>
            {visibleProjects.map((project) =>
              project.link ? (
                <CsExperienceWithLink
                  key={project.name}
                  name={project.name}
                  time={project.time}
                  image={project.image}
                  text={project.text}
                  link={project.link}
                />
              ) : (
                <CsExperience
                  key={project.name}
                  name={project.name}
                  time={project.time}
                  image={project.image}
                  text={project.text}
                />
              )
            )}
          </div>
          <div className="cs-page-dots">
            {Array.from({ length: totalPages }, (_, index) => (
              <button
                key={index}
                type="button"
                className={`cs-page-dot${index === page ? ' cs-page-dot-active' : ''}`}
                aria-label={`Go to project page ${index + 1}`}
                aria-current={index === page ? 'true' : undefined}
                onClick={() => setPage(index)}
              />
            ))}
          </div>
        </div>
        <img
          src={downButton}
          className="cs-projects-arrow cs-projects-arrow-right"
          alt="Next projects"
          onClick={goToNextPage}
        />
      </div>
    </div>
  );
}

export default ComputerScience;
