import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { NavLink, useLocation } from "react-router-dom";
import './NavBar.css';
import logo from "../../assets/website-Logo.png";
import musicLogo from "../../assets/Music.png";
import noMusicLogo from "../../assets/NoMusic.png";

const navItems = [
	{ to: "/csPortfolio", label: "COMPUTER SCIENCE" },
	{ to: "/film", label: "FILM" },
	{ to: "/artPortfolio", label: "ART" },
	{ to: "/research", label: "RESEARCH" },
	{ to: "/experiences", label: "EXPERIENCES" },
	{ to: "/contacts", label: "CONTACT" },
];

function NavBar() {
	const location = useLocation();
	const isFilmPage = location.pathname === '/film' || location.hash === '#/film';
	const [isMusicPlaying, setIsMusicPlaying] = useState(false);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const toggleMusic = () => {
		const audio = window.__entryAudio__;
		if (audio) {
			if (isMusicPlaying) {
				audio.pause();
			} else {
				audio.muted = false;
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

	const handleNavClick = () => {
		scrollToTop();
		setDropdownOpen(false);
	};

	useEffect(() => {
		if (!dropdownOpen) return;

		const handleClickOutside = (event) => {
			if (
				!event.target.closest('.nav-dropdown-container') &&
				!event.target.closest('.nav-dropdown-menu-wrapper')
			) {
				setDropdownOpen(false);
			}
		};

		document.addEventListener('click', handleClickOutside);
		return () => document.removeEventListener('click', handleClickOutside);
	}, [dropdownOpen]);

	return (
		<nav className="Nav">
			<div className="nav-shell">
				<div className="NavBackground">
					<div className="nav-dropdown-container">
						<button
							type="button"
							className="nav-dropdown-toggle"
							aria-label="Open navigation menu"
							aria-expanded={dropdownOpen}
							onClick={(event) => {
								event.stopPropagation();
								setDropdownOpen((open) => !open);
							}}
						>
							<span className="nav-dropdown-bar" />
							<span className="nav-dropdown-bar" />
							<span className="nav-dropdown-bar" />
						</button>

						{dropdownOpen && createPortal(
							<div className={`nav-dropdown-menu-wrapper${isFilmPage ? ' film-page' : ''}`}>
								<ul className="nav-dropdown-menu">
									{navItems.map(({ to, label }) => (
										<li key={to}>
											<NavLink
												to={to}
												onClick={handleNavClick}
												className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
											>
												{label}
											</NavLink>
										</li>
									))}
								</ul>
							</div>,
							document.body
						)}
					</div>

					<ul className="nav-links">
						{navItems.slice(0, 3).map(({ to, label }) => (
							<li key={to} className="nav-item-desktop">
								<NavLink
									to={to}
									onClick={scrollToTop}
									className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
								>
									{label}
								</NavLink>
							</li>
						))}

						<li className="nav-item-home">
							<NavLink to="/" onClick={scrollToTop}>
								<img className="logo" src={logo} alt="Home" />
							</NavLink>
						</li>

						{navItems.slice(3).map(({ to, label }) => (
							<li key={to} className="nav-item-desktop">
								<NavLink
									to={to}
									onClick={scrollToTop}
									className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
								>
									{label}
								</NavLink>
							</li>
						))}
					</ul>
				</div>

				<div className="music-toggle-btn-container">
					<button type="button" onClick={toggleMusic} className="music-toggle-btn">
						<img
							src={isMusicPlaying ? musicLogo : noMusicLogo}
							alt={isMusicPlaying ? "Mute music" : "Play music"}
							className="music-icon"
						/>
					</button>
				</div>
			</div>
		</nav>
	);
}

export default NavBar;
