import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './public/assets/logo2.png'

import './Nav.css'
import { BsHouseDoor, BsFillTrashFill } from "react-icons/bs";

const Nav = () => {
	return(
		<nav className="nav-bar">
				<NavLink className="home-nav" to='/home'><BsHouseDoor /></NavLink>
				{/* <NavLink className="home-nav" to='/home'><BsFillTrashFill /></NavLink> */}
				<NavLink className="favorites-nav" to='/favorites'>FAVORITES</NavLink>
		</nav>
	)
}

export default Nav 