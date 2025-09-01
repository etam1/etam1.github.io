import './experiences.css';
import beanStock from "../../assets/Experience_Beanstock.png";
import leafIcon from "../../assets/leaf.png";
import clouds from "../../assets/Experiences_Clouds.png";
import downButton from "../../assets/Experience_ArrowDown.png";
import React, { useEffect, useRef, useState } from 'react';

function ExperienceCard({ company, role, date, description, opacity, innerRef }) {
  return (
    <div className="experience-card" style={{ opacity }} ref={innerRef}>
      <div className="experience-header-row">
        <h1 className="company">{company}</h1>
        <span className="date">{date}</span>
      </div>
      <h2 className="role">{role}</h2>
      <p className="description">{description}</p>
    </div>
  );
}

const experienceData = [
  {
    company: "Adobe",
    role: "Experience Design Prototyping Intern",
    date: "May 2025 - Present",
    description: "Creating cool, creative, and impactful technologies :D"
  },
  {
    company: "UC Berkeley Electrical Engineering & Computer Sciences",
    role: "Undergraduate Student Instructor",
    date: "June 2023 - Present",
    description: "At UC Berkeley, I served as a CS61B and CS61BL Undergraduate Student Instructor, delivering lab lessons on data structures, debugging, design documentation, and unit testing. I earned a teaching effectiveness rating of 6.86/7 (department average: 6.14) and was honored with the Outstanding Graduate Student Instructor (OGSI) Award in Spring 2025 for my contributions."
  },
  {
    company: "Berkeley Center of New Media",
    role: "Research Assistant",
    date: "Mar 2025 - Present",
    description: "Designing embodied game experiences to support learning of local ecological knowledge."
  },
  {
    company: "Cubstart",
    role: "Web Development Instructor",
    date: "Feb 2025 - Present",
    description: "Led interactive lectures for 200+ students on building real-world applications with full-stack web development using HTML/CSS, JavaScript, React.js, Express.js, MongoDB, and Figma."
  },
  {
    company: "Berkeley Institute of Design (BiD)",
    role: "Human-Computer Interaction Researcher",
    date: "May 2024 - Present",
    description: "Conducting research on human-computer interaction with Shm Almeda, developing interactive systems that amplify creative expression and enhance learning experiences."
  },
  {
    company: "Cinematic Arts and Production Studios",
    role: "Filmmaker",
    date: "Feb 2025 - May 2025",
    description: "Contributed to the live action short film 'Look on the Bright Side' as part of the editing and art production team for the Spring 2025 showcase."
  },
  {
    company: "UCBUGG (UC Berkeley Undergraduate Graphics Group)",
    role: "Course Facilitator",
    date: "Jan 2024 - Feb 2025",
    description: "Lectured and developed course materials on Maya’s 3D modeling and animation fundamentals, advising 4 teams through the animation pipeline on modeling, rigging, animation, and post-production."
  },
  {
    company: "Geopogo",
    role: "Software Engineer Intern",
    date: "Jun 2024 - Sep 2024",
    description: "Implemented marker tracking in Magic Leap OS using Aruco and QR codes for 6DoF spatial pose recognition, and developed Unity features to email headset-captured images, enhancing AR data flow."
  },
  {
    company: "Berkeley Artificial Intelligence Research (BAIR)",
    role: "Undergraduate Student Researcher",
    date: "Aug 2023 - Dec 2023",
    description: "Researched and developed an open-source API for training and visualizing Neural Radiance Fields (NeRFs) to improve rendering workflows in AI-powered graphics pipelines."
  }
];

function Experiences() {
  const cardRefs = useRef([]);
  const [opacities, setOpacities] = useState([]);
  const [activeIndex, setActiveIndex] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  if (cardRefs.current.length !== experienceData.length) {
    cardRefs.current = Array(experienceData.length).fill().map((_, i) => cardRefs.current[i] || React.createRef());
  }

  useEffect(() => {
    const handleScroll = () => {
      const newOpacities = cardRefs.current.map((ref, i) => {
        const rect = ref.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenter);
        const maxDistance = window.innerHeight / 2;
        const opacity = Math.max(0.05, 1 - distance / maxDistance);
        return opacity;
      });
      setOpacities(newOpacities);

      const closestIndex = cardRefs.current.reduce((closest, ref, i) => {
        const rect = ref.current.getBoundingClientRect();
        const centerY = window.innerHeight / 2;
        const cardCenter = rect.top + rect.height / 2;
        const distance = Math.abs(centerY - cardCenter);
        return distance < closest.distance ? { index: i, distance } : closest;
      }, { index: 0, distance: Infinity }).index;

      setActiveIndex(closestIndex);

      // Show/hide sidebar based on scroll position
      if (window.scrollY > window.innerHeight * 0.3) {
        setShowSidebar(true);
      } else {
        setShowSidebar(false);
      }
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="experiences">
      <div className="background-title">EXPERIENCES</div>

        <img
        src={downButton}
        className="experience-down-button"
        alt="Scroll Down"
        onClick={() => {
            const element = cardRefs.current[0]?.current;
            if (element) {
            const rect = element.getBoundingClientRect();
            const scrollTop = window.scrollY;
            const elementTop = rect.top + scrollTop;
            const offset = elementTop - window.innerHeight / 2 + rect.height / 2;
            window.scrollTo({ top: offset, behavior: 'smooth' });
            }
        }}
        />


      <img src={clouds} alt="Clouds" className="clouds-img" />
      <img className="beanstock-img" src={beanStock} alt="Bean Stock" />

      {showSidebar && (
        <div className="dot-sidebar">
          {experienceData.map((_, index) => (
            <div
              key={index}
              className="dot"
              onClick={() => {
                const element = cardRefs.current[index]?.current;
                if (element) {
                  const rect = element.getBoundingClientRect();
                  const scrollTop = window.scrollY;
                  const elementTop = rect.top + scrollTop;
                  const offset = elementTop - window.innerHeight / 2 + rect.height / 2;

                  window.scrollTo({
                    top: offset,
                    behavior: 'smooth',
                  });

                  setTimeout(() => {
                    const event = new Event('scroll');
                    window.dispatchEvent(event);
                  }, 350);
                }
              }}
            >
              {activeIndex === index ? (
                <img src={leafIcon} alt="Leaf" className="leaf-icon" />
              ) : null}
            </div>
          ))}
        </div>
      )}

      <div style={{ height: '30vw' }} />

      {experienceData.map((item, index) => (
        <div className="experience-box" key={index}>
          <ExperienceCard
            {...item}
            innerRef={cardRefs.current[index]}
            opacity={opacities[index] || 0.2}
          />
        </div>
      ))}

    </div>
  );
}

export default Experiences;
