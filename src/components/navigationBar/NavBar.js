import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from "../../assets/website-Logo.png";
import musicLogo from "../../assets/Music.png";
import noMusicLogo from "../../assets/NoMusic.png";

function NavBar() {
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);

	const toggleMusic = () => {
		const audio = window.__entryAudio__;
		if (audio) {
			if (isMusicPlaying) {
				audio.pause();
			} else {
				audio.muted = false; // Unmute when user clicks to play
				audio.play();
			}
			setIsMusicPlaying(!isMusicPlaying);
		}
	};

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			left: 0
		});
	};

	return (
		<nav className="Nav">
			<div className="NavBackground">
				<ul className="nav-links">

					{/* <a href="scroll-icon">
						<div class="scroll-down"></div>
					</a> */}

					<ex><li><NavLink to="/csPortfolio" onClick={scrollToTop} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>COMPUTER SCIENCE</NavLink></li></ex>
					<ex><li><NavLink to="/film" onClick={scrollToTop} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>FILM</NavLink></li></ex>
					<li><NavLink to="/" onClick={scrollToTop}><img className="logo" src={logo} alt="chopper"></img></NavLink></li>
									
					<ex><li><NavLink to="/artPortfolio" onClick={scrollToTop} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>ART</NavLink></li></ex>

					<ex><li><NavLink to="/experiences" onClick={scrollToTop} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>EXPERIENCES</NavLink></li></ex>
					<ex><li><NavLink to="/contacts" onClick={scrollToTop} className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>CONTACT</NavLink></li></ex>

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