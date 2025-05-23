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

					<ex><li><NavLink to="/csPortfolio" >COMPUTER SCIENCE</NavLink></li></ex>
					<ex><li><NavLink to="/artPortfolio" >ART</NavLink></li></ex>
					<ex><li><NavLink to="/artPortfolio" >FILM</NavLink></li></ex>
					<li><NavLink to="/"><img className="logo" src={logo} alt="chopper"></img></NavLink></li>
					<ex><li><NavLink to="/experiences" >RESEARCH</NavLink></li></ex>
					<ex><li><NavLink to="/experiences" >EXPERIENCES</NavLink></li></ex>
					<ex><li><NavLink to="/contacts" >CONTACT</NavLink></li></ex>

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