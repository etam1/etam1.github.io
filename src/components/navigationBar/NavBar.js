import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from "../../assets/website-Logo.png";
import musicLogo from "../../assets/Music.png";
import noMusicLogo from "../../assets/NoMusic.png";

function NavBar() {
	const [isMusicPlaying, setIsMusicPlaying] = useState(true);

	const toggleMusic = () => {
		const audio = window.__entryAudio__;
		if (audio) {
			if (isMusicPlaying) {
				audio.pause();
			} else {
				audio.play();
			}
			setIsMusicPlaying(!isMusicPlaying);
		}
	};

	return (
		<nav className="Nav">
			<div className="NavBackground">
				<ul className="nav-links">

					{/* <a href="scroll-icon">
						<div class="scroll-down"></div>
					</a> */}

					<ex><li><NavLink to="/csPortfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
						COMPUTER SCIENCE
					</NavLink></li></ex>
					<ex><li><NavLink to="/artPortfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ART</NavLink></li></ex>
					{/* <ex><li><NavLink to="/experiences" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>RESEARCH</NavLink></li></ex> */}


					{/* <ex><li><NavLink to="/artPortfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>TEACHING</NavLink></li></ex> */}
					
					<li><NavLink to="/"><img className="logo" src={logo} alt="chopper"></img></NavLink></li>
									
					{/* <ex><li><NavLink to="/artPortfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>FILM</NavLink></li></ex> */}
					<ex><li><NavLink to="/experiences" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>EXPERIENCES</NavLink></li></ex>
					<ex><li><NavLink to="/contacts" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink></li></ex>

					{/* <div id="scroll-icon">
						
					</div> */}
					
					{/*
					<ex><li><a href="mailto:ethantam9@gmail.com">resume</a></li></ex>
					<ex><li><a href="mailto:ethantam9@gmail.com">cv</a></li></ex>
					*/}
				
				</ul>
			</div>
			<div className="music-toggle-btn-container">
				<button onClick={toggleMusic} className="music-toggle-btn">
					<img 
						src={isMusicPlaying ? musicLogo : noMusicLogo} 
						alt={isMusicPlaying ? "Mute music" : "Play music"} 
						className="music-icon"
					/>
				</button>
			</div>
		</nav>
	);
}

export default NavBar;