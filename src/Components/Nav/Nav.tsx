import React from 'react'
import { NavLink } from "react-router-dom"
import { QuoteInterface } from "../../interfaces"

import './Nav.css'
import { BsHouseDoor } from "react-icons/bs"

interface NavProps {
  setAllQuotes: React.Dispatch<React.SetStateAction<QuoteInterface[]>>
}

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