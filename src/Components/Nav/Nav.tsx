import React from 'react'
import { NavLink } from "react-router-dom"
import { NavProps } from "../../interfaces"
import './Nav.css'
import { BsHouseDoor } from "react-icons/bs"

const Nav = ({ setAllQuotes }: NavProps)  => {

  const clearQuoteContainer = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => setAllQuotes([])

	return(
		<nav className="nav-bar">
      <NavLink className="home-nav" to='/home' onClick={(e) => clearQuoteContainer(e)}><BsHouseDoor /></NavLink>
      <NavLink className="favorites-nav" to='/favorites'>FAVORITES</NavLink>
		</nav>
	)
}

export default Nav 