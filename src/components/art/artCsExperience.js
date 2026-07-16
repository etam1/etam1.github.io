import { useEffect, useMemo, useRef, useState } from 'react';
import NewCsExperience from '../computerScience/newCsExperience.js';
import '../computerScience/computerScience.css';
import './art.css';

import downButton from '../../assets/Experience_ArrowDown.png';
import artMuseum from '../../assets/artMuseumMap.png';
import artCreativeCodingFilter from '../../assets/artCreativeCodingFilter.png';
import artDesignFilter from '../../assets/artDesignFilter.png';
import artAnimationFilter from '../../assets/artAnimationFilter.png';
import artVisualArtsFilter from '../../assets/artVisualArtsFilter.png';
import artCreativeEmbeddedFilter from '../../assets/artCreativeEmbeddedFilter.png';

// Covers (from existing `src/assets`)
import CalhacksCover from '../../assets/CalhacksCover.png';
import CalhacksPhotoDesign from '../../assets/calhacksphotodesign.png';
import ShootingSnailCover from '../../assets/ShootingSnailCover.png';
import HappyPickleCover from '../../assets/HappyPickleCover.png';
import BampfaWaterStamp from '../../assets/bampfaImage.jpg';
import OutsideOfTheBoxCover from '../../assets/outsideofthebox.png';
import BrokenHeartAlgorithmCover from '../../assets/BrokenHeartAlgorithmCover.png';
import myHouseCover from '../../assets/myHouse.png';
import binaryButtonCover from '../../assets/binaryButtonCover.png';
import smileCover from '../../assets/smileCover.png';
import escapeRoom from '../../assets/escapeRoom.png';
import PikachuCover from '../../assets/ProjectionMapping.png';
import ConstellationCover from '../../assets/Star.png';
import AlienShowCover from '../../assets/alienShowCover.png';
import BubblesCover from '../../assets/Bubbles1.png';
import ohloneAcornCover from '../../assets/ohloneAcornCover.png';
import SnapChestCover from '../../assets/SnapChest.png';
import BreathingFlowersCover from '../../assets/vr-art-body.png';
import MayaScript1Cover from '../../assets/MayaScript1.png';
import MayaScript2Cover from '../../assets/MayaScript2.png';
import FirefoxCover from '../../assets/Firefox.png';

const PROJECTS_PER_PAGE = 6;

const FILTER_OVERLAY_IMAGES = {
  'creative-coding': artCreativeCodingFilter,
  design: artDesignFilter,
  animation: artAnimationFilter,
  'visual-arts': artVisualArtsFilter,
  'creative-embedded': artCreativeEmbeddedFilter,
};

const FILTER_OPTIONS = [
  { id: 'design', label: 'Design', matches: ['Design'] },
  { id: 'animation', label: 'Animation', matches: ['Animation'] },
  { id: 'visual-arts', label: 'Visual Arts', matches: ['Visual Arts'] },
  { id: 'creative-embedded', label: 'Creative Embedded Systems', matches: ['Creative Embedded Systems'] },
  { id: 'creative-coding', label: 'Creative Coding', matches: ['Creative Coding'] },
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

const PROJECTS = [
  {
    title: 'CalHacks 13.0',
    image: CalhacksCover,
    tag1: 'Design',
    role: 'Brand Design Director',
    timeline: 'January 2025 - October 2025',
    organization: 'CalHacks',
    team: 'Jin Lee, Elisa Kong, Rachael Chen, Mihir Pucha',
    shortDescription:
      'Designed the visual identity for Cal Hacks 13.0, creating branding, merchandise, event graphics, and digital assets around the theme art and dither.',
    toolsSkills: 'Figma, Adobe Illustrator',
  },
  {
    title: 'CalHacks AI Hackathon',
    image: CalhacksPhotoDesign,
    tag1: 'Design',
    role: 'Brand Design Director',
    timeline: 'January 2026 - June 2026',
    organization: 'CalHacks',
    team: 'Victor Pham, Jasmine Lee, Lanna Xiao, Trinity Nguyen',
    shortDescription:
      'Developed the visual identity for Cal Hacks AI Hackathon, producing branding and event materials inspired by the theme Splatoon.',
    toolsSkills: 'Figma, Adobe Illustrator',
  },
  {
    title: 'Shooting Snail',
    image: ShootingSnailCover,
    tag1: 'Animation',
    tag2: 'Visual Arts',
    role: '3D Animator',
    timeline: 'January 2023 - May 2023',
    organization: 'UCBugg: 3D Modeling and Animation',
    team: 'Khylie Aviles, Guillem Sueba, Francis Basco, Aidan Meyer',
    shortDescription:
      'An animated short about a determined snail chasing its dream of becoming a star, where I contributed as an animator.',
    toolsSkills: 'Autodesk Maya, Adobe After Effects, Adobe Premiere Pro, Procreate',
  },
  {
    title: 'Happy Pickle',
    image: HappyPickleCover,
    tag1: 'Animation',
    tag2: 'Visual Arts',
    role: '3D Animator, 2D Animator',
    timeline: 'August 2023 - December 2023',
    organization: 'UCBugg: 3D Modeling and Animation',
    team: 'Khylie Aviles, Inas Zulaikha Anwar, Annie Lin',
    shortDescription:
      'An animated short following a pickle trapped in a mundane office job before its story takes a dark turn, where I contributed as an animator.',
    toolsSkills: 'Autodesk Maya, Adobe After Effects, Adobe Premiere Pro, Procreate',
  },
  {
    title: 'BAMPFA Water Stamp',
    image: BampfaWaterStamp,
    tag1: 'Animation',
    role: '3D Animator',
    timeline: 'March 2025 - May 2025',
    organization: 'Berkeley Art Museum and Pacific Film Archive',
    team: 'Hanji Xu',
    shortDescription:
      'A promotional animation created for the Berkeley Art Museum and Pacific Film Archive to advertise its community stamp-making workshop.',
    toolsSkills: 'Adobe After Effects, Blender, Adobe Premiere Pro',
  },
  {
    title: 'Outside of the Box',
    image: OutsideOfTheBoxCover,
    tag1: 'Animation',
    tag2: 'Visual Arts',
    role: 'Director, 3D Animator, 2D Artist',
    timeline: 'October 2025',
    organization: '24 Hour Animation Challenge',
    team: 'Khylie Aviles, Elaine Shu, Stacey Lei',
    shortDescription:
      'A 24-hour animated short exploring the theme "Flip Your Perspective," recognized as a Top 50 finalist in the challenge.',
    toolsSkills: 'Autodesk Maya, Adobe After Effects, Adobe Premiere Pro, Adobe Illustrator',
  },
  {
    title: 'Broken Heart Algorithm',
    image: BrokenHeartAlgorithmCover,
    tag1: 'Animation',
    tag2: 'Visual Arts',
    role: '3D Animator',
    timeline: 'October 2024',
    organization: '24 Hour Animation Challenge',
    team: 'Raine Koizumi, Khylie Aviles',
    shortDescription:
      'An animated short imagining a future where AI becomes a trusted companion through the story of friendship and loss.',
    toolsSkills: 'Autodesk Maya, Adobe After Effects, Adobe Premiere Pro, Adobe Illustrator',
  },
  {
    title: 'My House',
    image: myHouseCover,
    tag1: 'Creative Embedded Systems',
    tag2: 'Creative Coding',
    role: 'Interactive Experience Designer',
    timeline: '2025',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS, Projection Mapping',
    shortDescription:
      'An interactive projection mapping installation that lets users draw digitally and watch their artwork appear across a physical house model.',
    organization: '',
    team: '',
  },
  {
    title: 'Binary Button',
    image: binaryButtonCover,
    tag1: 'Creative Embedded Systems',
    role: 'Creative Technologist, Interactive Experience Designer',
    timeline: '2025',
    toolsSkills: 'Arduino, C++, LEDs, Breadboard Electronics',
    shortDescription:
      'A handheld fidget toy that visualizes binary counting through programmable LED lights with every button press.',
    organization: '',
    team: '',
  },
  {
    title: ':)',
    image: smileCover,
    tag1: 'Creative Embedded Systems',
    role: 'Creative Technologist, Interactive Experience Designer, Fabricator',
    timeline: '2025',
    toolsSkills: 'Arduino, C++, Servo Motors',
    shortDescription:
      'An interactive drawing machine that automatically paints a smiley face onto a sheet of paper inserted by the user.',
    organization: '',
    team: '',
  },
  {
    title: 'Escape Room',
    image: escapeRoom,
    tag1: 'Creative Coding',
    role: 'Game Developer',
    timeline: '2024',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS',
    shortDescription:
      'A browser-based puzzle game where players solve spot-the-difference challenges to escape a series of rooms.',
    organization: '',
    team: '',
  },
  {
    title: 'Pikachu Face Mapping',
    image: PikachuCover,
    tag1: 'Creative Embedded Systems',
    role: 'Creative Technologist, Interaction Designer',
    timeline: '2024',
    toolsSkills: 'p5.js, ml5.js, JavaScript, HTML/CSS',
    shortDescription:
      "A real-time face tracking experience that maps an animated Pikachu face onto the user's facial movements.",
    organization: '',
    team: '',
  },
  {
    title: 'Constellation Drawer',
    image: ConstellationCover,
    tag1: 'Creative Coding',
    role: 'Creative Technologist, Interaction Designer',
    timeline: '2024',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS',
    shortDescription:
      'An interactive drawing tool that transforms placed stars into procedurally generated constellations.',
    organization: '',
    team: '',
  },
  {
    title: 'Alien Show',
    image: AlienShowCover,
    tag1: 'Creative Embedded Systems',
    tag2: 'Visual Arts',
    tag3: 'Animation',
    role: 'Creative Technologist, Interactive Experience Designer, Fabricator, Animator',
    timeline: '2024',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS, Projection Mapping, Adobe After Effects, Autodesk Maya, Procreate',
    shortDescription:
      'A projection-mapped installation depicting a figure hypnotized by endless television static as a commentary on media consumption and dehumanization.',
    organization: '',
    team: '',
  },
  {
    title: 'Bubbles',
    image: BubblesCover,
    tag1: 'Creative Coding',
    role: 'Creative Technologist, Interactive Experience Designer',
    timeline: '2024',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS',
    shortDescription:
      'A playful interactive artwork where users generate colorful bouncing bubbles that dynamically fill the screen.',
    organization: '',
    team: '',
  },
  {
    title: 'Ohlone Exhibit',
    image: ohloneAcornCover,
    tag1: 'Creative Embedded Systems',
    role: 'Interactive Installation Designer, Creative Technologist Assistant, Frontend Developer',
    timeline: 'March 2025 - October 2025',
    organization: 'Berkeley Center of New Media',
    team: 'Yangyang Yang',
    toolsSkills: 'p5.js, JavaScript, HTML/CSS, Projection Mapping, Arduino',
    shortDescription:
      'An interactive museum exhibit that teaches children about Ohlone acorn gathering traditions through projection mapping and physical gameplay.',
  },
  {
    title: 'Snap Chat Treasure',
    image: SnapChestCover,
    tag1: 'Creative Embedded Systems',
    tag2: 'Animation',
    role: '3D Modeler, Technical Artist, AR Developer, Interactive Experience Designer',
    timeline: 'January 2025 - August 2025',
    organization: 'Snap Inc.',
    team: 'James Hu, Daniel He, Mia Wu, Josh Jang, Iris Qin',
    toolsSkills: 'Lens Studio, Spectacles SDK, JavaScript, Blender, Autodesk Maya',
    shortDescription:
      'An augmented reality treasure-hunt built for Snapchat Spectacles where players explore their surroundings to discover hidden treasures.',
  },
  {
    title: 'Breathing Flowers: VR + Art + Body Awareness',
    image: BreathingFlowersCover,
    tag1: 'Creative Embedded Systems',
    tag2: 'Animation',
    role: 'Research Developer, VR Developer, Creative Technologist',
    timeline: 'August 2025 - December 2025',
    organization: 'FHL Vive Center for Enhanced Reality',
    team: 'Vivian Chan, Stacey Lei, Xin Zhou',
    toolsSkills: 'Unity HDRP, C#, EmotiBit Sensor, VR, Blender',
    shortDescription:
      'A VR experience where flowers and the surrounding environment respond in real time to the user\'s breathing and physiological signals.',
  },
  {
    title: 'Script 1',
    image: MayaScript1Cover,
    tag1: 'Animation',
    role: 'Technical Artist',
    timeline: '2024',
    toolsSkills: 'Autodesk Maya, Python, PyMEL',
    shortDescription: 'A Maya tool that quickly generates large patches of grass from a single modeled grass asset.',
    organization: '',
    team: '',
  },
  {
    title: 'Script 2',
    image: MayaScript2Cover,
    tag1: 'Animation',
    role: 'Technical Artist',
    timeline: '2024',
    toolsSkills: 'Autodesk Maya, Python, PyMEL',
    shortDescription: 'A Maya tool that duplicates objects across the X, Y, and Z axes to speed up environment creation.',
    organization: '',
    team: '',
  },
  {
    title: 'Firefox Adaptive Performance Extension',
    image: FirefoxCover,
    tag1: 'Design',
    role: 'Full-Stack Product Designer, Development Lead',
    timeline: 'September 2025 - February 2026',
    organization: 'Mozilla',
    team: 'Daniel Lee, Connor McSeveney, Junho Choi, Paco Lau, Erin Pan, Kalyani Puthenpurayil, Sam Hudson, Tommy Nguyen, Seeun An',
    toolsSkills: 'React, TypeScript, Node.js, SQL, R',
    shortDescription:
      'A browser extension that monitors browsing behavior and system performance to recommend personalized optimizations for efficiency and energy usage.',
  },
];

function ArtCsExperience() {
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
    () => PROJECTS.filter((project) => projectMatchesFilters(project, activeFilters)),
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
      current.includes(filterId) ? current.filter((id) => id !== filterId) : [...current, filterId]
    );
  };

  return (
    <div
      className="art"
      style={{
        '--cs-nav-offset': '5vw',
        '--cs-card-size': 'min(14.8vw, 33vh)',
        '--cs-card-gap': 'min(2.1vw, 2.5vh)',
      }}
    >
      <div className="artHeaderWrap">
        <div className="artHeaderContent">
          <div className="artHeaderLeft">
            <div className="artHeader">ART MUSEUM</div>
            <img src={downButton} className="art-down-button" alt="Scroll Down" onClick={scrollDown} />
          </div>
          <div className="art-museum-slot" aria-hidden="true" />
        </div>
      </div>

      <div className="artContentSection" ref={contentRef}>
        <div className="cs-basement-stack" aria-hidden="true">
          <img src={artMuseum} alt="Art museum" className="cs-basement-img" />
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

export default ArtCsExperience;

