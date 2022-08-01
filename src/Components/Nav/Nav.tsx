import React from 'react'
import { NavLink } from "react-router-dom"
import { NavProps } from "../../interfaces"
import './Nav.css'
import { BsHouseDoor } from "react-icons/bs"

const Nav = ({ setAllQuotes }: NavProps)  => {

  const clearQuoteContainer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setAllQuotes([])

	return(
		<nav className="nav-bar">
      <NavLink className="home-nav" to='/home' aria-label="Home" onClick={(e) => clearQuoteContainer(e)}><BsHouseDoor /></NavLink>
      <NavLink className="favorites-nav" to='/favorites' aria-label="Favorites">FAVORITES</NavLink>
		</nav>
	)
}

export default Nav 