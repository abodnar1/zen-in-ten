import React from 'react'
import { NavLink } from "react-router-dom";

import './Nav.css'
import { BsHouseDoor } from "react-icons/bs";

const Nav = () => {
	return(
		<nav className="nav-bar">
				<NavLink className="home-nav" to='/home'><BsHouseDoor /></NavLink>
				<NavLink className="favorites-nav" to='/favorites'>FAVORITES</NavLink>
		</nav>
	)
}

export default Nav 