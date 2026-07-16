import { useState, useRef, useMemo, useEffect } from 'react';
import './computerScience.css';
import NewCsExperience from './newCsExperience.js';
import BYOWPic from "../../assets/BYOWPic.png";
import GitletPic from "../../assets/gitlet_Project_Image.jpeg";
import NGordnetPic from "../../assets/NGordnet.png";
import HogPic from "../../assets/Hog.png";
import SnekPic from "../../assets/Snek.png";
import KachowPic from "../../assets/Kachow.png";
import HyperspectralPic from "../../assets/Hyperspectral.png";
import PintosPic from "../../assets/Pintos.png";
import RecommenderPic from "../../assets/Recommender.png";
import FirefoxPic from "../../assets/Firefox.png";
import WeatherPic from "../../assets/Weather.png";
import DonorLoopPic from "../../assets/DonorLoop.png";
import SnapChestPic from "../../assets/SnapChest.png";
import ArtifactorPic from "../../assets/Artifactor.png";
import SympatheticOrchestraPic from "../../assets/SympatheticOrchestra.png";
import CPU_Pic from "../../assets/CPU_Project.png";
import Typing_Pic from "../../assets/Typing_Project.png";
import AntVsBee_Pic from "../../assets/AntBeeProject.png";
import PathTracer_Pic from "../../assets/PathTracer.png";
import Cloth_Pic from "../../assets/ClothPic.png";
import Mesh_Pic from "../../assets/TEAPOT.png";
import Smoke_Pic from "../../assets/SmokePic.png";
import Rasterizer_Pic from "../../assets/mascotimage.jpeg";
import MS1_Pic from "../../assets/MayaScript1.png";
import MS2_Pic from "../../assets/MayaScript2.png";
import MLDCPic from "../../assets/Machine_Learning_Data_Compression_Project.jpeg";
import Chess_Endgame_Pic from "../../assets/Chess_Endgame_Project.png";
import ohloneAcornCover from "../../assets/ohloneAcornCover.png";
import myHouseCover from "../../assets/myHouse.png";
import binaryButtonCover from "../../assets/binaryButtonCover.png";
import smileCover from "../../assets/smileCover.png";
import escapeRoom from "../../assets/escapeRoom.png";
import Kodama from "../../assets/ProjectionMapping.png";
import AlienShowCover from "../../assets/alienShowCover.png";
import Bubbles from "../../assets/Bubbles1.png";
import ConstellationDrawer from "../../assets/ConstellationDrawer.jpg";
import breathingFlowersPic from "../../assets/vr-art-body.png";
import downButton from "../../assets/Experience_ArrowDown.png";
import csBasement from "../../assets/csBasement.png";
import creativeCodingFilter from "../../assets/creativeCodingFilter.png";
import aiMlFilter from "../../assets/aiMlFilter.png";
import webProductEngineeringFilter from "../../assets/webProductEngineeringFilter.png";
import graphicsFilter from "../../assets/graphicsFilter.png";
import languagesAlgorithmsFilter from "../../assets/languagesAlgorithmsFilter.png";
import arVrGamingFilter from "../../assets/arVrGamingFilter.png";
import hciFilter from "../../assets/hciFilter.png";
import systemsInfrastructureFilter from "../../assets/systemsInfrastructureFilter.png";

const PROJECTS_PER_PAGE = 6;

const FILTER_OVERLAY_IMAGES = {
  'creative-coding': creativeCodingFilter,
  graphics: graphicsFilter,
  systems: systemsInfrastructureFilter,
  hci: hciFilter,
  algorithms: languagesAlgorithmsFilter,
  web: webProductEngineeringFilter,
  'arvr-gaming': arVrGamingFilter,
  'ai-ml': aiMlFilter,
};

const FILTER_OPTIONS = [
  {
    id: 'creative-coding',
    label: 'Creative Coding',
    matches: ['Creative Coding'],
  },
  {
    id: 'graphics',
    label: 'Graphics',
    matches: ['Graphics'],
  },
  {
    id: 'systems',
    label: 'Systems + Infrastructure',
    matches: ['Systems', 'Systems + Infrastructure'],
  },
  {
    id: 'hci',
    label: 'Human Computer Interaction',
    matches: ['Human Computer Interaction'],
  },
  {
    id: 'algorithms',
    label: 'Languages + Algorithms',
    matches: ['Algorithms'],
  },
  {
    id: 'web',
    label: 'Web + Product Engineering',
    matches: ['Web Engineering', 'Web + Product Engineering'],
  },
  {
    id: 'arvr-gaming',
    label: 'AR/VR + Gaming',
    matches: ['AR', 'VR', 'Gaming'],
  },
  {
    id: 'ai-ml',
    label: 'AI + ML',
    matches: ['AI', 'ML'],
  },
];

function projectMatchesFilters(project, filters) {
  if (!filters.length) return true;
  const tags = [project.tag1, project.tag2, project.tag3].filter(Boolean);
  return filters.some((filter) => tags.some((tag) => filter.matches.includes(tag)));
}

function getOverlayIdsForTags(tags) {
  return FILTER_OPTIONS
    .filter((option) => FILTER_OVERLAY_IMAGES[option.id] && tags.some((tag) => option.matches.includes(tag)))
    .map((option) => option.id);
}

const projects = [
  {
    title: "Breathing Flowers: VR + Art + Body Awareness",
    image: breathingFlowersPic,
    tag1: "VR",
    tag2: "Creative Coding",
    tag3: "Human Computer Interaction",
    role: "Research Developer, VR Developer, Creative Technologist",
    timeline: "August 2025 – December 2025",
    organization: "FHL Vive Center for Enhanced Reality",
    team: "Vivian Chan, Stacey Lei, Xin Zhou",
    toolsSkills: "Unity, C#, EmotiBit, VR, HDRP",
    shortDescription: "A bio-responsive VR experience where physiological signals transform a virtual flower environment in real time.",
  },
  {
    title: "Gitlet",
    image: GitletPic,
    tag1: "Algorithms",
    tag2: "Systems + Infrastructure",
    timeline: "2024",
    toolsSkills: "Java, Git, JUnit",
    shortDescription: "A fully functional version-control system modeled after Git that tracks file history, branching, and repository state.",
  },
  {
    title: "NGordnet",
    image: NGordnetPic,
    tag1: "Algorithms",
    timeline: "2023",
    toolsSkills: "Java, Princeton Libraries, WordNet, NGram Datasets",
    shortDescription: "An interactive platform for exploring historical word usage, semantic relationships, and language evolution over time.",
  },
  {
    title: "BYOW",
    image: BYOWPic,
    tag1: "Gaming",
    timeline: "2023",
    team: "Spencer Chang",
    toolsSkills: "Java, Princeton Tile Engine, Randomized Algorithms",
    shortDescription: "A procedurally generated tile-based exploration game where every seed creates a unique playable world.",
  },
  {
    title: "Cats",
    image: Typing_Pic,
    tag1: "Algorithms",
    timeline: "2022",
    toolsSkills: "Python",
    shortDescription: "A typing-speed and autocorrect application that measures accuracy, speed, and multiplayer progress.",
  },
  {
    title: "Hog",
    image: HogPic,
    tag1: "Gaming",
    timeline: "2022",
    toolsSkills: "Python",
    shortDescription: "A strategy-based dice game that explores probability, decision-making, and automated gameplay strategies.",
  },
  {
    title: "Ants",
    image: AntVsBee_Pic,
    tag1: "Gaming",
    timeline: "2022",
    toolsSkills: "Python",
    shortDescription: "A tower-defense game inspired by Plants vs. Zombies featuring diverse defenders, enemies, and combat mechanics.",
  },
  {
    title: "Snek",
    image: SnekPic,
    tag1: "Systems",
    timeline: "2023",
    team: "Henry Cen",
    toolsSkills: "C",
    shortDescription: "A fully playable Snake game developed in C with real-time gameplay and memory-safe systems.",
  },
  // {
  //   title: "Classify",
  //   tag1: "Systems",
  //   timeline: "2023",
  //   team: "Henry Cen",
  //   toolsSkills: "RISC-V Assembly",
  //   shortDescription: "A neural-network inference engine written in RISC-V assembly that classifies handwritten digits.",
  // },
  {
    title: "CPU",
    image: CPU_Pic,
    tag1: "Systems",
    timeline: "2023",
    team: "Henry Cen",
    toolsSkills: "Logisim, Digital Logic, RISC-V Architecture",
    shortDescription: "A custom processor capable of executing a subset of the RISC-V instruction set.",
  },
  {
    title: "kaChow",
    image: KachowPic,
    tag1: "Systems",
    timeline: "2023",
    team: "Henry Cen",
    toolsSkills: "C, OpenMP, AVX Intrinsics, SIMD",
    shortDescription: "A high-performance computing project focused on accelerating computational workloads through parallel processing.",
  },
  {
    title: "Path Tracer",
    image: PathTracer_Pic,
    tag1: "Graphics",
    timeline: "2024",
    toolsSkills: "C++, OpenGL, GLSL",
    shortDescription: "A physically based renderer that simulates the behavior of light to generate photorealistic images.",
  },
  {
    title: "Cloth Simulator",
    image: Cloth_Pic,
    tag1: "Graphics",
    timeline: "2024",
    toolsSkills: "C++, OpenGL, GLSL",
    shortDescription: "A real-time cloth simulation that models fabric movement, collisions, and material behavior.",
  },
  {
    title: "Mesh Editor",
    image: Mesh_Pic,
    tag1: "Graphics",
    tag2: "Algorithms",
    timeline: "2024",
    toolsSkills: "C++, OpenGL, Half-Edge Mesh",
    shortDescription: "A 3D geometry editor for constructing and manipulating curves, surfaces, and polygonal meshes.",
  },
  {
    title: "Smoke Simulator",
    image: Smoke_Pic,
    tag1: "Graphics",
    tag2: "Systems",
    role: "Graphics Developer",
    timeline: "January 2024 – May 2024",
    team: "Michael Huang, Geovanni Mojica, Kyle Wong",
    toolsSkills: "C++, OpenGL, OpenMP",
    shortDescription: "A real-time smoke simulation that models fluid dynamics using an Eulerian grid.",
  },
  {
    title: "SVG Rasterizer",
    image: Rasterizer_Pic,
    tag1: "Graphics",
    timeline: "2024",
    team: "Olivia Xie",
    toolsSkills: "C++, OpenGL",
    shortDescription: "A software renderer that converts scalable vector graphics into rasterized images.",
  },
  {
    title: "Hyperspectral Imaging Process Tool",
    image: HyperspectralPic,
    tag1: "Web Engineering",
    tag2: "Graphics",
    role: "Graphics Developer, Full-Stack Developer",
    timeline: "August 2024 – December 2024",
    organization: "Berkeley AI Research",
    team: "Cody Zanoria Garcia, Shujing Hu",
    toolsSkills: "React, Flask, Python, Astropy, NumPy, OpenCV, FITS",
    shortDescription: "A web-based platform for processing and visualizing NASA hyperspectral FITS imagery.",
  },
  {
    title: "Operating Systems Development with Pintos",
    image: PintosPic,
    tag1: "Systems",
    timeline: "2024",
    team: "Jiajun Liu, Rohin Juneja, Brian Sui",
    toolsSkills: "C, Pintos, GDB",
    shortDescription: "An educational operating system extended with multithreading, scheduling, synchronization, and filesystem functionality.",
  },
  {
    title: "Recommender",
    image: RecommenderPic,
    tag1: "AI",
    tag2: "Algorithms",
    tag3: "Web Engineering",
    timeline: "2025",
    toolsSkills: "Python, NumPy, Pandas",
    shortDescription: "A recommendation engine that ranks relevant content using behavioral and similarity-based signals.",
  },
  {
    title: "Weather Interface",
    image: WeatherPic,
    tag1: "Web + Product Engineering",
    timeline: "2025",
    toolsSkills: "HTML, CSS, JavaScript, Weather API",
    shortDescription: "A responsive web application for viewing current weather conditions and forecasts.",
  },
  {
    title: "Donor Loop",
    image: DonorLoopPic,
    tag1: "Web + Product Engineering",
    tag2: "Human Computer Interaction",
    timeline: "January 2025 – May 2025",
    team: "Shi Bo Jiang, Maria Fernanda Romano Silva, Daniela Fajardo, Ethan Tam, Rachel Hong",
    toolsSkills: "Figma, User Research, Wireframing, Prototyping",
    shortDescription: "A product concept that helps donors discover opportunities, understand their impact, and stay engaged after contributing.",
  },
  {
    title: "Script 1",
    image: MS2_Pic,
    tag1: "Graphics",
    tag2: "Creative Coding",
    timeline: "2024",
    toolsSkills: "Python, Autodesk Maya",
    shortDescription: "A Maya automation tool for streamlining repetitive 3D production workflows.",
  },
  {
    title: "Script 2",
    image: MS1_Pic,
    tag1: "Graphics",
    tag2: "Creative Coding",
    timeline: "2024",
    toolsSkills: "Python, Autodesk Maya",
    shortDescription: "A Maya production tool for accelerating repetitive modeling and animation tasks.",
  },
  {
    title: "FireFox Adaptive Performance Extension",
    image: FirefoxPic,
    tag1: "Web + Product Engineering",
    tag2: "Human Computer Interaction",
    tag3: "Systems",
    role: "Full-Stack Product Designer, Development Lead",
    timeline: "September 2025 – February 2026",
    organization: "Mozilla",
    team: "Daniel Lee, Connor McSeveney, Junho Choi, Paco Lau, Erin Pan, Kalyani Puthenpurayil, Sam Hudson, Tommy Nguyen, Seeun An",
    toolsSkills: "React, Node.js, JavaScript, SQL, R, Browser APIs",
    shortDescription: "A Firefox extension that helps users monitor browser performance and manage resource-intensive tabs.",
  },
  {
    title: "Machine Learning Database",
    image: MLDCPic,
    tag1: "ML",
    tag2: "Algorithms",
    tag3: "Systems + Infrastructure",
    role: "Machine Learning Engineer Researcher",
    timeline: "August 2023 – December 2023",
    organization: "GamesCrafters",
    team: "Kaelyn Huang",
    toolsSkills: "Python, PyTorch, Machine Learning",
    shortDescription: "A machine-learning system for compressing large combinatorial game databases through predictive modeling.",
  },
  {
    title: "Chess Endgame",
    image: Chess_Endgame_Pic,
    tag1: "AI",
    tag2: "Algorithms",
    tag3: "Systems + Infrastructure",
    role: "Game Theory Researcher, Full-Stack Engineer",
    timeline: "August 2023 – December 2023",
    organization: "GamesCrafters",
    team: "Amy Chakladar",
    toolsSkills: "C++, OpenMP, Game Theory, Chess",
    shortDescription: "A six-piece chess endgame database that computes and retrieves optimal play for complex board positions.",
  },
  {
    title: "Ohlone Exhibit",
    image: ohloneAcornCover,
    tag1: "Human Computer Interaction",
    tag2: "Creative Coding",
    role: "Creative Technologist Assistant, Frontend Developer, Designer",
    timeline: "March 2025 – October 2025",
    organization: "Berkeley Center for New Media",
    team: "Yangyang Yang",
    toolsSkills: "p5.js, HTML, CSS, Projection Mapping",
    shortDescription: "An interactive museum exhibit that teaches visitors about sustainability and Ohlone acorn-gathering traditions.",
  },
  {
    title: "Snap Chat Treasure",
    image: SnapChestPic,
    tag1: "AR",
    tag2: "Graphics",
    tag3: "Creative Coding",
    role: "3D Modeler, Technical Artist, AR Developer",
    timeline: "January 2025 – August 2025",
    organization: "Snap Inc.",
    team: "James Hu, Daniel He, Mia Wu, Josh Jang, Iris Qin",
    toolsSkills: "Lens Studio, JavaScript, Blender, AR",
    shortDescription: "An augmented reality treasure-hunt experience that blends interactive clues and virtual objects into the real world.",
  },
  {
    title: "Artifactor",
    image: ArtifactorPic,
    tag1: "Human Computer Interaction",
    tag2: "Web Engineering",
    tag3: "AI",
    role: "HCI Researcher, Full-Stack Developer",
    timeline: "January 2025 – December 2025",
    organization: "Berkeley Institute of Design",
    team: "Shm Almeda, Sophia Liu, Elaine Shu",
    toolsSkills: "React, Node.js, Python, RAG, Vector Embeddings, Semantic Search, LLM APIs",
    shortDescription: "An AI-powered infinite canvas for exploring, organizing, and interpreting art-history materials.",
  },
  {
    title: "Sympathetic Orchestra",
    image: SympatheticOrchestraPic,
    tag1: "Human Computer Interaction",
    tag2: "Web Engineering",
    role: "HCI Researcher, Full-Stack Developer",
    timeline: "June 2024 – December 2024",
    organization: "Berkeley Institute of Design",
    team: "Shm Almeda, Bob Wei",
    toolsSkills: "p5.js, MediaPipe, Web Audio API, JavaScript",
    shortDescription: "An interactive conducting experience that transforms hand gestures into control of a virtual orchestra.",
  },
  {
    title: "My House",
    image: myHouseCover,
    tag1: "Creative Coding",
    tag2: "Human Computer Interaction",
    role: "Creative Technologist, Interactive Experience Designer, Fabricator",
    timeline: "2025",
    toolsSkills: "Woodworking, Laser Cutting, Projection Mapping, Fabrication",
    shortDescription: "A handcrafted interactive installation that combines physical fabrication, projection mapping, and digital media.",
  },
  {
    title: "Binary Button",
    image: binaryButtonCover,
    tag1: "Creative Coding",
    tag2: "Human Computer Interaction",
    role: "Creative Technologist, Interactive Experience Designer",
    timeline: "2025",
    toolsSkills: "Arduino, Electronics, Soldering, Physical Computing",
    shortDescription: "A physical-computing installation centered around a custom interactive button.",
  },
  {
    title: ":)",
    image: smileCover,
    tag1: "Creative Coding",
    role: "Creative Technologist, Interactive Experience Designer, Fabricator",
    timeline: "2025",
    toolsSkills: "Fabrication, Projection Mapping, Creative Coding",
    shortDescription: "A playful interactive installation centered on audience participation and expressive digital interaction.",
  },
  {
    title: "Escape Room",
    image: escapeRoom,
    tag1: "Gaming",
    tag2: "Creative Coding",
    role: "Game Developer",
    timeline: "2024",
    toolsSkills: "Unity, C#, Game Design",
    shortDescription: "A themed escape-room experience where players solve interconnected puzzles to progress.",
  },
  {
    title: "Pikachu Face Mapping",
    image: Kodama,
    tag1: "Creative Coding",
    tag2: "AI",
    role: "Creative Technologist, Interaction Designer",
    timeline: "2024",
    toolsSkills: "MediaPipe, Computer Vision, p5.js",
    shortDescription: "A real-time face-tracking experience that transforms users into an animated Pikachu.",
  },
  {
    title: "Constellation Drawer",
    image: ConstellationDrawer,
    tag1: "Creative Coding",
    tag2: "Graphics",
    role: "Creative Technologist, Interaction Designer",
    timeline: "2024",
    toolsSkills: "p5.js, JavaScript",
    shortDescription: "An interactive drawing experience that transforms user gestures into constellation-inspired artwork.",
  },
  {
    title: "Alien Show",
    image: AlienShowCover,
    tag1: "Creative Coding",
    role: "Creative Technologist, Interactive Experience Designer, Fabricator, Animator",
    timeline: "2024",
    toolsSkills: "Projection Mapping, Animation, Fabrication",
    shortDescription: "An animated interactive installation centered around an alien character and immersive digital storytelling.",
  },
  {
    title: "Bubbles",
    image: Bubbles,
    tag1: "Creative Coding",
    role: "Creative Technologist, Interactive Experience Designer",
    timeline: "2024",
    toolsSkills: "p5.js, JavaScript",
    shortDescription: "An interactive visual simulation where animated bubbles dynamically respond to user interaction.",
  },
];

function ComputerScience() {
  const [page, setPage] = useState(0);
  const [filterOpen, setFilterOpen] = useState(false);
  const [activeFilterIds, setActiveFilterIds] = useState([]);
  const [hoveredOverlayIds, setHoveredOverlayIds] = useState([]);
  const contentRef = useRef(null);

  const activeFilters = useMemo(
    () => FILTER_OPTIONS.filter((option) => activeFilterIds.includes(option.id)),
    [activeFilterIds]
  );

  const filteredProjects = useMemo(
    () => projects.filter((project) => projectMatchesFilters(project, activeFilters)),
    [activeFilters]
  );

  const totalPages = Math.max(1, Math.ceil(filteredProjects.length / PROJECTS_PER_PAGE));
  const filterKey = activeFilterIds.length ? activeFilterIds.join('+') : 'all';
  const visibleOverlayIds = FILTER_OPTIONS
    .map((option) => option.id)
    .filter(
      (id) =>
        FILTER_OVERLAY_IMAGES[id] &&
        (activeFilterIds.includes(id) || hoveredOverlayIds.includes(id))
    );

  useEffect(() => {
    setPage(0);
  }, [filterKey]);

  useEffect(() => {
    setHoveredOverlayIds([]);
  }, [page, filterKey]);

  useEffect(() => {
    if (page > totalPages - 1) {
      setPage(Math.max(0, totalPages - 1));
    }
  }, [page, totalPages]);

  const visibleProjects = filteredProjects.slice(
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

  const selectFilter = (filterId) => {
    setActiveFilterIds((current) =>
      current.includes(filterId)
        ? current.filter((id) => id !== filterId)
        : [...current, filterId]
    );
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
              onClick={scrollDown}
            />
          </div>
          <div className="cs-basement-slot" aria-hidden="true" />
        </div>
      </div>

      <div className="csContentSection" ref={contentRef}>
        <div className="cs-basement-stack" aria-hidden="true">
          <img src={csBasement} alt="Computer science basement" className="cs-basement-img" />
          {visibleOverlayIds.map((id) => (
            <img
              key={id}
              src={FILTER_OVERLAY_IMAGES[id]}
              alt=""
              className="cs-basement-filter-overlay"
            />
          ))}
        </div>

        <div className="csProjectsSection">
          <img
            src={downButton}
            className="cs-projects-arrow cs-projects-arrow-left"
            alt="Previous projects"
            onClick={goToPreviousPage}
          />
          <div className="csProjectsContent">
            <div className="cs-filter-row">
              <div className="cs-filter-controls">
                <button
                  type="button"
                  className={`cs-filter-button${filterOpen ? ' cs-filter-button-open' : ''}${
                    activeFilterIds.length ? ' cs-filter-button-active' : ''
                  }`}
                  onClick={() => setFilterOpen((open) => !open)}
                  aria-expanded={filterOpen}
                >
                  Filter
                </button>
                {filterOpen && (
                  <button
                    type="button"
                    className="cs-filter-reset"
                    onClick={() => setActiveFilterIds([])}
                    disabled={!activeFilterIds.length}
                  >
                    Reset
                  </button>
                )}
              </div>
              {filterOpen && (
                <div className="cs-filter-options">
                  {FILTER_OPTIONS.map((option) => (
                    <button
                      key={option.id}
                      type="button"
                      className={`cs-filter-option${
                        activeFilterIds.includes(option.id) ? ' cs-filter-option-active' : ''
                      }`}
                      onClick={() => selectFilter(option.id)}
                      aria-pressed={activeFilterIds.includes(option.id)}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div className="csHeaderDescription" key={`${page}-${filterKey}`}>
              {visibleProjects.map((project) => (
                <NewCsExperience
                  key={project.title}
                  {...project}
                  overlayIds={getOverlayIdsForTags(
                    [project.tag1, project.tag2, project.tag3].filter(Boolean)
                  )}
                  onOverlayHover={setHoveredOverlayIds}
                />
              ))}
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
    </div>
  );
}

export default ComputerScience;
