import { useState } from 'react';
import './film.css';
import TV from "../../assets/TV.svg";
import LeftButton from "../../assets/Left_Button.svg";
import RightButton from "../../assets/Right_Button.svg";
import hover1 from "../../assets/Hover1.svg";
import hover2 from "../../assets/Hover2.svg";
import hover3 from "../../assets/Hover3.svg";

function Film() {
  const videos = [
    "https://www.youtube.com/embed/bnyFYbi3RsI?si=PM6fATD8KJnki_h",
    "https://www.youtube.com/embed/0zljpSqJgHc?si=L5TI2EHVvSTTPqS9",
    "https://www.youtube.com/embed/DSgmxClFaQM?si=ozyC7RfRLgj95rLp",
    "https://www.youtube.com/embed/deqK3hyqebQ",
    "https://www.youtube.com/embed/c_X0GK8imc0?si=ceVp_GYypspJJN4v",
    "https://www.youtube.com/embed/82HM8w58jcE?si=koKdGyofoIuWoE-s",
    "https://www.youtube.com/embed/2TCr-e-rHlY?si=2NmPwKhBoxi3ySr6"
  ];

  const videoNames = [
    "The Replacement",
    "Broken Heart Algorithm",
    "Happy Pickle Animation Trailer",
    "Shooting Snail Animation",
    "Outside of the Box",
    "Look on the Bright Side",
    "Joan Savvy's First Day on Earth"
  ];

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  const handlePreviousVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === 0 ? videos.length - 1 : prevIndex - 1
    );
  };

  const handleNextVideo = () => {
    setCurrentVideoIndex((prevIndex) => 
      prevIndex === videos.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="film">
      <div className="film-corner film-corner-top-left">F</div>
      <div className="film-corner film-corner-top-right">I</div>
      <div className="film-corner film-corner-bottom-left">L</div>
      <div className="film-corner film-corner-bottom-right">M</div>
      <div className="film-content">
        <div className="tv-container">
          <img 
            src={LeftButton} 
            alt="Left Button" 
            className="left-button" 
            onClick={handlePreviousVideo}
            style={{ cursor: 'pointer' }}
          />
          <div className="tv-wrapper">
            <img src={TV} alt="TV" className="tv-image" />
            <iframe 
              className="tv-video"
              src={videos[currentVideoIndex]}
              title="Film Video"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
            <div className="video-title">{videoNames[currentVideoIndex]}</div>
          </div>
          <img 
            src={RightButton} 
            alt="Right Button" 
            className="right-button" 
            onClick={handleNextVideo}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <img src={hover1} alt="Hover 1" className="hover-image hover1" />
        <img src={hover2} alt="Hover 2" className="hover-image hover2" />
        <img src={hover3} alt="Hover 3" className="hover-image hover3" />
      </div>
    </div>
  );
}

export default Film;
