// import { useEffect } from 'react';
// import { useRef } from 'react';
// import { useState } from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';
import logo from "/Users/ethantam/Desktop/etweb/src/assets/website-Logo.png";

function NavBar() {
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
		</nav>
	);
}

export default NavBar;